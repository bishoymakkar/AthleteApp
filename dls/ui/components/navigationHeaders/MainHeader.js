import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import {SafeAreaView, StatusBar, View} from 'react-native';

import fonts from '../../styleguide/fonts';
import colors from '../../styleguide/colors';
import {isArabic} from '../../../config/appConfig';
import fontsAr from '../../styleguide/fontsArabic';
import LinearGradientHeader from './LinearGradientHeader';
import {moderateScale} from '../../../helper/scaleHelper';
import DrawerToggleButton from './DrawerToggleButton';

/**
 * Order Tracking Header
 *
 * @param headerTitle
 * @param onPressDrawer
 * @param rightComponent
 * @param extendedStyle
 * @param titleFontStyle
 * 
 */

const MainHeader = ({
  headerTitle,
  headerHeight,
  extendedStyle,
  onPressDrawer,
  LeftComponent,
  titleFontStyle,
  rightComponent,
}) => (
  <LinearGradientHeader
    gradientColors={[colors.white, colors.white]}
    height={headerHeight || moderateScale(60)}
    extendedStyle={{
      paddingLeft: moderateScale(20),
      ...extendedStyle,
    }}>
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <SafeAreaView />
      {headerTitle ? (
        <View style={{
          flexDirection: "row",
        }}>
          {LeftComponent || null}
        <BackTitle
            extendedStyle={{
              flex:1,
              alignSelf: 'center',
              paddingLeft: moderateScale(14)
            }}
            fontStyle={titleFontStyle ||
              isArabic ? fontsAr.medium2B : fonts.medium2B}>
            {headerTitle}
          </BackTitle>
          </View>
          ):null}
          <View
          style={{
            paddingHorizontal:moderateScale(14),
            flexDirection: 'row',
            left: 150,
          }}>
      {rightComponent || null}
      {onPressDrawer?<DrawerToggleButton onPress={onPressDrawer}/>:null}
    </View>
    </View>
  </LinearGradientHeader>
);

MainHeader.propTypes = {
  headerTitle: PropTypes.string,
  onPressDrawer: PropTypes.func,
  titleFontStyle: PropTypes.object,
  headerHeight: PropTypes.number,
  extendedStyle: PropTypes.object,
  LeftComponent: PropTypes.object,
  rightComponent: PropTypes.object,
};

const BackTitle = styled.Text`
  font-family: ${props => props.fontStyle.fontFamily};
  font-style: ${props => props.fontStyle.fontStyle};
  font-size: ${props => moderateScale(props.fontStyle.fontSize)};
  letter-spacing: ${props => props.fontStyle.letterSpacing};
  font-weight: ${props => props.fontStyle.fontWeight};
  color: ${colors.violet};
  padding-top: ${props =>
    props.fontStyle.paddingTop ? props.fontStyle.paddingTop : 0};
  ${props => props.extendedStyle};
`;

export default MainHeader;
