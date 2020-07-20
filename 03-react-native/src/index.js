import React from 'react'
import {View , Text, StyleSheet} from 'react-native'
import {StatusBar} from 'expo-status-bar'

//Não possuem valor semântico(significado)
// Não possui estilização própria
// todos componentes possuem por padrão 'display: flex'

// View: div, footer, header, main, aside, section
// Text: p, span, strong, h1, h2, h3

export default  function App() {
    return (
    <>
        <StatusBar  style="light"/>
        <View style={styles.container}>
            <Text style={styles.title}>Hello World</Text>
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