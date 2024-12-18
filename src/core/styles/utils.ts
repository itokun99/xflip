import { StyleSheet } from "react-native";
import { rounded, spacings } from "./spacing";
import { fontSizes, getFontFamily } from "./fonts";

export const appStyles = StyleSheet.create({
  // Padding Top
  ptxxs: {
    paddingTop: spacings.xxs,
  },
  ptxs: {
    paddingTop: spacings.xs,
  },
  ptsm: {
    paddingTop: spacings.sm,
  },
  ptmd: {
    paddingTop: spacings.md,
  },
  ptlg: {
    paddingTop: spacings.lg,
  },
  ptxl: {
    paddingTop: spacings.xl,
  },
  ptxxl: {
    paddingTop: spacings.xxl,
  },
  ptxxxl: {
    paddingTop: spacings.xxxl,
  },
  ptxxxxl: {
    paddingTop: spacings.xxxxxl,
  },

  // Padding Bottom
  pbxxs: {
    paddingBottom: spacings.xxs,
  },
  pbxs: {
    paddingBottom: spacings.xs,
  },
  pbsm: {
    paddingBottom: spacings.sm,
  },
  pbmd: {
    paddingBottom: spacings.md,
  },
  pblg: {
    paddingBottom: spacings.lg,
  },
  pbxl: {
    paddingBottom: spacings.xl,
  },
  pbxxl: {
    paddingBottom: spacings.xxl,
  },
  pbxxxl: {
    paddingBottom: spacings.xxxl,
  },
  pbxxxxl: {
    paddingBottom: spacings.xxxxxl,
  },

  // Padding Left
  plxxs: {
    paddingLeft: spacings.xxs,
  },
  plxs: {
    paddingLeft: spacings.xs,
  },
  plsm: {
    paddingLeft: spacings.sm,
  },
  plmd: {
    paddingLeft: spacings.md,
  },
  pllg: {
    paddingLeft: spacings.lg,
  },
  plxl: {
    paddingLeft: spacings.xl,
  },
  plxxl: {
    paddingLeft: spacings.xxl,
  },
  plxxxl: {
    paddingLeft: spacings.xxxl,
  },
  plxxxxl: {
    paddingLeft: spacings.xxxxxl,
  },

  // Padding Right
  prxxs: {
    paddingRight: spacings.xxs,
  },
  prxs: {
    paddingRight: spacings.xs,
  },
  prsm: {
    paddingRight: spacings.sm,
  },
  prmd: {
    paddingRight: spacings.md,
  },
  prlg: {
    paddingRight: spacings.lg,
  },
  prxl: {
    paddingRight: spacings.xl,
  },
  prxxl: {
    paddingRight: spacings.xxl,
  },
  prxxxl: {
    paddingRight: spacings.xxxl,
  },
  prxxxxl: {
    paddingRight: spacings.xxxxxl,
  },

  // Padding Horizontal (Left & Right)
  phxxs: {
    paddingHorizontal: spacings.xxs,
  },
  phxs: {
    paddingHorizontal: spacings.xs,
  },
  phsm: {
    paddingHorizontal: spacings.sm,
  },
  phmd: {
    paddingHorizontal: spacings.md,
  },
  phlg: {
    paddingHorizontal: spacings.lg,
  },
  phxl: {
    paddingHorizontal: spacings.xl,
  },
  phxxl: {
    paddingHorizontal: spacings.xxl,
  },
  phxxxl: {
    paddingHorizontal: spacings.xxxl,
  },
  phxxxxl: {
    paddingHorizontal: spacings.xxxxxl,
  },

  // Padding Vertical (Top & Bottom)
  pvxxs: {
    paddingVertical: spacings.xxs,
  },
  pvxs: {
    paddingVertical: spacings.xs,
  },
  pvsm: {
    paddingVertical: spacings.sm,
  },
  pvmd: {
    paddingVertical: spacings.md,
  },
  pvlg: {
    paddingVertical: spacings.lg,
  },
  pvxl: {
    paddingVertical: spacings.xl,
  },
  pvxxl: {
    paddingVertical: spacings.xxl,
  },
  pvxxxl: {
    paddingVertical: spacings.xxxl,
  },
  pvxxxxl: {
    paddingVertical: spacings.xxxxxl,
  },

  // Padding All Sides
  pxxs: {
    padding: spacings.xxs,
  },
  pxs: {
    padding: spacings.xs,
  },
  psm: {
    padding: spacings.sm,
  },
  pmd: {
    padding: spacings.md,
  },
  plg: {
    padding: spacings.lg,
  },
  pxl: {
    padding: spacings.xl,
  },
  pxxl: {
    padding: spacings.xxl,
  },
  pxxxl: {
    padding: spacings.xxxl,
  },
  pxxxxl: {
    padding: spacings.xxxxxl,
  },

  // Margin Top
  mtxxs: {
    marginTop: spacings.xxs,
  },
  mtxs: {
    marginTop: spacings.xs,
  },
  mtsm: {
    marginTop: spacings.sm,
  },
  mtmd: {
    marginTop: spacings.md,
  },
  mtlg: {
    marginTop: spacings.lg,
  },
  mtxl: {
    marginTop: spacings.xl,
  },
  mtxxl: {
    marginTop: spacings.xxl,
  },
  mtxxxl: {
    marginTop: spacings.xxxl,
  },
  mtxxxxl: {
    marginTop: spacings.xxxxxl,
  },

  // Margin Bottom
  mbxxs: {
    marginBottom: spacings.xxs,
  },
  mbxs: {
    marginBottom: spacings.xs,
  },
  mbsm: {
    marginBottom: spacings.sm,
  },
  mbmd: {
    marginBottom: spacings.md,
  },
  mblg: {
    marginBottom: spacings.lg,
  },
  mbxl: {
    marginBottom: spacings.xl,
  },
  mbxxl: {
    marginBottom: spacings.xxl,
  },
  mbxxxl: {
    marginBottom: spacings.xxxl,
  },
  mbxxxxl: {
    marginBottom: spacings.xxxxxl,
  },

  // Margin Left
  mlxxs: {
    marginLeft: spacings.xxs,
  },
  mlxs: {
    marginLeft: spacings.xs,
  },
  mlsm: {
    marginLeft: spacings.sm,
  },
  mlmd: {
    marginLeft: spacings.md,
  },
  mllg: {
    marginLeft: spacings.lg,
  },
  mlxl: {
    marginLeft: spacings.xl,
  },
  mlxxl: {
    marginLeft: spacings.xxl,
  },
  mlxxxl: {
    marginLeft: spacings.xxxl,
  },
  mlxxxxl: {
    marginLeft: spacings.xxxxxl,
  },

  // Margin Right
  mrxxs: {
    marginRight: spacings.xxs,
  },
  mrxs: {
    marginRight: spacings.xs,
  },
  mrsm: {
    marginRight: spacings.sm,
  },
  mrmd: {
    marginRight: spacings.md,
  },
  mrlg: {
    marginRight: spacings.lg,
  },
  mrxl: {
    marginRight: spacings.xl,
  },
  mrxxl: {
    marginRight: spacings.xxl,
  },
  mrxxxl: {
    marginRight: spacings.xxxl,
  },
  mrxxxxl: {
    marginRight: spacings.xxxxxl,
  },

  // Margin Horizontal (Left & Right)
  mhxxs: {
    marginHorizontal: spacings.xxs,
  },
  mhxs: {
    marginHorizontal: spacings.xs,
  },
  mhsm: {
    marginHorizontal: spacings.sm,
  },
  mhmd: {
    marginHorizontal: spacings.md,
  },
  mhlg: {
    marginHorizontal: spacings.lg,
  },
  mhxl: {
    marginHorizontal: spacings.xl,
  },
  mhxxl: {
    marginHorizontal: spacings.xxl,
  },
  mhxxxl: {
    marginHorizontal: spacings.xxxl,
  },
  mhxxxxl: {
    marginHorizontal: spacings.xxxxxl,
  },

  // Margin Vertical (Top & Bottom)
  mvxxs: {
    marginVertical: spacings.xxs,
  },
  mvxs: {
    marginVertical: spacings.xs,
  },
  mvsm: {
    marginVertical: spacings.sm,
  },
  mvmd: {
    marginVertical: spacings.md,
  },
  mvlg: {
    marginVertical: spacings.lg,
  },
  mvxl: {
    marginVertical: spacings.xl,
  },
  mvxxl: {
    marginVertical: spacings.xxl,
  },
  mvxxxl: {
    marginVertical: spacings.xxxl,
  },
  mvxxxxl: {
    marginVertical: spacings.xxxxxl,
  },

  // Margin All Sides
  mxxs: {
    margin: spacings.xxs,
  },
  mxs: {
    margin: spacings.xs,
  },
  msm: {
    margin: spacings.sm,
  },
  mmd: {
    margin: spacings.md,
  },
  mlg: {
    margin: spacings.lg,
  },
  mxl: {
    margin: spacings.xl,
  },
  mxxl: {
    margin: spacings.xxl,
  },
  mxxxl: {
    margin: spacings.xxxl,
  },
  mxxxxl: {
    margin: spacings.xxxxxl,
  },
  wfull: {
    width: "100%",
  },
  hfull: {
    height: "100%",
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 2,
  },
  flex4: {
    flex: 4,
  },
  flexRow: {
    flexDirection: "row",
  },
  flexColumn: {
    flexDirection: "column",
  },
  flexWrap: {
    flexWrap: "wrap",
  },
  flexCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  justifyStart: {
    justifyContent: "flex-start",
  },
  justifyEnd: {
    justifyContent: "flex-end",
  },
  justifyCenter: {
    justifyContent: "center",
  },
  justifyBetween: {
    justifyContent: "space-between",
  },
  alignCenter: {
    alignItems: "center",
  },
  textCenter: {
    textAlign: "center",
  },
  textRight: {
    textAlign: "right",
  },
  absolute: {
    position: "absolute",
  },
  relative: {
    position: "relative",
  },
  opacity0: {
    opacity: 0,
  },
  opacity10: {
    opacity: 0.1,
  },
  opacity20: {
    opacity: 0.2,
  },
  opacity30: {
    opacity: 0.3,
  },
  opacity40: {
    opacity: 0.4,
  },
  opacity50: {
    opacity: 0.5,
  },
  opacity60: {
    opacity: 0.6,
  },
  opacity70: {
    opacity: 0.7,
  },
  opacity80: {
    opacity: 0.8,
  },
  opacity90: {
    opacity: 0.9,
  },
  opacity100: {
    opacity: 1,
  },
  // Font Sizes
  textxxxs: {
    fontSize: fontSizes.xxxs, // 8
  },
  textxxs: {
    fontSize: fontSizes.xxs, // 10
  },
  textxs: {
    fontSize: fontSizes.xs, // 12
  },
  textsm: {
    fontSize: fontSizes.sm, // 14
  },
  textbase: {
    fontSize: fontSizes.base, // 16
  },
  textlg: {
    fontSize: fontSizes.lg, // 18
  },
  textxl: {
    fontSize: fontSizes.xl, // 20
  },
  textxxl: {
    fontSize: fontSizes.xxl, // 24
  },
  textxxxl: {
    fontSize: fontSizes.xxxl, // 32
  },
  // Line Heights with suggested ratios
  linexxxs: {
    lineHeight: fontSizes.xxxs * 1.4, // 8 * 1.4 = 11.2
  },
  linexxs: {
    lineHeight: fontSizes.xxs * 1.4, // 10 * 1.4 = 14
  },
  linexs: {
    lineHeight: fontSizes.xs * 1.4, // 12 * 1.4 = 16.8
  },
  linesm: {
    lineHeight: fontSizes.sm * 1.4, // 14 * 1.4 = 19.6
  },
  linebase: {
    lineHeight: fontSizes.base * 1.4, // 16 * 1.4 = 22.4
  },
  linelg: {
    lineHeight: fontSizes.lg * 1.4, // 18 * 1.4 = 25.2
  },
  linexl: {
    lineHeight: fontSizes.xl * 1.4, // 20 * 1.4 = 28
  },
  linexxl: {
    lineHeight: fontSizes.xxl * 1.2, // 24 * 1.2 = 28.8 (more compact for larger text)
  },
  linexxxl: {
    lineHeight: fontSizes.xxxl * 1.2, // 32 * 1.2 = 38.4 (for large headings)
  },

  // Border Radius (rounded)
  roundedNone: {
    borderRadius: rounded.none, // 0
  },
  roundedxxs: {
    borderRadius: rounded.xxs, // 4
  },
  roundedxs: {
    borderRadius: rounded.xs, // 8
  },
  roundedsm: {
    borderRadius: rounded.sm, // 12
  },
  roundedmd: {
    borderRadius: rounded.md, // 16
  },
  roundedlg: {
    borderRadius: rounded.lg, // 24
  },
  roundedxl: {
    borderRadius: rounded.xl, // 32
  },
  roundedFull: {
    overflow: "hidden",
    borderRadius: rounded.full, // 999 (full rounded)
  },
  overflowHidden: {
    overflow: "hidden",
  },
  overflowVisible: {
    overflow: "visible",
  },
  overflowScroll: {
    overflow: "scroll",
  },
  // Top Spacing
  topZero: {
    top: 0,
  },
  topXxs: {
    top: spacings.xxs,
  },
  topXs: {
    top: spacings.xs,
  },
  topSm: {
    top: spacings.sm,
  },
  topMd: {
    top: spacings.md,
  },
  topLg: {
    top: spacings.lg,
  },
  topXl: {
    top: spacings.xl,
  },
  topXxl: {
    top: spacings.xxl,
  },
  topXxxl: {
    top: spacings.xxxl,
  },
  topXxxxl: {
    top: spacings.xxxxxl,
  },

  // Bottom Spacing
  bottomZero: {
    bottom: 0,
  },
  bottomXxs: {
    bottom: spacings.xxs,
  },
  bottomXs: {
    bottom: spacings.xs,
  },
  bottomSm: {
    bottom: spacings.sm,
  },
  bottomMd: {
    bottom: spacings.md,
  },
  bottomLg: {
    bottom: spacings.lg,
  },
  bottomXl: {
    bottom: spacings.xl,
  },
  bottomXxl: {
    bottom: spacings.xxl,
  },
  bottomXxxl: {
    bottom: spacings.xxxl,
  },
  bottomXxxxl: {
    bottom: spacings.xxxxxl,
  },

  // Left Spacing
  leftZero: {
    left: 0,
  },
  leftXxs: {
    left: spacings.xxs,
  },
  leftXs: {
    left: spacings.xs,
  },
  leftSm: {
    left: spacings.sm,
  },
  leftMd: {
    left: spacings.md,
  },
  leftLg: {
    left: spacings.lg,
  },
  leftXl: {
    left: spacings.xl,
  },
  leftXxl: {
    left: spacings.xxl,
  },
  leftXxxl: {
    left: spacings.xxxl,
  },
  leftXxxxl: {
    left: spacings.xxxxxl,
  },

  // Right Spacing
  rightZero: {
    right: 0,
  },
  rightXxs: {
    right: spacings.xxs,
  },
  rightXs: {
    right: spacings.xs,
  },
  rightSm: {
    right: spacings.sm,
  },
  rightMd: {
    right: spacings.md,
  },
  rightLg: {
    right: spacings.lg,
  },
  rightXl: {
    right: spacings.xl,
  },
  rightXxl: {
    right: spacings.xxl,
  },
  rightXxxl: {
    right: spacings.xxxl,
  },
  rightXxxxl: {
    right: spacings.xxxxxl,
  },
  absoluteZero: {
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  // Gap
  gxxs: { gap: spacings.xxs },
  gxs: { gap: spacings.xs },
  gsm: { gap: spacings.sm },
  gmd: { gap: spacings.md },
  glg: { gap: spacings.lg },
  gxl: { gap: spacings.xl },
  gxxl: { gap: spacings.xxl },
  gxxx: { gap: spacings.xxxl },
  gxxxxl: { gap: spacings.xxxxxl },
  // Font Weight
  fontWeightThin: {
    fontWeight: "100",
  },
  fontWeightExtraLight: {
    fontWeight: "200",
  },
  fontWeightLight: {
    fontWeight: "300",
  },
  fontWeightRegular: {
    fontWeight: "400",
  },
  fontWeightMedium: {
    fontWeight: "500",
  },
  fontWeightSemiBold: {
    fontWeight: "600",
  },
  fontWeightBold: {
    fontWeight: "700",
  },
  fontWeightExtraBold: {
    fontWeight: "800",
  },
  fontWeightBlack: {
    fontWeight: "900",
  },
});
