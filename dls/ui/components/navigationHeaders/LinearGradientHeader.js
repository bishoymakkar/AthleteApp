import React from "react";
import PropTypes from "prop-types";
import LinearGradient from "react-native-linear-gradient";

import {
  PrimaryGradientColor,
  STATUS_BAR_HEIGHT
} from "../../../config/appConfig";
/**
 * Linear Gradient header component
 *
 * @param children
 * @param gradientColors
 */
const LinearGradientHeader = ({
  children,
  gradientColors,
  height,
  extendedStyle
}) => (
  <LinearGradient
    colors={gradientColors || PrimaryGradientColor}
    start={{x: 0.0, y: 0.5}}
    end={{x: 1.0, y: 0.5}}
    locations={[0.0, 1.0]}
    style={[
      {
        paddingTop: STATUS_BAR_HEIGHT,
        height: typeof height === "number" ? height + STATUS_BAR_HEIGHT : "auto"
      },
      extendedStyle
    ]}
  >
    {children}
  </LinearGradient>
);

LinearGradientHeader.propTypes = {
  children: PropTypes.node,
  gradientColors: PropTypes.array,
  height: PropTypes.number,
  extendedStyle: PropTypes.object
};

export default LinearGradientHeader;
