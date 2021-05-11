import React, { useState } from 'react'
import { TextInput, Button, View, StyleSheet } from 'react-native';

const GoalInput = ({ addGoalHandler }) => {
    const [goal, setGoal] = useState('');
    const goalInputHandler = (userGoal) => {
        setGoal(userGoal)
    }
    return (
        <View style={styles.InputContainer}>
            <TextInput
                placeholder="Course Goals"
                style={styles.goalText}
                onChangeText={goalInputHandler}
                value={goal} />
            <Button title="Add"
                style={styles.addBtn}
                onPress={() => addGoalHandler(goal)} />
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
