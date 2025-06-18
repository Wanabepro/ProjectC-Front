import { useGetVideosQuery } from "./api";
import { VideoPreviews } from "entities/videoPreviews";

export const Main: React.FC = () => {
  const { data: videos } = useGetVideosQuery();

  if (videos) {
    return <VideoPreviews videos={videos} />;
  }
};
