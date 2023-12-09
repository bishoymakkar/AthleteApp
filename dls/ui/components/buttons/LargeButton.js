import React from "react";
import PropTypes from "prop-types";

import Button from "./Button";
import { moderateScale } from "../../../helper/scaleHelper";
import { isArabic } from "../../../config/appConfig";
/**
 * Large Button component.
 *
 * @param onPress
 * @param children
 * @param isDisabled
 * @param backgroundColor
 * @param textColor
 * @param hasBorder
 * @param borderColor
 * @param fontStyle
 * @param lowerCase
 * @param extendedStyle
 * @param leftItemComponent
 * @param leftItemComponentStyle
 * @param rightItemComponent
 * @param rightItemComponentStyle
 */
const LargeButton = ({
  children,
  onPress,
  height,
  isDisabled,
  backgroundColor,
  textColor,
  hasBorder,
  borderColor,
  fontStyle,
  lowerCase,
  extendedStyle,
  leftItemComponent,
  leftItemComponentStyle,
  rightItemComponent,
  rightItemComponentStyle
}) => (
  <Button
    onPress={onPress}
    isDisabled={isDisabled}
    textColor={textColor}
    backgroundColor={backgroundColor || "transparent"}
    fontStyle={fontStyle}
    height={height?height:moderateScale(47)}
    hasBorder={hasBorder}
    borderColor={borderColor}
    extendedStyle={extendedStyle}
    leftItemComponent={leftItemComponent}
    leftItemComponentStyle={leftItemComponentStyle}
    rightItemComponent={rightItemComponent}
    rightItemComponentStyle={rightItemComponentStyle}
  >
    {lowerCase || isArabic ? children : children.toUpperCase()}
  </Button>
);

LargeButton.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  hasBorder: PropTypes.bool,
  borderColor: PropTypes.string,
  fontStyle: PropTypes.object.isRequired,
  lowerCase: PropTypes.bool,
  extendedStyle: PropTypes.object,
  rightItemComponent: PropTypes.object,
  leftItemComponentStyle: PropTypes.object,
  leftItemComponent: PropTypes.object,
  rightItemComponentStyle: PropTypes.object
};

export default LargeButton;
