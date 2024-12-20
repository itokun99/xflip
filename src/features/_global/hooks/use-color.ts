import { colorsAtom } from "@core/atoms";
import { rgba } from "@core/styles";
import { StyleSheet, useAtomValue } from "@core/packages";
import { useMemo } from "react";

export const useColors = () => {
  const palette = useAtomValue(colorsAtom);
  const colors = useMemo(
    () => ({
      primary: (alpha: number = 1) => rgba(palette, "primary", alpha),
      secondary: (alpha: number = 1) => rgba(palette, "secondary", alpha),
      secondary2: (alpha: number = 1) => rgba(palette, "secondary2", alpha),
      warning: (alpha: number = 1) => rgba(palette, "warning", alpha),
      danger: (alpha: number = 1) => rgba(palette, "danger", alpha),
      success: (alpha: number = 1) => rgba(palette, "success", alpha),
      info: (alpha: number = 1) => rgba(palette, "info", alpha),
      white: (alpha: number = 1) => rgba(palette, "white", alpha),
      black: (alpha: number = 1) => rgba(palette, "black", alpha),
      gray: (alpha: number = 1) => rgba(palette, "gray", alpha),
      transparent: "transparent",
    }),
    [palette],
  );

  const utils = useMemo(
    () =>
      StyleSheet.create({
        // Background Colors
        bgPrimaryAlpha10: {
          backgroundColor: colors.primary(0.1),
        },
        bgPrimaryAlpha20: {
          backgroundColor: colors.primary(0.2),
        },
        bgPrimaryAlpha30: {
          backgroundColor: colors.primary(0.3),
        },
        bgPrimaryAlpha40: {
          backgroundColor: colors.primary(0.4),
        },
        bgPrimaryAlpha50: {
          backgroundColor: colors.primary(0.5),
        },
        bgPrimaryAlpha60: {
          backgroundColor: colors.primary(0.6),
        },
        bgPrimaryAlpha70: {
          backgroundColor: colors.primary(0.7),
        },
        bgPrimaryAlpha80: {
          backgroundColor: colors.primary(0.8),
        },
        bgPrimaryAlpha90: {
          backgroundColor: colors.primary(0.9),
        },
        bgPrimaryAlpha100: {
          backgroundColor: colors.primary(1),
        },

        bgSecondaryAlpha10: {
          backgroundColor: colors.secondary(0.1),
        },
        bgSecondaryAlpha20: {
          backgroundColor: colors.secondary(0.2),
        },
        bgSecondaryAlpha30: {
          backgroundColor: colors.secondary(0.3),
        },
        bgSecondaryAlpha40: {
          backgroundColor: colors.secondary(0.4),
        },
        bgSecondaryAlpha50: {
          backgroundColor: colors.secondary(0.5),
        },
        bgSecondaryAlpha60: {
          backgroundColor: colors.secondary(0.6),
        },
        bgSecondaryAlpha70: {
          backgroundColor: colors.secondary(0.7),
        },
        bgSecondaryAlpha80: {
          backgroundColor: colors.secondary(0.8),
        },
        bgSecondaryAlpha90: {
          backgroundColor: colors.secondary(0.9),
        },
        bgSecondaryAlpha100: {
          backgroundColor: colors.secondary(1),
        },

        bgSecondary2Alpha10: {
          backgroundColor: colors.secondary2(0.1),
        },
        bgSecondary2Alpha20: {
          backgroundColor: colors.secondary2(0.2),
        },
        bgSecondary2Alpha30: {
          backgroundColor: colors.secondary2(0.3),
        },
        bgSecondary2Alpha40: {
          backgroundColor: colors.secondary2(0.4),
        },
        bgSecondary2Alpha50: {
          backgroundColor: colors.secondary2(0.5),
        },
        bgSecondary2Alpha60: {
          backgroundColor: colors.secondary2(0.6),
        },
        bgSecondary2Alpha70: {
          backgroundColor: colors.secondary2(0.7),
        },
        bgSecondary2Alpha80: {
          backgroundColor: colors.secondary2(0.8),
        },
        bgSecondary2Alpha90: {
          backgroundColor: colors.secondary2(0.9),
        },
        bgSecondary2Alpha100: {
          backgroundColor: colors.secondary2(1),
        },

        bgDangerAlpha10: {
          backgroundColor: colors.danger(0.1),
        },
        bgDangerAlpha20: {
          backgroundColor: colors.danger(0.2),
        },
        bgDangerAlpha30: {
          backgroundColor: colors.danger(0.3),
        },
        bgDangerAlpha40: {
          backgroundColor: colors.danger(0.4),
        },
        bgDangerAlpha50: {
          backgroundColor: colors.danger(0.5),
        },
        bgDangerAlpha60: {
          backgroundColor: colors.danger(0.6),
        },
        bgDangerAlpha70: {
          backgroundColor: colors.danger(0.7),
        },
        bgDangerAlpha80: {
          backgroundColor: colors.danger(0.8),
        },
        bgDangerAlpha90: {
          backgroundColor: colors.danger(0.9),
        },
        bgDangerAlpha100: {
          backgroundColor: colors.danger(1),
        },

        bgSuccessAlpha10: {
          backgroundColor: colors.success(0.1),
        },
        bgSuccessAlpha20: {
          backgroundColor: colors.success(0.2),
        },
        bgSuccessAlpha30: {
          backgroundColor: colors.success(0.3),
        },
        bgSuccessAlpha40: {
          backgroundColor: colors.success(0.4),
        },
        bgSuccessAlpha50: {
          backgroundColor: colors.success(0.5),
        },
        bgSuccessAlpha60: {
          backgroundColor: colors.success(0.6),
        },
        bgSuccessAlpha70: {
          backgroundColor: colors.success(0.7),
        },
        bgSuccessAlpha80: {
          backgroundColor: colors.success(0.8),
        },
        bgSuccessAlpha90: {
          backgroundColor: colors.success(0.9),
        },
        bgSuccessAlpha100: {
          backgroundColor: colors.success(1),
        },

        bgWarningAlpha10: {
          backgroundColor: colors.warning(0.1),
        },
        bgWarningAlpha20: {
          backgroundColor: colors.warning(0.2),
        },
        bgWarningAlpha30: {
          backgroundColor: colors.warning(0.3),
        },
        bgWarningAlpha40: {
          backgroundColor: colors.warning(0.4),
        },
        bgWarningAlpha50: {
          backgroundColor: colors.warning(0.5),
        },
        bgWarningAlpha60: {
          backgroundColor: colors.warning(0.6),
        },
        bgWarningAlpha70: {
          backgroundColor: colors.warning(0.7),
        },
        bgWarningAlpha80: {
          backgroundColor: colors.warning(0.8),
        },
        bgWarningAlpha90: {
          backgroundColor: colors.warning(0.9),
        },
        bgWarningAlpha100: {
          backgroundColor: colors.warning(1),
        },

        bgWhiteAlpha10: {
          backgroundColor: colors.white(0.1),
        },
        bgWhiteAlpha20: {
          backgroundColor: colors.white(0.2),
        },
        bgWhiteAlpha30: {
          backgroundColor: colors.white(0.3),
        },
        bgWhiteAlpha40: {
          backgroundColor: colors.white(0.4),
        },
        bgWhiteAlpha50: {
          backgroundColor: colors.white(0.5),
        },
        bgWhiteAlpha60: {
          backgroundColor: colors.white(0.6),
        },
        bgWhiteAlpha70: {
          backgroundColor: colors.white(0.7),
        },
        bgWhiteAlpha80: {
          backgroundColor: colors.white(0.8),
        },
        bgWhiteAlpha90: {
          backgroundColor: colors.white(0.9),
        },
        bgWhiteAlpha100: {
          backgroundColor: colors.white(1),
        },

        bgGrayAlpha10: {
          backgroundColor: colors.gray(0.1),
        },
        bgGrayAlpha20: {
          backgroundColor: colors.gray(0.2),
        },
        bgGrayAlpha30: {
          backgroundColor: colors.gray(0.3),
        },
        bgGrayAlpha40: {
          backgroundColor: colors.gray(0.4),
        },
        bgGrayAlpha50: {
          backgroundColor: colors.gray(0.5),
        },
        bgGrayAlpha60: {
          backgroundColor: colors.gray(0.6),
        },
        bgGrayAlpha70: {
          backgroundColor: colors.gray(0.7),
        },
        bgGrayAlpha80: {
          backgroundColor: colors.gray(0.8),
        },
        bgGrayAlpha90: {
          backgroundColor: colors.gray(0.9),
        },
        bgGrayAlpha100: {
          backgroundColor: colors.gray(1),
        },

        bgInfoAlpha10: {
          backgroundColor: colors.info(0.1),
        },
        bgInfoAlpha20: {
          backgroundColor: colors.info(0.2),
        },
        bgInfoAlpha30: {
          backgroundColor: colors.info(0.3),
        },
        bgInfoAlpha40: {
          backgroundColor: colors.info(0.4),
        },
        bgInfoAlpha50: {
          backgroundColor: colors.info(0.5),
        },
        bgInfoAlpha60: {
          backgroundColor: colors.info(0.6),
        },
        bgInfoAlpha70: {
          backgroundColor: colors.info(0.7),
        },
        bgInfoAlpha80: {
          backgroundColor: colors.info(0.8),
        },
        bgInfoAlpha90: {
          backgroundColor: colors.info(0.9),
        },
        bgInfoAlpha100: {
          backgroundColor: colors.info(1),
        },

        textInfoAlpha10: {
          color: colors.info(0.1),
        },
        textInfoAlpha20: {
          color: colors.info(0.2),
        },
        textInfoAlpha30: {
          color: colors.info(0.3),
        },
        textInfoAlpha40: {
          color: colors.info(0.4),
        },
        textInfoAlpha50: {
          color: colors.info(0.5),
        },
        textInfoAlpha60: {
          color: colors.info(0.6),
        },
        textInfoAlpha70: {
          color: colors.info(0.7),
        },
        textInfoAlpha80: {
          color: colors.info(0.8),
        },
        textInfoAlpha90: {
          color: colors.info(0.9),
        },
        textInfoAlpha100: {
          color: colors.info(1),
        },

        bgBlackAlpha10: {
          backgroundColor: colors.black(0.1),
        },
        bgBlackAlpha20: {
          backgroundColor: colors.black(0.2),
        },
        bgBlackAlpha30: {
          backgroundColor: colors.black(0.3),
        },
        bgBlackAlpha40: {
          backgroundColor: colors.black(0.4),
        },
        bgBlackAlpha50: {
          backgroundColor: colors.black(0.5),
        },
        bgBlackAlpha60: {
          backgroundColor: colors.black(0.6),
        },
        bgBlackAlpha70: {
          backgroundColor: colors.black(0.7),
        },
        bgBlackAlpha80: {
          backgroundColor: colors.black(0.8),
        },
        bgBlackAlpha90: {
          backgroundColor: colors.black(0.9),
        },
        bgBlackAlpha100: {
          backgroundColor: colors.black(1),
        },
        // Text Colors
        textPrimaryAlpha10: {
          color: colors.primary(0.1),
        },
        textPrimaryAlpha20: {
          color: colors.primary(0.2),
        },
        textPrimaryAlpha30: {
          color: colors.primary(0.3),
        },
        textPrimaryAlpha40: {
          color: colors.primary(0.4),
        },
        textPrimaryAlpha50: {
          color: colors.primary(0.5),
        },
        textPrimaryAlpha60: {
          color: colors.primary(0.6),
        },
        textPrimaryAlpha70: {
          color: colors.primary(0.7),
        },
        textPrimaryAlpha80: {
          color: colors.primary(0.8),
        },
        textPrimaryAlpha90: {
          color: colors.primary(0.9),
        },
        textPrimaryAlpha100: {
          color: colors.primary(1),
        },

        textSecondaryAlpha10: {
          color: colors.secondary(0.1),
        },
        textSecondaryAlpha20: {
          color: colors.secondary(0.2),
        },
        textSecondaryAlpha30: {
          color: colors.secondary(0.3),
        },
        textSecondaryAlpha40: {
          color: colors.secondary(0.4),
        },
        textSecondaryAlpha50: {
          color: colors.secondary(0.5),
        },
        textSecondaryAlpha60: {
          color: colors.secondary(0.6),
        },
        textSecondaryAlpha70: {
          color: colors.secondary(0.7),
        },
        textSecondaryAlpha80: {
          color: colors.secondary(0.8),
        },
        textSecondaryAlpha90: {
          color: colors.secondary(0.9),
        },
        textSecondaryAlpha100: {
          color: colors.secondary(1),
        },

        textDangerAlpha10: {
          color: colors.danger(0.1),
        },
        textDangerAlpha20: {
          color: colors.danger(0.2),
        },
        textDangerAlpha30: {
          color: colors.danger(0.3),
        },
        textDangerAlpha40: {
          color: colors.danger(0.4),
        },
        textDangerAlpha50: {
          color: colors.danger(0.5),
        },
        textDangerAlpha60: {
          color: colors.danger(0.6),
        },
        textDangerAlpha70: {
          color: colors.danger(0.7),
        },
        textDangerAlpha80: {
          color: colors.danger(0.8),
        },
        textDangerAlpha90: {
          color: colors.danger(0.9),
        },
        textDangerAlpha100: {
          color: colors.danger(1),
        },

        textSuccessAlpha10: {
          color: colors.success(0.1),
        },
        textSuccessAlpha20: {
          color: colors.success(0.2),
        },
        textSuccessAlpha30: {
          color: colors.success(0.3),
        },
        textSuccessAlpha40: {
          color: colors.success(0.4),
        },
        textSuccessAlpha50: {
          color: colors.success(0.5),
        },
        textSuccessAlpha60: {
          color: colors.success(0.6),
        },
        textSuccessAlpha70: {
          color: colors.success(0.7),
        },
        textSuccessAlpha80: {
          color: colors.success(0.8),
        },
        textSuccessAlpha90: {
          color: colors.success(0.9),
        },
        textSuccessAlpha100: {
          color: colors.success(1),
        },

        textWarningAlpha10: {
          color: colors.warning(0.1),
        },
        textWarningAlpha20: {
          color: colors.warning(0.2),
        },
        textWarningAlpha30: {
          color: colors.warning(0.3),
        },
        textWarningAlpha40: {
          color: colors.warning(0.4),
        },
        textWarningAlpha50: {
          color: colors.warning(0.5),
        },
        textWarningAlpha60: {
          color: colors.warning(0.6),
        },
        textWarningAlpha70: {
          color: colors.warning(0.7),
        },
        textWarningAlpha80: {
          color: colors.warning(0.8),
        },
        textWarningAlpha90: {
          color: colors.warning(0.9),
        },
        textWarningAlpha100: {
          color: colors.warning(1),
        },

        textWhiteAlpha10: {
          color: colors.white(0.1),
        },
        textWhiteAlpha20: {
          color: colors.white(0.2),
        },
        textWhiteAlpha30: {
          color: colors.white(0.3),
        },
        textWhiteAlpha40: {
          color: colors.white(0.4),
        },
        textWhiteAlpha50: {
          color: colors.white(0.5),
        },
        textWhiteAlpha60: {
          color: colors.white(0.6),
        },
        textWhiteAlpha70: {
          color: colors.white(0.7),
        },
        textWhiteAlpha80: {
          color: colors.white(0.8),
        },
        textWhiteAlpha90: {
          color: colors.white(0.9),
        },
        textWhiteAlpha100: {
          color: colors.white(1),
        },

        textBlackAlpha10: {
          color: colors.black(0.1),
        },
        textBlackAlpha20: {
          color: colors.black(0.2),
        },
        textBlackAlpha30: {
          color: colors.black(0.3),
        },
        textBlackAlpha40: {
          color: colors.black(0.4),
        },
        textBlackAlpha50: {
          color: colors.black(0.5),
        },
        textBlackAlpha60: {
          color: colors.black(0.6),
        },
        textBlackAlpha70: {
          color: colors.black(0.7),
        },
        textBlackAlpha80: {
          color: colors.black(0.8),
        },
        textBlackAlpha90: {
          color: colors.black(0.9),
        },
        textBlackAlpha100: {
          color: colors.black(1),
        },
      }),
    [colors],
  );

  return useMemo(() => ({ ...colors, ...utils }), [colors, utils]);
};
