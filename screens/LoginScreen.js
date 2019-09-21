import React from 'react';
import bridge from "../constants/bridge"

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  View,
  Alert,
  TextInput,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';


export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      enter: '',
      errorMessage: null,
    };

  }

  handleLogin = () => {
    this.props.navigation.navigate('Main')
  }

  
  handleForgot = () => {
    Alert.alert("Ops")
  }


  render() {
    return (

      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
          <View style={styles.logoContainer}>
            <Text style={styles.slogan}>Hola Iniciar sesión </Text>
          </View>

          <View style={styles.loginContainer}>
            <Text></Text>
            {this.state.errorMessage && <Text style={{ color: 'white' }}>
            {this.state.errorMessage}
            </Text>}
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Habla a"
              placeholderTextColor="rgba(255,255,255,0.7)"
              onChangeText={email => this.setState({ email })}
              onSubmitEditing={() => this.passwordInput.focus()}
              returnKeyType="next"
              keyboardType="email-address"
              value={this.state.email}
            />
            <TextInput
              secureTextEntry
              placeholderTextColor="rgba(255,255,255,0.7)"
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Contraseña"
              onChangeText={password => this.setState({ password })}
              ref={(input) => this.passwordInput = input}
              returnKeyType="go"
              onSubmitEditing={this.handleLogin}
              value={this.state.password}
            />
            <TouchableOpacity onPress={this.handleLogin}>
              <Text style={styles.loginBtnContainer}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
              <Text style={styles.previousContainer}>Por favor inscríbeme? →</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.handleForgot}>
              <Text style={styles.forgotContainer}>Olvidé el registro ⎋</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Splash')}>
              <Text style={styles.previousContainerPart2}>← Anterior</Text>
            </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#439bd5",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: 'center',
    flexGrow: 0.8,
  },
  slogan: {
    alignItems: "center",
    color: "#FFF",
    fontWeight: 'bold',
    fontSize: 25,

    marginTop: 10,
    opacity: 0.9,
  },
  loginContainer: {
    alignItems: "center",
    padding: 30,
  },
  textInput: {
    alignItems: "center",
    color: "#FFF",
    height: 50,
    fontSize: 25,
    borderRadius: 12,
    width: "90%",
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingHorizontal: 10,
    marginBottom: 10,

  },
  loginBtnContainer: {
    alignItems: "center",
    color: "#FFF",
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    textAlign:'center',
    marginTop: 20,
  },
  signUpContainer: {
    marginTop: 5,
    color: "#FFF",
  },
  previousContainer: {
    marginTop: 10,
    fontSize: 20,
    color: "#FFF",
  },
  previousContainerPart2: {
    marginTop: 70,
    fontSize: 20,
    color: "#FFF",
  },
  forgotContainer: {
    fontSize: 20,
    color: "#FFF",
  }
})
