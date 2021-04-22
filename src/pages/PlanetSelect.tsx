import React from 'react'
import { 
    View,
    Text, 
    StyleSheet
} from 'react-native'
import colors from '../styles/colors'

import Header from '../components/Header'
import fonts from '../styles/fonts'
import EnviromentButton from '../components/EnviromentButton'

export default function PlanetSelect(){
    return(
        <View style={styles.container }>
            <View style={styles.header}>
                <Header/>
                <Text style={styles.title}>Em qual hambiente</Text>
                <Text style={styles.subTitle}>você quer colocar sua planta?</Text>
            </View> 

            <EnviromentButton title="Cozinha" active/>     
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    header:{
        paddingHorizontal: 30
    },
    title:{
        fontSize: 17,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 20,
        marginTop: 15
    },
    subTitle:{
        fontFamily: fonts.text,
        fontSize: 17,
        lineHeight: 20,
        color: colors.heading
    }
})