import React, { useState} from 'react'
import { View, Text, StatusBar, TouchableOpacity, Image, TextInput, Pressable, FlatList, ScrollView } from 'react-native';
import { Fontisto, Feather, AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import MenuIcon from './icons/dots-menu.png';

const HomeScreen = ({navigation}) => {
    const [isLiked, setLiked] = useState(false);
    const [isLoved, setLoved] = useState(false);

    const [loaded] = useFonts({
        AtkinsonRegular: require('../assets/fonts/AtkinsonRegular.ttf'),
        AtkinsonBold: require('../assets/fonts/AtkinsonBold.ttf')
    })

    const accounts = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBwZXJzb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
            name: 'Rich Mansel'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBwZXJzb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
            name: 'Gabriel Gret'
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBwZXJzb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
            name: 'Morrison Amber'
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBwZXJzb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
            name: 'Aniston Gapris'
        },
    ]
    const accountReels = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBwZXJzb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBwZXJzb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1506634572416-48cdfe530110?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhY2slMjBwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60'
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1546456073-92b9f0a8d413?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmxhY2slMjBwZXJzb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
        },
        {
            id: 5,
            image: 'https://images.unsplash.com/photo-1507152832244-10d45c7eda57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmxhY2slMjBwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60'
        },
        {
            id: 6,
            image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBwZXJzb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
        },
        {
            id: 7,
            image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBwZXJzb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
        },
        {
            id: 8,
            image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBwZXJzb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
        }
    ];

    const FeedsComponent = ({ item }) => {
        return (
            <TouchableOpacity style={{
                marginRight: 15
            }}>
                <Image source={{uri: item.image}} style={{
                    width: 60,
                    height: 60,
                    borderRadius: 50
                }} />
            </TouchableOpacity>
        )
    }

    const PeopleComponent = ({item}) => {
        return (
            <View style={{
                marginTop: 20,
                backgroundColor: '#13232E',
                width: 300,
                height: 380,
                borderRadius: 20,
                alignSelf: 'center'
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('ViewProfile')}>
                <Image 
                    source={{ uri: item.image }}
                    style={{
                        width: 300,
                        height: 300,
                        borderRadius: 20,
                        alignSelf: 'center'
                    }}
                />
                </TouchableOpacity>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                <Text style={{
                    color: '#c4c4c4',
                    alignSelf: 'flex-start',
                    marginLeft: 20,
                    fontSize: 17,
                    marginTop: 15,
                    fontWeight: '100',
                    fontFamily: 'AtkinsonRegular'
                }}>{item.name}</Text>
                <View style={{
                    flexDirection: 'row',
                    marginRight: 10
                }}>
                <TouchableOpacity 
                onPress={() => setLiked(!isLiked)}
                style={{
                    marginTop: 5,
                    marginLeft: 10
                }}>
                   { isLiked ?  <AntDesign name='like2' size={30} color='#5568FE' /> :  <AntDesign name='like1' size={30} color='#5568fe' />}
                </TouchableOpacity>
                
                <TouchableOpacity 
                onPress={() => setLoved(!isLoved)}
                style={{
                    marginTop: 5,
                    marginLeft: 30
                }}>
                   { isLoved ?  <AntDesign name='heart' size={30} color='#8D2F5B' /> :  <AntDesign name='hearto' size={30} color='#8D2F5B' />}
                </TouchableOpacity>
                </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingLeft: 20,
                    paddingRight: 20
                }}>
                    <Text style={{
                        color: '#c4c4c4',
                        fontFamily: 'AtkinsonRegular',
                        fontSize: 17,
                        marginTop: 15,
                        fontWeight: '700'
                    }}>129 Likes</Text>
                </View>
            </View>
        )
    }

    if(!loaded){
        return null;
    }
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#131D23'
        }}>
            <StatusBar barStyle='light-content' backgroundColor='#131D23' />
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft: 20,
                marginRight: 20,
                marginTop: 20
            }}>
                <TouchableOpacity style={{
                    width: 40,
                    height: 40,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Image source={MenuIcon} resizeMode='contain' style={{
                        width: 20,
                        height: 20,

                    }} />
                </TouchableOpacity>

                <TouchableOpacity 
                    style={{
                        width: 40,
                        height: 40,
                        alignItems: 'center',
                        justifyContent: 'center'
                }}>
                    <Fontisto name="bell" size={24} color="#EBEBEB" />
                </TouchableOpacity>
                
            </View>

            <View style={{
                marginTop: 20,
                width: '100%',
            }}>
                <Pressable style={{
                    backgroundColor: '#13232E',
                    width: '85%',
                    borderRadius: 10,
                    flexDirection: 'row',
                    padding: 13,
                    alignItems: 'center',
                    alignSelf: 'center'
                }}>
                    <Feather name='search' size={24} color='#5568FE'  />
                    <Text style={{
                        color: '#4E5056',
                        marginLeft: 20,
                        fontFamily: 'AtkinsonRegular'
                    }}>Search here</Text>
                </Pressable>
            </View>
            <View style={{
                marginTop: 30,
                marginLeft: 30,
            }}>
                <FlatList
                    data={accountReels}
                    renderItem={FeedsComponent}
                    keyExtractor={item => item.id}
                    horizontal={true}
                />    
            </View>
            <View style={{
                marginBottom: 220,
                paddingTop: 20
            }}> 
                <FlatList
                    data={accounts}
                    renderItem={PeopleComponent}
                    keyExtractor={item => item.id}
                /> 
            </View>
        </View>
    )
}

export default HomeScreen
