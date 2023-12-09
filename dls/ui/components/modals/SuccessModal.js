import React, { PureComponent } from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

import ModalComponent from "./Modal";
import { OrangeButton } from "../buttons";
import fonts from "../../styleguide/fonts";
import colors from "../../styleguide/colors";
import fontsAr from "../../styleguide/fontsArabic";
import { isArabic } from "../../../config/appConfig";
import { moderateScale } from "../../../helper/scaleHelper";
import IconComponent from "../imageComponents/IconComponent";
import checkIcon from "../../icons/checkGreen77/check-1.png";

/**
 * Success Modal
 *
 * @param extendedStyle
 * @param visibility
 * @param modalTitle
 * @param modalText
 * @param buttonText
 * @param icon
 */
export default class SuccessModal extends PureComponent {
  render() {
    const { 
      onPress,
      modalTitle,
      buttonText,
      visibility,
      onPressBack,
      extendedStyle,
      modalText 
    } = this.props;

    return (
      <ModalComponent
        visibility={visibility}
        onBackButtonPress={onPressBack}
        modalStyle={{ justifyContent: "center" }}
        onBackdropPress={onPressBack}
        content={
          <Container extendedStyle={extendedStyle}>
            <IconComponent
              source={checkIcon}
              style={{ alignSelf: "center" }}
            />
            <ModalText
              fontStyle={isArabic ? fontsAr.medium2B : fonts.medium2B}
              color={colors.darkBlueGrey}
              extendedStyle={{ paddingTop: moderateScale(24) }}
            >
              {modalTitle}
            </ModalText>
            <ModalText
              fontStyle={isArabic ? fontsAr.regularR : fonts.regularR}
              color={colors.brownGrey}
            >
              {modalText}
            </ModalText>
            {onPress?
            <OrangeButton
              backgroundColor={colors.violet}
              fontStyle={isArabic ? fontsAr.regularB : fonts.regularB}
              onPress={onPress}
              extendedStyle={{ marginTop: moderateScale(14) }}
            >
              {buttonText}
            </OrangeButton>
            :null}
          </Container>
        }
      />
    );
  }
}

SuccessModal.propTypes = {
  extendedStyle: PropTypes.object,
  buttonText: PropTypes.string,
  visibility: PropTypes.bool,
  onPressBack: PropTypes.func,
  onPress: PropTypes.func,
  modalTitle: PropTypes.string.isRequired,
  modalText: PropTypes.string,
};

const Container = styled.View`
  background-color: ${colors.white};
  margin-right: ${moderateScale(24)};
  margin-left: ${moderateScale(24)};
  padding: ${moderateScale(24)}px;
  border-radius: 4;
  ${props => props.extendedStyle};
`;

const ModalText = styled.Text`
  ${props => props.fontStyle};
  font-size: ${props => moderateScale(props.fontStyle.fontSize)};
  color: ${props => props.color};
  text-align: center;
  ${props => props.extendedStyle};
`;
