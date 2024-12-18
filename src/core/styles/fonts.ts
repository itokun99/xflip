import { Platform } from "react-native";

const isIOS = () => Platform.OS === "ios";

export const fontFamilies = {
  normal: {
    primary: {
      normal: isIOS() ? "Poppins-Regular" : "PoppinsRegular",
      medium: isIOS() ? "Poppins-Medium" : "PoppinsMedium",
      bold: isIOS() ? "Poppins-SemiBold" : "PoppinsSemiBold",
    },
    mono: {
      normal: isIOS() ? "SpaceMono-Regular" : "SpaceMonoRegular",
      medium: isIOS() ? "SpaceMono-Medium" : "SpaceMonoMedium",
      bold: isIOS() ? "SpaceMono-Bold" : "SpaceMonoBold",
    },
  },
  italic: {
    primary: {
      normal: isIOS() ? "Poppins-RegularItalic" : "PoppinsRegularItalic",
      medium: isIOS() ? "Poppins-MediumItalic" : "PoppinsMediumItalic",
      bold: isIOS() ? "Poppins-SemiBoldItalic" : "PoppinsSemiBoldItalic",
    },
    mono: {
      normal: isIOS() ? "SpaceMono-RegularItalic" : "SpaceMonoRegularItalic",
      medium: isIOS() ? "SpaceMono-MediumItalic" : "SpaceMonoMediumItalic",
      bold: isIOS() ? "SpaceMono-BoldItalic" : "SpaceMonoBoldItalic",
    },
  },
};

export const getFontFamily = (
  type: "primary" | "mono",
  variant: "normal" | "italic",
  weight: "normal" | "medium" | "bold",
) => {
  return fontFamilies[variant][type][weight];
};

export const fontSizes = {
  xxxs: 8,
  xxs: 10,
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};
