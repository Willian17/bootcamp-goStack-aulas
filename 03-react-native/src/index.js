import React , {useEffect, useState} from 'react'
import {View , Text, StyleSheet} from 'react-native'
import {StatusBar} from 'expo-status-bar'

import api from './services/api'


export default  function App() {
    const [projects , setProjects] = useState([])

    useEffect(()=>{
        api.get("projects").then(response => {
            console.log(response.data)
            setProjects(response.data)
        })
    } , [])
    return (
    <>
        <StatusBar  style="light"/>
        <View style={styles.container}>
    {projects.map(project => <Text key={project.id} style={styles.title}>{project.title}</Text>)}
        </View>
    </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#FFF',
        fontSize: 30,
        fontWeight: 'bold'
    }
})