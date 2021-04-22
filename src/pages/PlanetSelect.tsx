import React, { useEffect, useState } from 'react'
import { 
    View,
    Text, 
    StyleSheet,
    FlatList
} from 'react-native'
import colors from '../styles/colors'

import Header from '../components/Header'
import fonts from '../styles/fonts'
import EnviromentButton from '../components/EnviromentButton'
import api from '../services/api'

interface EnviromentProps {
    key: string,
    title: string
}

export default function PlanetSelect(){
    const [enviroments, setEnviroments] = useState<EnviromentProps[]>([])

    useEffect(() => {
        async function fetchEnviroment(){
            const { data } = await api.get('plants_environments')
            setEnviroments([
                {
                    key: 'all',
                    title: 'Todos'
                },
                ...data
            ])
        }
        fetchEnviroment()
    }, [])
    return(
        <View style={styles.container }>
            <View style={styles.header}>
                <Header/>
                <Text style={styles.title}>Em qual hambiente</Text>
                <Text style={styles.subTitle}>você quer colocar sua planta?</Text>
            </View> 

            <View>
                <FlatList
                    data={enviroments}
                    renderItem={({item}) => (
                        <EnviromentButton
                            title={item.title}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.enviromentList}
                />
            </View>  
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
    },
    enviromentList:{
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginLeft: 32,
        marginVertical: 32
    }
})