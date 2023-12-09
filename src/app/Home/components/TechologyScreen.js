import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styled from 'styled-components/native';
import SplashScreen from 'react-native-splash-screen';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../../../../dls/ui/styleguide/colors';
import {moderateScale} from '../../../../dls/helper/scaleHelper';
import {SuccessModal} from '../../../../dls/ui/components/modals';
import {MainHeader} from '../../../../dls/ui/components/navigationHeaders';

class TechologyScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      modalText: '',
    };
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  onPress = (technology) => {
    this.setState({
      modalText: `You have been selected ${technology} successfully`,
      modalVisible: true,
    })
  }

  onPressModal = ()=>{
    const {navigation} = this.props;

    this.setState({modalVisible:false});
    navigation.goBack();
  }

  renderBtn = (label, gradientColors, textColor, onPress) => {
    return (
    <LinearGradient
    colors={gradientColors}
    start={{x: 0, y: 1}} end={{x: 1, y: 0}}
    style={{
      height: 40, width: 150,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: 'transparent',
      alignItems: 'center', 
      justifyContent: 'center',
      margin: 14,
    }}
  >
    <Button
      onPress={onPress}
    >
      <Text
        color={textColor}>
        {label}
      </Text>
    </Button>
  </LinearGradient>);
}

  render() {
    const {modalText, modalVisible} = this.state;

    return (
        <Container>
          <SuccessModal
          visibility={modalVisible}
          modalTitle={modalText}
          buttonText="ok"
          onPress={this.onPressModal}
          onPressBack={this.onPressModal}
          />
          <MainHeader
           headerTitle="Select Technology"
            headerHeight={moderateScale(65)}
          />
          <MiddleCardContainer>
          <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
        {this.renderBtn(
        'React',
        [colors.dustyOrange, colors.violet]
        ,colors.white,
        ()=>this.onPress('React'))}
        {this.renderBtn(
          'React Native',
          [colors.violet, colors.red],
          colors.white,
          ()=>this.onPress('React Native'))}
        </View>
          </MiddleCardContainer>
        </Container >
    );
  }
}

TechologyScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
  padding: ${moderateScale(14)}px;
`;

const MiddleCardContainer = styled.ScrollView`
background-color: ${colors.white};
`;

const View = styled.View`
`;

const Button = styled.TouchableOpacity`
align-items: center;
padding: ${moderateScale(14)}px;
`;


const Text = styled.Text`
  font-size: 18px;
  color: ${props => props.color?props.color:'white'};
`;

export default TechologyScreen;
