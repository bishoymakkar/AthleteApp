import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Modal from "react-native-modal";
/**
 * Modal component
 *
 * @param visibility
 * @param onBackButtonPress
 * @param onBackdropPress
 * @param modalStyle
 * @param animationIn
 * @param animationOut
 * @param content
 */
export default class ModalComponent extends PureComponent {
  render() {
    const {
      visibility,
      avoidKeyboard,
      onBackButtonPress,
      onBackdropPress,
      modalStyle,
      animationIn,
      animationOut,
      content,
    } = this.props;
    return (
      <Modal
        avoidKeyboard={avoidKeyboard}
        isVisible={visibility}
        onBackButtonPress={onBackButtonPress}
        onBackdropPress={onBackdropPress}
        backdropTransitionInTiming={100}
        style={[modalStyle, { margin: 0 }]}
        animationIn={animationIn || "slideInUp"}
        animationOut={animationOut || "slideOutDown"}
        useNativeDriver
        hideModalContentWhileAnimating
      >
        {content}
      </Modal>
    );
  }
}

ModalComponent.propTypes = {
  visibility: PropTypes.bool,
  avoidKeyboard: PropTypes.bool,
  onBackButtonPress: PropTypes.func,
  onBackdropPress: PropTypes.func,
  modalStyle: PropTypes.object,
  animationIn: PropTypes.string,
  animationOut: PropTypes.string,
  content: PropTypes.element.isRequired
};
