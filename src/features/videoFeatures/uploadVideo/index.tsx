import { useEffect, useState } from "react";
import clsx from "clsx";

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

export const UploadVideo: React.FC = () => {
  const [video, setVideo] = useState<File | null>(null);

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
    if (video) {
      setTitle((prev) => prev || video.name);
    }
  }, [setTitle, video]);

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
        setVideo(null);
        setImage(null);
      }, 2000);
    };

    if (video) {
      const data = new FormData();
      data.append("video", video);
      data.append("accessPublic", isPublic.toString());
      data.append("title", title);

      if (image) {
        data.append("image", image);
      }

      if (description) {
        data.append("description", description);
      }

      uploadVideo("/api/private/videos", "POST", data, setProgress, onSuccess, () => {});
    }
  };

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
          <TextInput
            className={styles.form__description}
            type="textarea"
            value={description}
            onChange={onDescriptionChange}
          />
          <Checkbox value={isPublic} onChange={toggleIsPublic} />
          <div className={commonStyles.form__bottom}>
            <ProgressBar progress={progress} />
            <Submit disabled={!!progress} className={styles.submit} />
          </div>
        </div>
      </div>
      <FileInput file={video} setFile={setVideo} type="video" title="Перетащите видео в область" />
      <FileInput file={image} setFile={setImage} type="image" title="Перетащите превью в область" />
    </form>
  );
};
