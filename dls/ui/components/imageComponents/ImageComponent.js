import React, {PureComponent} from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

import redBlouse from "../../icons/redBlouse/redBlouse.png"

/**
 * Image Component
 *
 * @param uri
 * @param style
 * @param resizeMode
 */
// COMPONENT IS UNDER CONSTRUCTION
export default class ImageComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      uri: this.props.uri,
      hasError: false,
    };
  }

  handleOnError = () => {
    this.setState({
      uri: redBlouse,
      hasError: true
    })
  };
  render() {
    const {style, resizeMode} = this.props;
    const {uri, hasError} = this.state;
    return (
      <Image
        resizeMode={resizeMode || "cover"}
        source={hasError ? uri : {uri}}
        extendedStyle={style}
        onError={this.handleOnError}
      // onLoad={}
      // onLoadEnd={}
      />
    );
  }
}

ImageComponent.propTypes = {
  uri: PropTypes.string.isRequired,
  style: PropTypes.object
};

const Image = styled.Image`
  ${props => props.extendedStyle};
`;
