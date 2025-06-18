import type { ReactionTypes } from "entities/reaction/types";

type Reactions = Record<ReactionTypes, number>;

export type VideoData = {
  reactions: Reactions;
  id: string;
  videoUrl: string;
  title: string;
  description: string;
  createdAt: string;
  owner: string;
  imageUrl?: string;
  accessPublic: boolean;
};

export type VideoPreview = Omit<VideoData, "reactions" | "link" | "description">;
