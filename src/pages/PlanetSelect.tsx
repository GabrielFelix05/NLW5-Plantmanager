import React from 'react'
import { 
    View,
    Text, 
    StyleSheet
} from 'react-native'
import colors from '../styles/colors'

import Header from '../components/Header'

export default function PlanetSelect(){
    return(
        <View style={styles.container }>
            <Header/>
            <Text>Teste</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})