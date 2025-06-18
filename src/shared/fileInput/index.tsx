import { useRef, useState } from "react";
import clsx from "clsx";

import { processVideo } from "./utils/processVIdeo";
import { processImage } from "./utils/processImage";

import styles from "./styles.module.scss";

type InputType = "video" | "image";

type Props = {
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  type: InputType;
  title?: string;
};

const imageByType: Record<InputType, string> = {
  image: "/image.svg",
  video: "/video.svg",
};

export const FileInput: React.FC<Props> = ({
  file,
  setFile,
  type,
  title = "Перетащите файл в область",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [isHovered, setIsHovered] = useState(false);

  const handleFile = (file: File | undefined) => {
    if (file) {
      if (file.type.split("/")[0] !== type) {
        return;
      }

      setFile(file);

      if (type === "video") {
        processVideo(file, canvasRef);
      }

      if (type === "image") {
        processImage(file, canvasRef);
      }
    }
  };

  const onDragenter: React.DragEventHandler<HTMLLabelElement> = (e) => {
    e.preventDefault();

    setIsHovered(true);
  };

  const onDragover: React.DragEventHandler<HTMLLabelElement> = (e) => {
    e.preventDefault();

    setIsHovered(true);
  };

  const onDragleave: React.DragEventHandler<HTMLLabelElement> = (e) => {
    e.preventDefault();

    setIsHovered(false);
  };

  const onDrop: React.DragEventHandler<HTMLLabelElement> = (e) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];
    handleFile(file);
    setIsHovered(false);
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    handleFile(file);
  };

  const onDelete = () => {
    setFile(null);
    const canvas = canvasRef.current;

    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
  };

  return (
    <label
      className={clsx(styles.dragArea, isHovered && styles["dragArea--hovered"])}
      onDragEnter={onDragenter}
      onDragOver={onDragover}
      onDragLeave={onDragleave}
      onDrop={onDrop}
    >
      <input type="file" onChange={onFileChange} accept={`${type}/*`} />
      <div className={clsx(styles.canvasContainer, !!file && styles.shown)}>
        <div>
          <canvas ref={canvasRef}></canvas>
          <button className={styles.delete} type="button" onClick={onDelete}>
            Chose another file
          </button>
        </div>
      </div>
      <div className={clsx(styles.info, !file && styles.shown)}>
        <img src={imageByType[type]} alt="" />
        <p>{title}</p>
        <p>или можете нажать на нее и выбрать файл</p>
      </div>
    </label>
  );
};
