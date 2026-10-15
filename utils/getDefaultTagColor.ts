import { defaultTagColors } from "@/data/defaultTagColors";

export const getDefaultTagColor = (name: string) => {
  return defaultTagColors[name.toLowerCase() as keyof typeof defaultTagColors] ?? null;
};
