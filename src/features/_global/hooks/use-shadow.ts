import { generateBoxShadow } from "@core/styles/shadow";
import { useColors } from "./use-color";

export const useShadow = () => {
  const colors = useColors();
  const shadows = {
    small: generateBoxShadow({
      offsetX: 0,
      offsetY: 2,
      blurRadius: 4,
      color: colors.black(0.05),
    }),
    medium: generateBoxShadow({
      offsetX: 0,
      offsetY: 4,
      blurRadius: 8,

      color: colors.black(),
    }),
    large: generateBoxShadow({
      offsetX: 0,
      offsetY: 6,
      blurRadius: 12,
      color: colors.black(),
    }),
    extraLarge: generateBoxShadow({
      offsetX: 0,
      offsetY: 8,
      blurRadius: 16,
      color: colors.black(),
    }),
  };
  return shadows;
};
