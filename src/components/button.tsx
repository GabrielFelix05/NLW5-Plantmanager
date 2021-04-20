import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import colors from '../../styles/colors'

export default function Button(){
    return(
        <View>

        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
            <Text style={styles.buttonText}>
                >
            </Text>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56
    },
    buttonText:{
        color: colors.white,
        fontSize: 24
    }
})