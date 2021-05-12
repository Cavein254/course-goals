import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const addGoalHandler = (goal) => {
    // This will work but not always
    // setCourseGoals([...courseGoals,goal])
    setCourseGoals(currentCourseGoals => [...courseGoals, { key: Math.random().toLocaleString(), value: goal }])
  }
  const onDelete = goalKey => {
    console.log(goalKey)
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((key) => key !== goalKey)
    })
  }
  return (
    <View style={styles.container}>
      <GoalInput
        addGoalHandler={addGoalHandler} />
      <FlatList
        data={courseGoals}
        renderItem={itemData =>
          <GoalItem title={itemData.item.value} onDelete={onDelete} />
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
