import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function SearchBar({ cityHandler }) {
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = () => {
        console.log(searchValue)

        cityHandler(searchValue)
        setSearchValue("")
    };

    return (
        <View style={{ marginTop: 15, flexDirection: 'row' }}>
            <TextInput


                placeholder="Search"
                value={searchValue}
                onChangeText={(text) => setSearchValue(text)}
                style={{
                    backgroundColor: '#eee',
                    borderRadius: 20,
                    fontWeight: '700',
                    marginTop: 7,
                    marginLeft: 10,
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                    flex: 1,
                }}


            />
            <TouchableOpacity>
                <View
                    style={{
                        flexDirection: 'row',
                        marginLeft: 8, // Adjusted margin from marginRight to marginLeft
                        backgroundColor: 'white',
                        padding: 10, // Adjusted padding
                        borderRadius: 30,
                        alignItems: 'center',
                        marginTop: 5
                    }}
                >
                    <AntDesign name="clockcircle" size={11} style={{ marginRight: 6 }} />
                    <Text onPress={handleSearch}>Search</Text>
                </View>
            </TouchableOpacity>
        </View>
    );

}