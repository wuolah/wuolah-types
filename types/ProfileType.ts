import { z } from "zod";
import { CommunitySchema } from "./Community";

export const ProfileSchema = z.object({
  id: z.number().positive(),
  nickname: z.string(),
  popularity: z.number().nonnegative().default(0),
  money: z.number().nonnegative().default(0),
  createdAt: z.string(),
});

export type ProfileType = z.infer<typeof ProfileSchema>;

export const ProfileCommunitySchema = z.object({
  userId: z.number().positive(),
  communityId: z.number().positive(),
  default: z.boolean().default(false),
  role: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),

  community: CommunitySchema.optional(),
  user: ProfileSchema.optional(),
});

export type ProfileCommunityType = z.infer<typeof ProfileCommunitySchema>;
