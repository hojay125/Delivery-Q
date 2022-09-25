import React from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {Colors, Fonts, FONT_FAMILY, RH, RW, RF, RR} from '../helpers/constants';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import PropTypes from 'prop-types';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {Container} from '../components/bi-react-library/src';

export const Scroll = (props) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: '10%', flexGrow: 1}}
      style={{height: '80%', marginBottom: '5%'}}
      {...props}>
      <Container marginBottom={props.marginBottom}>{props.children}</Container>
    </ScrollView>
  );
};

Scroll.propTypes = {
  marginBottom: PropTypes.number,
};

export const Button = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        height: RH(props.height) || RH(9.5),
        width: RW(props.width) || 250,
        backgroundColor: props.backgroundColor || Colors.primary,
        borderWidth: props.borderWidth || null,
        borderColor: props.borderColor || null,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: props.borderRadius || 30,
        padding: props.padding || 25,
      }}>
      {props.loading ? (
        <ActivityIndicator
          animating={props.loading}
          size="large"
          color={props.color ? props.color : '#FFFFFF'}
        />
      ) : (
        <Text
          style={{
            color: props.color || Colors.white,
            fontSize: props.size || 18,
            fontFamily: FONT_FAMILY,
            textAlign: props.textAlign || null,
            fontWeight: props.fontWeight || null,
          }}>
          {props.text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export const Page = (props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.flex}>
      <View
        style={[
          styles.flex,
          {
            backgroundColor: props.backgroundColor || '#fff',
            padding: props.padding,
            paddingTop: props.paddingTop,
            paddingBottom: props.paddingBottom,
            paddingLeft: props.paddingLeft,
            paddingRight: props.paddingRight,
            paddingVertical: props.paddingVertical,
            //paddingHorizontal: Width(props.paddingHorizontal),
          },
        ]}>
        <StatusBar
          translucent={true}
          backgroundColor={props.barColor || '#0000'}
          barStyle={
            props.barIconColor === 'dark' ? 'dark-content' : 'light-content'
          }
        />
        {props.children}
      </View>
    </KeyboardAvoidingView>
  );
};

Page.propTypes = {
  backgroundColor: PropTypes.string,
  padding: PropTypes.string,
  paddingTop: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingVertical: PropTypes.number,
  paddingHorizontal: PropTypes.number,
  backgroundColor: PropTypes.string,
  barIconColor: PropTypes.string,
};

export const Card = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={{
          height: props.height || '30%',
          width: props.width || '90%',
          backgroundColor: props.backgroundColor || null,
          borderWidth: props.borderWidth || null,
          borderColor: props.borderColor || null,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: props.borderRadius || 10,
        }}>
        {props.children}
      </View>
    </TouchableOpacity>
  );
};

