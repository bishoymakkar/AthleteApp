import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";

import {moderateScale} from "./../../../helper/scaleHelper";

/**
 * Circular button component.
 *
 * @param onPress
 * @param children
 * @param backgroundColor
 * @param borderColor
 * @param isDisabled
 */
const CircularButton = ({
  backgroundColor,
  borderColor,
  children,
  onPress,
  isDisabled
}) => (
  <Circle
    activeOpacity={0.7}
    disabled={isDisabled}
    onPress={onPress}
    backgroundColor={backgroundColor}
    borderColor={borderColor}
  >
    {children}
  </Circle>
);

CircularButton.propTypes = {
  children: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
  backgroundColor: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired
};

const Circle = styled.TouchableOpacity`
  position: absolute;
  padding-right : ${moderateScale(50)}
  padding-top : ${moderateScale(50)}
  background-color: ${props => props.backgroundColor};
  border-color: ${props => props.borderColor};
  border-width: ${moderateScale(1)};
  width: ${moderateScale(20)};
  height: ${moderateScale(20)};
  border-radius: ${moderateScale(22)};
  align-items: center;
  align-self: flex-end;
  justify-content: center;
`;

export default CircularButton;
