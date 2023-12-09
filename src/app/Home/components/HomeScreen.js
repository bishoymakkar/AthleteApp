import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {BackHandler} from 'react-native';
import styled from 'styled-components/native';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/Ionicons';

import FormScreen from './FormScreen';
import colors from '../../../../dls/ui/styleguide/colors';
import {moderateScale} from '../../../../dls/helper/scaleHelper';
import {MainHeader} from '../../../../dls/ui/components/navigationHeaders';

class HomeScreen extends Component {

  componentDidMount() {
    SplashScreen.hide();
  }

  handleHardwareBackButton = () => {
    BackHandler.exitApp();
  };

  render() {
    const {navigation} = this.props;

    return (
        <Container>
          <MainHeader
            onPressDrawer={()=>{navigation.openDrawer()}}
            headerHeight={moderateScale(65)}
            rightComponent={
              <View style={{paddingHorizontal:moderateScale(14)}}>
                <Icon
                name="chatbubble-ellipses-outline"
                style={{alignSelf: 'center'}}
                size={moderateScale(30)}
                color={colors.violet}
                />
              </View>
            }
          />
          <MiddleCardContainer>
            <FormScreen navigation={navigation}/>
          </MiddleCardContainer>
        </Container >
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;

const MiddleCardContainer = styled.ScrollView`
background-color: ${colors.white};
border-radius: ${moderateScale(27)};
`;

const View = styled.View`
`;

export default HomeScreen;