const Header = (props) => {
  return (
    <View
      style={{
        height: '10%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
      }}>
      <View
        style={{
          height: '100%',
          width: '70%',
          paddingTop: '5%',

          flexDirection: 'row',
        }}>
        {Images.logo && (
          <Image
            source={Images.logo}
            style={{height: '60%', width: '60%', marginLeft: '-18%'}}
            resizeMode="contain"
          />
        )}
        <View style={{marginLeft: '-20%', marginTop: '2%'}}>
          <H1 color={Colors.header}>props.title</H1>
        </View>
      </View>
      <TouchableOpacity
        onPress={props.onPress}
        style={{
          height: '100%',
          width: '30%',
          paddingTop: '5%',

          flexDirection: 'row',
        }}>
        <Image
          source={Images.settings}
          style={{height: '60%', width: '60%', marginLeft: '43%'}}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export const HeaderBack = (props) => {
  return (
    <View
      style={{
        height: '10%',
        width: '100%',
        paddingTop: '5%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
      }}>
      <View
        style={{
          height: '100%',
          width: '70%',
          paddingTop: '5%',

          flexDirection: 'row',
        }}>
        <Image
          source={Images.logo}
          style={{height: '60%', width: '60%', marginLeft: '-18%'}}
          resizeMode="contain"
        />
        <View style={{marginLeft: '-20%', marginTop: '2%'}}>
          <H1 color={Colors.appGreyDeep}>props.title</H1>
        </View>
      </View>
      <TouchableOpacity
        style={{
          height: '100%',
          width: '30%',
          paddingTop: '5%',
          flexDirection: 'row',
        }}>
        <Image
          source={Images.settings}
          style={{height: '60%', width: '60%', marginLeft: '43%'}}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export const TextInputBox = (props) => {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        {props.leftIcon && (
          <Container
            verticalAlignment="center"
            style={{
              borderWidth: props.borderWidth,
              marginRight: -6.5,
              paddingHorizontal: 6,
              paddingLeft: props.borderWidth ? 15 : 0,
              borderTopLeftRadius: props.borderRadius,
              borderBottomLeftRadius: props.borderRadius,
            }}>
            {/* <Space height="30%"/> */}
            <FontAwesome
              Icon
              name={props.leftIcon}
              size={20}
              color={Colors.primary}
            />
          </Container>
        )}
        <TextInput
          style={{
            backgroundColor: props.backgroundColor
              ? props.backgroundColor
              : 'grey',

            height: RH(props.height) || RH(7),
            width: props.width ? RW(props.width) : RW(90),
            borderRadius: props.borderRadius || 0,
            borderWidth: props.borderWidth || 0,
            borderLeftWidth: props.borderLeftWidth || 0,
            borderColor: props.borderColor,
            padding: props.padding || RR(5),
            paddingLeft: props.paddingLeft,
            borderBottomWidth: props.borderBottomWidth || 0,
            color: props.color || Colors.primary,
            fontSize: RF(props.size) || RF(Fonts.small),
            textAlign: props.textAlign,
          }}
          placeholder={props.placeholder}
          placeholderTextColor={props.placeholderColor}
          onChangeText={props.onChange}
          value={props.value}
          secureTextEntry={props.secure}
          keyboardType={props.keyboardType}
          editable={props.editable}
          multiline={props.multiline || false}
        />
        {props.rightIcon && (
          <TouchableOpacity>
            {/* <Space height="30%"/> */}
            <Container paddingTop={3}>
              <Feather
                Icon
                name={props.isProtected ? 'eye' : 'eye-off'}
                size={20}
                color={Colors.primary}
              />
            </Container>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
TextInputBox.propTypes = {
  backgroundColor: PropTypes.string,
  height: PropTypes.any,
  width: PropTypes.any,
  borderRadius: PropTypes.number,
  borderColor: PropTypes.string,
  placeholder: PropTypes.string,
  borderWidth: PropTypes.number,
  padding: PropTypes.any,
  keyboardType: PropTypes.any,
  secure: PropTypes.bool,
  paddingLeft: PropTypes.any,
  value: PropTypes.any,
  editable: PropTypes.bool,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.bool,
  multiline: PropTypes.bool,
};

export const H1 = (props) => {
  return (
    <Text
      style={{
        color: props.color ? props.color : Colors.primary,
        fontSize: props.size ? RF(props.size) : RF(Fonts.medium),
        fontFamily: FONT_FAMILY,
        textAlign: props.textAlign ? props.textAlign : null,
        fontWeight: props.fontWeight ? props.fontWeight : 'bold',
      }}
      {...props}>
      {props.children || props.text}
    </Text>
  );
};
H1.propTypes = {
  color: PropTypes.any,
  fontSize: PropTypes.number,
  textAlign: PropTypes.string,
  fontWeight: PropTypes.string,
};

export const H2 = (props) => {
  return (
    <Text
      style={{
        color: props.color ? props.color : Colors.appBlack,
        fontSize: props.size ? RF(props.size) : RF(Fonts.semiMedium),
        fontFamily: FONT_FAMILY,
        textAlign: props.textAlign ? props.textAlign : null,
        fontWeight: props.fontWeight ? props.fontWeight : 'bold',
      }}>
      {props.children || props.text}
    </Text>
  );
};
H2.propTypes = {
  color: PropTypes.any,
  fontSize: PropTypes.number,
  textAlign: PropTypes.string,
  fontWeight: PropTypes.string,
};

export const P = (props) => {
  return (
    <Text
      style={{
        color: props.color ? props.color : Colors.primary,
        fontSize: props.size ? RF(props.size) : RF(Fonts.small),
        fontFamily: FONT_FAMILY,
        textAlign: props.textAlign ? props.textAlign : null,
        fontWeight: props.fontWeight ? props.fontWeight : null,
      }}
      {...props}>
      {props.children || props.text}
    </Text>
  );
};
P.propTypes = {
  color: PropTypes.any,
  fontSize: PropTypes.number,
  textAlign: PropTypes.string,
  fontWeight: PropTypes.string,
  numberOfLines: PropTypes.number,
};

export const Space = (props) => {
  return (
    <View
      style={{
        backgroundColor: props.backgroundColor,
        marginTop: props.marginTop,
        height: props.height ? props.height : '4%',
        width: props.width ? props.width : '4%',
        borderRadius: props.borderRadius || 0,
      }}></View>
  );
};
Space.propTypes = {
  backgroundColor: PropTypes.string,
  height: PropTypes.any,
  width: PropTypes.any,
  borderRadius: PropTypes.number,
  marginTop: PropTypes.any,
};

const styles = StyleSheet.create({
  overflow: {overflow: 'hidden'},
  flex: {flex: 1},
  input: {
    paddingLeft: 0,
    fontWeight: Platform.OS === 'ios' ? 'bold' : null,
  },
  width: {width: '100%'},
  rounded: {justifyContent: 'center', alignItems: 'center'},
});
