import React from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
import { Entypo, Foundation } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

const ViewProfile = ({ navigation }) => {
    
    const [loaded] = useFonts({
        AtkinsonRegular: require('../assets/fonts/AtkinsonRegular.ttf'),
        AtkinsonBold: require('../assets/fonts/AtkinsonBold.ttf')
    })




    if(!loaded){
        return null
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#131D23',
            width: '100%',
        }}>
            <StatusBar barStyle='light-content' backgroundColor='#131D23' />
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
            }}>
                <TouchableOpacity 
                onPress={() => navigation.goBack()}
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 40,
                    height: 40,
                    marginLeft: 20,
                    borderRadius: 10,
                    backgroundColor: '#13232E'
                }}>
                    <Entypo name='chevron-left' size={30} color='#c4c4c4' />
                </TouchableOpacity>
            </View>
            <View>
                <Image 
                    source={{
                        uri: 'https://images.unsplash.com/photo-1506634572416-48cdfe530110?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhY2slMjBwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60'
                    }}
                    style={{
                        width: '90%',
                        height: 400,
                        borderRadius: 20,
                        alignSelf: 'center',
                        marginTop: 30
                    }}
                />

                <Text style={{
                    color: '#c4c4c4',
                    fontFamily: 'AtkinsonRegular',
                    fontSize: 25,
                    marginLeft: 20,
                    marginTop: 30
                }}>Rich Siren</Text>
                <View style={{
                    flexDirection:"row",
                    justifyContent: 'space-between',
                    paddingLeft: 20,
                    paddingRight: 20
                }}>
                <Text style={{
                    color: '#c4c4c4',
                    marginTop: 10,
                    fontFamily: 'AtkinsonRegular',
                }}>Age: 24</Text>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <Text style={{color: '#c4c4c4', marginTop: 5, marginRight: 10, fontFamily: 'AtkinsonRegular',}}>Male</Text>
                    <Foundation name='male-symbol' size={25} color='#5568FE' />
                </View>
                </View>
                <TouchableOpacity style={{
                    width: '90%',
                    padding: 20,
                    backgroundColor: '#5568FE',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 15,
                    alignSelf: 'center',
                    marginTop: 20
                }}>
                    <Text style={{
                        color: '#c4c4c4',
                        fontFamily: 'AtkinsonRegular',
                    }}>Invite Him</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ViewProfile
