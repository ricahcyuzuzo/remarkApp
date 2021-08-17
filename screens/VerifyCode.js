import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { Feather } from '@expo/vector-icons';

const VerifyCode = ({ navigation }) => {

    const [loaded] = useFonts({
        AtkinsonRegular: require('../assets/fonts/AtkinsonRegular.ttf'),
        AtkinsonBold: require('../assets/fonts/AtkinsonBold.ttf')
    })

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
            <View style={{
                marginTop: 100,
            }}>
                <Text style={{
                    color: '#fff',
                    fontSize: 25,
                    textAlign: 'center',
                    fontFamily: 'AtkinsonBold'
                }}>Account Verification</Text>
                <Text style={{
                    color: '#4E5056',
                    fontSize: 18,
                    textAlign: 'center',
                    fontFamily: 'AtkinsonRegular',
                    marginTop: 10,
                }}>Please enter six digit code to verify</Text>
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
                        color: '#fff',
                        fontSize: 20
                    }}
                    maxLength={6}
                    placeholder='123456'
                    keyboardType='numeric'
                    placeholderTextColor='#4E5056'    
                />
            </View>

            <View style={{
                marginTop: 30,
                width: '100%',
            }}>
                <TouchableOpacity 
                onPress={() => navigation.navigate('Login')}
                style={{
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
                    }}>Verify</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default VerifyCode
