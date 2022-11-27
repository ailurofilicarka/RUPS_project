import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    StyleSheet,
    Button
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SignUpScreen = ({navigation}) => {
    return (
        <View style={[styles.container]}>
            <View style={[styles.box]}>
                <Text style={styles.text}>Email:</Text>
                <View style={styles.action}>
                    <FontAwesome
                        style={styles.text}
                        name="user-o"
                        color="#002171"
                        size={20}
                        marginLeft={10}
                    />
                    <TextInput
                        placeholder='Your Email'
                        style={styles.textInput}
                    />
                </View>
                <Text style={styles.text}>Password:</Text>
                <View style={styles.action}>
                    <FontAwesome
                        style={styles.text}
                        name="lock"
                        color="#002171"
                        size={20}
                    />
                    <TextInput
                        placeholder='Your Password'
                        style={styles.textInput}
                        secureTextEntry={true}
                    />
                </View>
                <Text style={styles.text}>Confirm password:</Text>
                <View style={styles.action}>
                    <FontAwesome
                        style={styles.text}
                        name="lock"
                        color="#002171"
                        size={20}
                    />
                    <TextInput
                        placeholder='Your Password'
                        style={styles.textInput}
                        secureTextEntry={true}
                    />
                </View>
                <View style={{height: 50, width: 90, marginTop: 20, marginLeft: 60}}>
                    <Button title='Sign Up'
                        color={'#c49000'}>
                    </Button>
                </View>
            </View>
      </View>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#fff',
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    box: {
        flex: 1,
        padding: 40,
        width: "80%",
        height: 180,
        color: "#fbc02d"
    },
    text: {
        textAlign: 'left',
        fontSize: 18,
        color: "#002171",
        marginLeft: 10,
        marginTop: 10,
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#002171',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        paddingLeft: 20,
        color: '#05375a',
    },
  });