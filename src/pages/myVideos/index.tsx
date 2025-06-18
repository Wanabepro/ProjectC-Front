import { useGetMyVideosQuery } from "./api";
import { VideoPreviews } from "entities/videoPreviews";

export const MyVideos: React.FC = () => {
  const { data: videos } = useGetMyVideosQuery();

  if (videos) {
    return <VideoPreviews videos={videos} editable={true} />;
  }
};
