import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import {isArabic} from "../../../config/appConfig";
/**
 * Icon Component
 *
 * @param source
 * @param style
 * @param resizeMode
 * @param enbaleArabicScaleX
 */
const IconComponent = ({source, style, resizeMode, enbaleArabicScaleX}) => (
  <Container
    source={source}
    extendedStyle={style}
    enbaleArabicScaleX={enbaleArabicScaleX}
    resizeMode={resizeMode || "cover"}
  />
);

IconComponent.propTypes = {
  style: PropTypes.object,
  resizeMode: PropTypes.string,
  enbaleArabicScaleX: PropTypes.bool,
  source: PropTypes.number.isRequired
};

const Container = styled.Image`
  transform: scaleX(
    ${props => (isArabic && props.enbaleArabicScaleX ? -1 : 1)}
  );
  ${props => props.extendedStyle};
`;

export default IconComponent;
