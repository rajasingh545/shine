import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import {colors, FONTS, logo, SIZES} from '../../constant';

const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

const Input = ({
  label,
  placeholder,
  value,
  secureTextEntry = false,
  changeText,
}) => (
  <View style={styles.inputWrapper}>
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        underlineColorAndroid={'transparent'}
        value={value}
        secureTextEntry={secureTextEntry}
        onChangeText={changeText}
        placeholderTextColor={colors.regularLightGray}
      />
    </View>
  </View>
);

const Login = ({navigation}) => {
  const [state, setState] = useState({
    userName: '',
    password: '',
  });

  const handleChange = (name, value) => {
    setState({...state, [name]: value});
  };

  const onSubmit = () => {
    if (
      state.userName.toLocaleLowerCase() === 'admin' &&
      state.password.toLocaleLowerCase() === 'admin'
    ) {
      setState({
        userName: '',
        password: '',
      });
      navigation.navigate('Home');
      return true;
    }
    Alert.alert('Failed', 'Invalid username or password.');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={logo} style={styles.logo} resizeMode={`contain`} />
      </View>
      <View style={styles.textWarapper}>
        <Text style={styles.smTxt}>{`Proceed with your`}</Text>
        <Text style={styles.lgText}>{`Login`}</Text>
      </View>

      {/* Form */}
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset}
        style={styles.form}>
        <Input
          label={`Username`}
          placeholder={`Username`}
          value={state.userName}
          changeText={e => handleChange('userName', e)}
        />
        <Input
          label={`Password`}
          placeholder={`Password`}
          value={state.password}
          secureTextEntry={true}
          changeText={e => handleChange('password', e)}
        />
        {/* Button */}
        <TouchableOpacity style={styles.btn} onPress={onSubmit}>
          <Text style={styles.btnText}>{`Login`}</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: SIZES.w_5,
  },
  imageWrapper: {
    paddingHorizontal: SIZES.w_10,
    marginTop: SIZES.h_10 * 3,
    marginBottom: SIZES.h_5,
    alignItems: 'center'
  },
  textWarapper: {
    paddingHorizontal: SIZES.w_10,
    alignItems: 'center'
  },
  smTxt: {
    ...FONTS.body2,
    color: colors.regularLightGray,
  },
  lgText: {
    ...FONTS.h1,
    color: colors.black,
  },
  logo: {
    width: SIZES.w_10 * 10,
    height: SIZES.w_10 * 10,
  },
  form: {
    marginTop: SIZES.h_10 * 8,
    paddingHorizontal: SIZES.w_10 * 4,
  },
  label: {
    ...FONTS.h5,
    color: colors.black,
  },
  textInput: {
    alignSelf: 'stretch',
    borderBottomColor: colors.borderLight, // Add this to specify bottom border color
    borderBottomWidth: 1.5, // Add this to specify bottom border thickness
    padding: SIZES.w_5 - 2,
    paddingHorizontal: 0,
    color: colors.black,
  },
  inputWrapper: {
    marginBottom: SIZES.h_10*2,
  },
  btn: {
    marginTop: SIZES.h_5,
    height: SIZES.h_10 * 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.danger,
  },
  btnText: {
    ...FONTS.h4,
    color: colors.white,
  },
});
