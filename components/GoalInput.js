import React from 'react'
import { TextInput, Button, View, StyleSheet } from 'react-native';

const GoalInput = ({ goalInputHandler, addGoalHandler, goal }) => {
    return (
        <View style={styles.InputContainer}>
            <TextInput
                placeholder="Course Goals"
                style={styles.goalText}
                onChangeText={goalInputHandler}
                value={goal} />
            <Button title="Add"
                style={styles.addBtn}
                onPress={addGoalHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    InputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '1em',
        alignItems: 'center',
    },
    goalText: {
        borderBottomColor: '#000',
        borderWidth: '0.1em',
        padding: '1em',
        width: '80%'
    },
    addBtn: {
    },
})
export default GoalInput
