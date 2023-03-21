import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight
} from 'react-native';
import { hitProfileAPI } from '../../action/profileapi';
import { useState } from 'react';

const Login = (props) => {

  useEffect(() => {
    try {
      props.hitProfileAPI();
    } catch (error) {
      console.log('Error in Fetch Movies List' + error);
    }
  }, [props]);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const onClick = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;


    if (email === null) {
      alert("Plese Enter Your Email");
      return false;
    }
    if (reg.test(email) === false) {
      alert("Email is Not Correct");
      return false;
    }
    if (password === null) {
      alert("Plese Enter Your Password");
      return false;
    }
    if (email.toLowerCase() === "danish@gmail.com" && password === "Danish@123") {
      props.navigation.navigate('HomePage');
    } else {
      alert("Invalid Email/Password")
    }

  }
  const { data } = props;
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputs}
          placeholder="Email"
          onChangeText={(email) => setEmail(email)} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputs}
          secureTextEntry
          placeholder="Password"
          onChangeText={(password) => setPassword(password)} />
      </View>
      <TouchableHighlight style={[styles.buttonContainer, styles.sendButton]} onPress={() => onClick()}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableHighlight>
    </View>
  );
}


const mapStateToProps = state => ({
  data: state.profilereducer.data,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      hitProfileAPI: hitProfileAPI,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  inputContainer: {
    borderColor: 'black',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderWidth: 1,
    width: 300,
    height: 50,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    fontSize: 20,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  buttonContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 200,
    borderRadius: 30,
  },
  sendButton: {
    backgroundColor: '#000000',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  }
});