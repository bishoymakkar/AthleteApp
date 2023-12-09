import { StyleSheet, I18nManager } from "react-native";

import colors from "./colors";
import { moderateScale } from "../../helper/scaleHelper";
import fonts from "./fonts";
import fontsAr from "./fontsArabic";

const styles = StyleSheet.create({
  categoryTabBarOptions: {
    backgroundColor: colors.waterBlue,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
    padding: 0,
    margin: 0
  },
  tab: {
    paddingBottom: moderateScale(7)
  },
  tabBarLabel: {
    fontSize: moderateScale(fonts.regularB.fontSize),
    fontFamily: I18nManager.isRTL
      ? fontsAr.regularB.fontFamily
      : fonts.regularB.fontFamily,
    fontWeight: fonts.regularB.fontWeight,
    padding: 0,
    paddingTop: I18nManager.isRTL ? fontsAr.regularB.paddingTop : 0,
    textAlign: "center",
    margin: 0
  },
  tabBarIndicator: {
    borderBottomColor: colors.white,
    borderBottomWidth: 3
  }
});

export default styles;
