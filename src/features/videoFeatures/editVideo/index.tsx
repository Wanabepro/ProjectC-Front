/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router";

import api from "shared/api";
import { uploadVideo } from "features/videoFeatures/common/api";
import { useFormValues } from "features/videoFeatures/common/hooks/useFormValues";
import { FileInput } from "shared/fileInput";
import { ProgressBar } from "../common/ui/progressBar";
import { TextInput } from "shared/textInput";
import { Checkbox } from "../common/ui/checkbox";
import { Submit } from "../common/ui/submitButton";

import commonStyles from "../common/ui/styles.module.scss";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { useGetInfoByVideoIdQuery } from "./api";
import { skipToken } from "@reduxjs/toolkit/query";
import { useEffect } from "react";
import { DeleteVideo } from "./deleteVideo";

export const EditVideo: React.FC = () => {
  const params = useParams();

  const { data } = useGetInfoByVideoIdQuery(params.id || skipToken);

  const {
    setTitle,
    title,
    dispatch,
    progressRef,
    setProgress,
    onTitleChange,
    description,
    setDescription,
    onDescriptionChange,
    isPublic,
    setIsPublic,
    toggleIsPublic,
    progress,
    image,
    setImage,
  } = useFormValues();

  useEffect(() => {
    if (data) {
      const { title, description, accessPublic } = data;
      setTitle(title);
      setDescription(description);
      setIsPublic(accessPublic);
    }
  }, [data]);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const onSuccess = () => {
      dispatch(api.util.invalidateTags(["VideosList"]));

      setTimeout(() => {
        progressRef.current?.style.setProperty("--progress", "0%");
        setProgress(0);
        setTitle("");
        setDescription("");
        setIsPublic(false);
        setImage(null);
        dispatch(api.util.invalidateTags(["VideoInfo"]));
      }, 2000);
    };

    const data = new FormData();

    if (image) {
      data.append("image", image);
    }

    const dto = {
      title,
      description,
      accessPublic: isPublic,
    };

    data.append("dto", new Blob([JSON.stringify(dto)], { type: "application/json" }));

    uploadVideo(
      `/api/private/videos/edit/${params.id}`,
      "PATCH",
      data,
      setProgress,
      onSuccess,
      () => {}
    );
  };

  if (data) {
    return (
      <form
        className={clsx(commonStyles.form, styles.form)}
        action="/api/videos/private"
        method="POST"
        encType="multipart/form-data"
        onSubmit={onSubmit}
      >
        <div className={clsx(commonStyles.form__container, styles.form__container)}>
          <div className={commonStyles.form__textContainer}>
            <TextInput type="text" required={true} value={title} onChange={onTitleChange} />
            <TextInput type="textarea" value={description} onChange={onDescriptionChange} />
            <Checkbox value={isPublic} onChange={toggleIsPublic} />
            <div className={commonStyles.form__bottom}>
              <ProgressBar progress={progress} />
              <div className={styles.form__controls}>
                <Submit disabled={!!progress} />
                <DeleteVideo disabled={!!progress} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.fileInput}>
          <FileInput
            file={image}
            setFile={setImage}
            type="image"
            title="Перетащите превью в область"
          />
        </div>
      </form>
    );
  }
};
