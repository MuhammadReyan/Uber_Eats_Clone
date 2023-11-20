import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function BottomTab() {
    const handleTabPress = (text) => {
        // Add your navigation logic here
    };

    const Icon = (props) => (
        <TouchableOpacity onPress={() => handleTabPress(props.text)}>
            <View>
                <FontAwesome5
                    name={props.icon}
                    size={25}
                    style={{
                        marginBottom: 3,
                        alignSelf: 'center',
                    }}
                />
                <Text>{props.text}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Icon icon="home" text="Home" />
            <Icon icon="search" text="Browse" />
            <Icon icon="shopping-bag" text="Grocery" />
            <Icon icon="receipt" text="Orders" />
            <Icon icon="user" text="Account" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
        marginHorizontal: 30,
        justifyContent: 'space-between',
        position: 'absolute', // Set position to absolute
        bottom: 0, // Align to the bottom of the screen
        left: 0, // Align to the left of the screen
        right: 0, // Align to the right of the screen

    },
});
