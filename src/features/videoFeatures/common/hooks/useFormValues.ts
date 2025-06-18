import { useState, useRef } from "react";
import { useDispatch } from "react-redux";

export const useFormValues = () => {
  const [image, setImage] = useState<File | null>(null);
  const [isPublic, setIsPublic] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [progress, setProgress] = useState<number>(0);

  const dispatch = useDispatch();

  const progressRef = useRef<HTMLDivElement>(null);

  const onTitleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.target.value);
  };

  const onDescriptionChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setDescription(e.target.value);
  };

  const toggleIsPublic = () => {
    setIsPublic((prev) => !prev);
  };

  return {
    image,
    setImage,
    isPublic,
    setIsPublic,
    title,
    setTitle,
    description,
    setDescription,
    progress,
    onTitleChange,
    onDescriptionChange,
    toggleIsPublic,
    setProgress,
    dispatch,
    progressRef,
  };
};
