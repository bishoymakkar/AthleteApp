import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Octicons';

import colors from '../../styleguide/colors';
import { moderateScale } from '../../../helper/scaleHelper';

/**
 * Drawer Toggle button component
 * @param onPress
 * @param extendedStyle
 */
const DrawerToggleButton = ({onPress, extendedStyle}) => (
  <Container
    onPress={onPress}
    extendedStyle={extendedStyle}
    activeOpacity={0.7}
  >
    <Icon name="three-bars" size={moderateScale(30)} color={colors.dustyOrange}/>
  </Container>
);

DrawerToggleButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  extendedStyle: PropTypes.object,
};

const Container = styled.TouchableOpacity`
  ${props => props.extendedStyle}
`;


export default DrawerToggleButton;
