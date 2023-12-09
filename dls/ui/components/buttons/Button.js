import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";

import { moderateScale } from "./../../../helper/scaleHelper";
/**
 * Button component.
 *
 * @param onPress
 * @param children
 * @param backgroundColor
 * @param textColor
 * @param fontStyle
 * @param isDisabled
 * @param hasBorder
 * @param borderColor
 * @param extendedStyle
 * @param leftItemComponent
 * @param leftItemComponentStyle
 * @param rightItemComponent
 * @param rightItemComponentStyle
 * @param childrenStyle
 */
const Button = ({
  backgroundColor,
  textColor,
  fontStyle,
  children,
  onPress,
  isDisabled,
  hasBorder,
  borderColor,
  height,
  extendedStyle,
  leftItemComponent,
  leftItemComponentStyle,
  rightItemComponent,
  rightItemComponentStyle,
  childrenStyle
}) => (
  <Rectangle6
    activeOpacity={0.7}
    bgColor={backgroundColor}
    hasBorder={hasBorder}
    borderColor={borderColor}
    height={height}
    disabled={isDisabled}
    onPress={onPress}
    extendedStyle={extendedStyle}
  >
    {(
      <View leftItemComponentStyle={leftItemComponentStyle}>
        {leftItemComponent}
      </View>
    ) || <View leftItemComponentStyle={leftItemComponentStyle} />}
    <ButtonText
      fontStyle={fontStyle}
      fgColor={textColor}
      childrenStyle={childrenStyle}
    >
      {children}
    </ButtonText>
    {(
      <View rightItemComponentStyle={rightItemComponentStyle}>
        {rightItemComponent}
      </View>
    ) || <View rightItemComponentStyle={rightItemComponentStyle} />}
  </Rectangle6>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
  backgroundColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  fontStyle: PropTypes.object.isRequired,
  hasBorder: PropTypes.bool,
  borderColor: PropTypes.string,
  height: PropTypes.number.isRequired,
  extendedStyle: PropTypes.object,
  rightItemComponent: PropTypes.object,
  leftItemComponentStyle: PropTypes.object,
  leftItemComponent: PropTypes.object,
  rightItemComponentStyle: PropTypes.object,
  childrenStyle: PropTypes.object
};

const Rectangle6 = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  height: ${props => moderateScale(props.height)};
  border-radius: 4;
  justify-content: center;
  background-color: ${props => props.bgColor};
  border: ${props => (props.hasBorder ? "1px" : "0px")} solid
    ${props => (props.hasBorder ? props.borderColor : "transparent")};
  ${props => props.extendedStyle}
`;

const ButtonText = styled.Text`
  color: ${props => props.fgColor};
  font-family: ${props => props.fontStyle.fontFamily};
  font-size: ${props => moderateScale(props.fontStyle.fontSize)};
  font-style: ${props => props.fontStyle.fontStyle};
  font-weight: ${props => props.fontStyle.fontWeight};
  letter-spacing: ${props => props.fontStyle.letterSpacing};
  padding-top: ${props =>
    props.fontStyle.paddingTop ? props.fontStyle.paddingTop : 0};
  text-align: center;
  ${props => props.childrenStyle}
`;

const View = styled.View`
  ${props => props.leftItemComponentStyle};
  ${props => props.rightItemComponentStyle};
`;

export default Button;
