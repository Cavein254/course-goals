import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const GoalItem = props => {
    return (
        <View style={styles.listText}>
            <Text>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listText: {
        marginVertical: '0.1em',
        marginHorizontal: '0.5em',
        padding: '1em',
        backgroundColor: 'lightgray',
        fontSize: '1.2em'
    }
})

export default GoalItem;