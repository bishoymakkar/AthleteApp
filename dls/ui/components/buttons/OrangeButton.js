import React from "react";
import PropTypes from "prop-types";

import {LargeButton} from "./index";
import colors from "../../styleguide/colors";
/**
 * Orange button component.
 *
 * @param onPress
 * @param children
 * @param isDisabled
 * @param lowerCase
 * @param rightItemComponent
 * @param rightItemComponentStyle
 * @param leftItemComponent
 * @param leftItemComponentStyle
 * @param extendedStyle
 */
const OrangeButton = ({
  children,
  onPress,
  isDisabled,
  backgroundColor,
  lowerCase,
  fontStyle,
  height,
  fontColor,
  rightItemComponent,
  rightItemComponentStyle,
  leftItemComponent,
  leftItemComponentStyle,
  extendedStyle
}) => (
  <LargeButton
    height={height}
    onPress={onPress}
    isDisabled={isDisabled}
    textColor={fontColor || colors.white}
    backgroundColor={backgroundColor || colors.lightOrange}
    fontStyle={fontStyle}
    lowerCase={lowerCase}
    rightItemComponent={rightItemComponent}
    rightItemComponentStyle={rightItemComponentStyle}
    leftItemComponent={leftItemComponent}
    leftItemComponentStyle={leftItemComponentStyle}
    extendedStyle={extendedStyle}
  >
    {children}
  </LargeButton>
);

OrangeButton.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  lowerCase: PropTypes.bool,
  rightItemComponent: PropTypes.object,
  rightItemComponentStyle: PropTypes.object,
  leftItemComponent: PropTypes.object,
  leftItemComponentStyle: PropTypes.object,
  extendedStyle: PropTypes.object
};

export default OrangeButton;
