import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export const GoalItem = props => {
    return (
        <TouchableOpacity onPress={(key) => props.onDelete(key)}>
            <View style={styles.listText} on>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
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