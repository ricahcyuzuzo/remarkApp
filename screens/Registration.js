import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { Feather } from '@expo/vector-icons';

const Registration = ({ navigation }) => {
    const [secured, setSecured] = useState(true);

    const [loaded] = useFonts({
        AtkinsonRegular: require('../assets/fonts/AtkinsonRegular.ttf'),
        AtkinsonBold: require('../assets/fonts/AtkinsonBold.ttf')
    })

    const handleSecurePassword = () => {
        setSecured(!secured);
    }

    if(!loaded){
        return null;
    }
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#131D23',
            width: '100%',
        }}>
            <StatusBar barStyle='light-content' backgroundColor='#131D23' />
            <ScrollView keyboardShouldPersistTaps='handled'>
            <View style={{
                marginTop: 100,
            }}>
                <Text style={{
                    color: '#fff',
                    fontSize: 25,
                    textAlign: 'center',
                    fontFamily: 'AtkinsonBold'
                }}>Create a new account</Text>
                <Text style={{
                    color: '#4E5056',
                    fontSize: 17,
                    textAlign: 'center',
                    fontFamily: 'AtkinsonRegular',
                    marginTop: 10,
                }}>Please fill in the form to continue</Text>
            </View>

            <View style={{
                marginTop: 70,
                width: '100%',
                alignItems: 'center'
            }}>
                <TextInput 
                    style={{
                        fontFamily: 'AtkinsonRegular',
                        width: '90%',
                        padding: 20,
                        backgroundColor: '#252A34',
                        borderRadius: 20,
                        paddingLeft: 25,
                        color: '#fff'
                    }}
                    placeholder='Full names'
                    placeholderTextColor='#4E5056'    
                />
                <TextInput 
                    style={{
                        fontFamily: 'AtkinsonRegular',
                        width: '90%',
                        padding: 20,
                        backgroundColor: '#252A34',
                        borderRadius: 20,
                        paddingLeft: 25,
                        color: '#fff',
                        marginTop: 15,
                    }}
                    placeholder='Phone number'
                    placeholderTextColor='#4E5056'    
                    keyboardType='phone-pad'
                />
                <View style={{
                    width: '100%',
                    alignItems: 'center'
                }}>
                <TextInput 
                    style={{
                        fontFamily: 'AtkinsonRegular',
                        width: '90%',
                        padding: 20,
                        backgroundColor: '#252A34',
                        borderRadius: 20,
                        paddingLeft: 25,
                        color: '#fff',
                        marginTop: 15
                    }}
                    secureTextEntry={secured}
                    placeholder='Password'
                    placeholderTextColor='#4E5056'    
                />
                <TouchableOpacity 
                onPress={handleSecurePassword}
                style={{
                    position: 'absolute',
                    right: 50,
                    top: 37,
                }}>
                    {secured ? <Feather 
                        name='eye' 
                        size={24} 
                        color='#4E5056' 
                    /> : <Feather 
                    name='eye-off' 
                    size={24} 
                    color='#4E5056' 
                />}
                </TouchableOpacity>
                </View>
            </View>
            <View style={{
                marginTop: 30,
                width: '100%',
            }}>
                <TouchableOpacity style={{
                    backgroundColor: '#5568FE',
                    padding: 25,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 20,
                    width: '90%',
                    alignSelf: 'center'
                }}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 15,
                        fontFamily: 'AtkinsonRegular'
                    }}>Sign Up</Text>
                </TouchableOpacity>
            </View>

            <View style={{
                alignItems: 'center'
            }}>
                <View style={{
                    marginTop: 20,
                    flexDirection: 'row',
                }}>
                <Text style={{ color: '#4E5056' }}>Have an account?</Text>
                <TouchableOpacity 
                onPress={() => navigation.navigate('Login')}
                style={{
                    marginTop: 0,
                }}>
                    <Text style={{
                        color: '#5568FE',
                        marginLeft: 10,
                    }}>Sign In</Text>
                </TouchableOpacity>   
                </View>     
            </View>


            </ScrollView>
        </View>
    )
}

export default Registration
