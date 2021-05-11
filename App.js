import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [goal, setGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (userGoal) => {
    setGoal(userGoal)
  }
  const addGoalHandler = () => {
    // This will work but not always
    // setCourseGoals([...courseGoals,goal])
    setCourseGoals(currentCourseGoals => [...courseGoals, { key: Math.random().toLocaleString(), value: goal }])
  }
  return (
    <View style={styles.container}>
      <GoalInput
        addGoalHandler={addGoalHandler}
        goalInputHandler={goalInputHandler}
        goal={goal} />
      <FlatList
        data={courseGoals}
        renderItem={itemData =>
          <GoalItem title={itemData.item.value} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '2em'
  },
});
