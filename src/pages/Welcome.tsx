import React from 'react'
import { 
    View, 
    SafeAreaView, 
    Text, 
    Image, 
    StyleSheet, 
    TouchableOpacity, 
    Dimensions
} from 'react-native'

import { Feather } from '@expo/vector-icons'

import watering from '../assets/watering.png'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export default function Welcome(){
  return(
    <SafeAreaView style={styles.Container}>
        <View style={styles.wrapper}>
            
            <Text style={styles.title}>
                Gerencie{'\n'}
                suas plantas de{'\n'}
                forma fácil
            </Text>

            <Image source={watering} 
            style={styles.image} 
            resizeMode="contain"/>

            <Text style={styles.subtitle}>
                Não esqueça mais de regar suas plantas. 
                Nós cuidamos de lembrar você
                sempre que precisar.
            </Text>

            <TouchableOpacity 
            style={styles.button} 
            activeOpacity={0.8}>
                <Feather name="chevron-right" 
                style={styles.buttonIcon}/>
            </TouchableOpacity>

        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    Container:{
        flex: 1,
    },
    wrapper:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    title:{
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: '18%',
        marginBottom: '6%',
        fontFamily: fonts.heading,
        lineHeight: 34
    },
    image:{
        //anotar
        height: Dimensions.get('window').width * 0.7,
    },
    subtitle:{
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
        marginBottom: '5%',
        fontFamily: fonts.heading
    },
    button:{
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56
    },
    buttonIcon:{
        color: colors.white,
        fontSize: 32
    }
})