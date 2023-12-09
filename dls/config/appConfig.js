import DeviceInfo from 'react-native-device-info';
import {Platform, StatusBar, I18nManager} from 'react-native';

import colors from '../ui/styleguide/colors';
import styles from '../ui/styleguide/styles';
import strings from '../localization/localize';
import {moderateScale} from '../helper/scaleHelper';

export const isIos = Platform.OS === 'ios';

export const MapApiKey = '';

export const isArabic = strings.getLanguage() === 'ar' || I18nManager.isRTL;

export const CategoryTabBarOptions = {
  upperCaseLabel: false,
  activeTintColor: colors.white,
  inactiveTintColor: colors.white,
  style: styles.categoryTabBarOptions,
  tabStyle: styles.tab,
  labelStyle: styles.tabBarLabel,
  indicatorStyle: styles.tabBarIndicator,
};

export const LoyaltyTabBarOptions = tierColor => ({
  upperCaseLabel: false,
  activeTintColor: colors.white,
  inactiveTintColor: colors.white,
  style: {
    backgroundColor: tierColor,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
    padding: 0,
    margin: 0,
  },
  tabStyle: styles.tab,
  labelStyle: styles.tabBarLabel,
  indicatorStyle: styles.tabBarIndicator,
});

export const hitSlop = {
  top: moderateScale(14),
  left: moderateScale(14),
  right: moderateScale(14),
  bottom: moderateScale(14),
};

export const BlueTierColors = isArabic
  ? [colors.brightLightBlue, colors.waterBlue]
  : [colors.waterBlue, colors.brightLightBlue];

export const SilverTierColors = isArabic
  ? [colors.lightBlueGrey, colors.slateGrey]
  : [colors.slateGrey, colors.lightBlueGrey];

export const GoldTierColors = isArabic
  ? [colors.maize, colors.dullOrange]
  : [colors.dullOrange, colors.maize];

export const PrimaryGradientColor = isArabic
  ? [colors.violet, colors.dullOrange]
  : [colors.dullOrange, colors.violet];

export const guidelineBaseHeight = 568;

const X_STATUS_BAR = Platform.OS === 'ios' && DeviceInfo.hasNotch() ? 45 : 20;
export const STATUS_BAR_HEIGHT =
  Platform.OS === 'ios' ? X_STATUS_BAR : StatusBar.currentHeight;

export const TierTypes = ['blue', 'silver', 'gold'];

export const SpacingBottom =
  Platform.OS === 'ios' && DeviceInfo.hasNotch() ? 0 : moderateScale(14);
