import { Platform } from "react-native";
// import { colors } from ".";

export interface BoxShadowOptions {
  offsetX: number;
  offsetY: number;
  blurRadius: number;
  spreadRadius?: number;
  color?: string;
}

export const generateBoxShadow = ({
  offsetX,
  offsetY,
  blurRadius,
  color = "#000",
}: BoxShadowOptions) => {
  if (Platform.OS === "ios") {
    return {
      shadowColor: color,
      shadowOffset: {
        width: offsetX,
        height: offsetY,
      },
      shadowOpacity: 0.3, // Adjust opacity as needed
      shadowRadius: blurRadius,
    };
  } else {
    return {
      elevation: blurRadius, // For Android
      backgroundColor: color, // Ensure the background color is set for elevation effect
    };
  }
};

// // Define multiple shadow styles
