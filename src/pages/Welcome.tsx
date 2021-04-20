import React from 'react'
import { SafeAreaView, Text, Image, StyleSheet} from 'react-native'
import colors from '../../styles/colors'
import Button from '../components/button'

import watering from '../assets/watering.png'

export default function Welcome(){
  return(
    <SafeAreaView style={styles.Container}>
        <Text style={styles.title}>
            Gerencie{'\n'}
            suas plantas{'\n'}
            de forma fácil
        </Text>

        <Image source={watering} style={styles.image}/>

        <Text style={styles.subtitle}>
            Não esqueça mais de regar suas plantas. 
            Nós cuidamos de lembrar você
            sempre que precisar.
        </Text>

        <Button/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title:{
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: '18%',
        marginBottom: '10%'
    },
    image:{
        width: 292,
        height: 284,
        marginBottom: '10%'
    },
    subtitle:{
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
        marginBottom: '10%'
    },
    
})