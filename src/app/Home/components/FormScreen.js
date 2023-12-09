/* eslint-disable camelcase */
import React, {Component} from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../../../../dls/ui/styleguide/colors';
import egyFlag from '../../../../dls/ui/icons/egyFlag/egyFlag.png';
import { moderateScale } from '../../../../dls/helper/scaleHelper';
import Dropdown from '../../../../dls/ui/components/actions/DropDown';
import { PrimaryGradientColor } from '../../../../dls/config/appConfig';
import { MainHeader } from '../../../../dls/ui/components/navigationHeaders';
import IconComponent from '../../../../dls/ui/components/imageComponents/IconComponent';


const { width, height } = Dimensions.get("screen");
/**
 * FormScreen component.
 *
 * @param total
 * @param username
 *
 */

export default class FormScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Countries : [
            { label: 'Egypt', value: '1' },
        ],
        Nationalities : [
            { label: 'Egyptian', value: '1' },
        ],
        Genders : [
            { label: 'Male', value: '1' },
            { label: 'Female', value: '1' },
        ],
        firstName: '',
        lastName: '',
        username: '',
        nationalId: '',
        email: '',
        mobileNumber: '',
        birthdate: '',
        }
        
    }

    onChangeFirstName = (value) =>{
        this.setState({firstName: value});
    };

    onChangeLastName = (value) =>{
        this.setState({lastName: value});
    };

    onChangeUserName = (value) =>{
        this.setState({username: value});
    };

    onChangeEmail = (value) =>{
        this.setState({email: value});
    };

    onChangeNationalId = (value) =>{
        this.setState({nationalId: value});
    };

    onChangeMobileNumber = (value) =>{
        this.setState({mobileNumber: value});
    };

    onChangeBirthdate = (value) =>{
      this.setState({birthdate: value});
  };

    onPressNext = () => {
      const {navigation} = this.props;
      navigation.navigate('TechologySelection');
    }

    renderDropDown = (data, label) => {
        return (
            <Dropdown 
            data={data}
            placeholder={label}
            />
        );
    }

    renderInput = (
      value,
      label,
      onChange, 
      leftIcon = null, 
      rightIcon = null
      ) => {
        return (
            <LinearGradient
            colors={value?PrimaryGradientColor:[colors.greyish,colors.greyish]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.linearGradient}
          >
            <View style={styles.innerContainer}>
            <View style={{flexDirection: 'row'}}>
            {leftIcon?
            <View>
            <IconComponent
            source={leftIcon}
            style={{
              width: moderateScale(15),
              height: moderateScale(15),
              marginTop: moderateScale(12),
              marginLeft: moderateScale(14)
            }}/>
            </View>
          :null}
            <View style={{flex:1}}>
            <Input
            value={value}
            style={styles.input}
            placeholder={label}
            onChangeText={onChange}
            />
            </View>
            {rightIcon?
            <View style={{margin:8}}>
              <Icon name={rightIcon} size={25} color={colors.greyish} />
            </View>
          :null}
            </View>
            </View>
            </LinearGradient>
        );
    }

    renderCircle = () => {
        return (
            <LinearGradient
            colors={PrimaryGradientColor}
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={styles.linearGradientCircle}
           >
                    <View style={styles.innerCircle}/>
                    <View style={styles.iconCircle}>
                    <Icon name="gitlab" size={25} color={colors.red} />
                    </View>
                    <View>
                    <Text
                  style={styles.textStyle}>
                        Athlete Profile
                    </Text>
                    </View>
           </LinearGradient>
        )
    }

    renderBtn = (label, gradientColors, textColor, onPress) => {
        return (
        <LinearGradient
        colors={gradientColors}
        start={{x: 0, y: 0}} end={{x: 0, y: 0}}
        style={{
          height: 40, width: 100,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: 'transparent',
          alignItems: 'center', 
          justifyContent: 'center',
          margin: 14,
        }}
      >
        <Button
          width={moderateScale(100)}
          height={moderateScale(40)}
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
    const {
        email,
        Genders,
        username,
        lastName,
        Countries,
        firstName, 
        birthdate,
        nationalId,
        mobileNumber,
        Nationalities,
    } = this.state;
    return (
    <Container>
        <View style={{flex:1,padding:14}}>
        <MainHeader
        headerHeight={35}
        LeftComponent={
            <Icon name="user" size={25} color={colors.violet} />
        }
        headerTitle="Personal Information"
        />
        </View>
        <View style={{flexDirection: 'row'}}>
        <View style={{flex:1,padding:14}}>
        {this.renderInput(firstName, 'First Name', this.onChangeFirstName)}
        <Spacer/>
        {this.renderInput(lastName, 'Last Name', this.onChangeLastName)}
        <Spacer/>
        {this.renderInput(username, 'User Name', this.onChangeUserName)}
        <Spacer/>
        {this.renderDropDown(Countries, "Country")}
        <Spacer/>
        {this.renderDropDown(Countries, "Country Of Birth")}
        <Spacer/>
        {this.renderDropDown(Nationalities, "Nationality")}
        <Spacer/>
        {this.renderDropDown(Genders, "Gender")}
        <Spacer/>
        {this.renderInput(nationalId, 'National ID', this.onChangeNationalId)}
        <Spacer/>
        {this.renderInput(mobileNumber,
        '+20 | Work Mobile Number', 
        this.onChangeMobileNumber,
        egyFlag)}
        <Spacer/>
        {this.renderInput(email, 'Email', this.onChangeEmail)}
        <Spacer/>
        {this.renderInput(birthdate,
        'Date Of Birth', 
        this.onChangeBirthdate,
        null,'calendar')}
        </View>
        {this.renderCircle()}
        </View>
        <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
        {this.renderBtn(
        'Save',
        [colors.dustyOrange, colors.violet]
        ,colors.white,
        this.onPressNext)}
        {this.renderBtn(
          'Next',
          [colors.white, colors.white],
          colors.violet,
          this.onPressNext)}
        </View>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: 75,
      borderRadius: 12,
      backgroundColor: "blue",
    },
    linearGradient: {
        width: width*0.7,
        height: 50,
        borderRadius: 50, // <-- Outer Border Radius
      },
      innerContainer: {
        flex: 1,
        marginBottom: 3, // <-- Border Width
        borderRadius: 50, // <-- Inner Border Radius
        backgroundColor: '#fff',
        justifyContent: 'center',
      },
      input: {
        marginHorizontal:12,
      },
      linearGradientCircle: {
        flex:1,
        width: 150,
        height: height*0.6,
        borderRadius: 50, // <-- Outer Border Radius
        left: 150
      },
      innerCircle: {
        flex: 1,
      },
      textStyle: {
        transform: [{ rotate: '-90deg'}],
        right: 75,
        bottom: 160,
    },
    iconCircle: {
        left: 15,
        bottom: 10,
    }
  });

FormScreen.propTypes = {
  navigation: PropTypes.object,
};

const Container = styled.ScrollView`
  ${props => props.extendedStyle};
`;

const Input = styled.TextInput`
  padding-top: ${moderateScale(5)}px;
  padding-bottom: ${moderateScale(5)}px;
  padding-right: ${moderateScale(8)}px;
  padding-left: ${moderateScale(8)}px;
  color: ${colors.violet};
  font-size: 16;
`;

const Text = styled.Text`
  font-size: 18px;
  color: ${props => props.color?props.color:'white'};
`;


const Spacer = styled.View`
  padding-top: 8px;
`;

const Button = styled.TouchableOpacity`
width: ${props => props.width};
height: ${props => props.height};

align-items: center;
align-self: center;
justify-content: center;
`;

const View = styled.View`
`;
