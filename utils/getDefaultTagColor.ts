import { defaultTagColors } from "@/data/defaultTagColors";

export const getDefaultTagColor = (name: string) => {
    console.log(defaultTagColors[name.toLowerCase() as keyof typeof defaultTagColors])
  return defaultTagColors[name.toLowerCase() as keyof typeof defaultTagColors] ?? null;
};
