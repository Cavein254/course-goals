import React,{useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App(){
  const [goal, setGoal]= useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (userGoal) => {
    setGoal(userGoal)
  }
  const addGoalHandler = () => {
    setCourseGoals([...courseGoals,goal])
    console.log(courseGoals)
  }
  return(
    <View style={styles.container}>     
      <View style={styles.InputContainer}>
        <TextInput placeholder="Course Goals" style={styles.goalText} onChangeText={goalInputHandler} value={goal}/>
        <Button title="Add" style={styles.addBtn} onPress={addGoalHandler}/>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingTop:'2em'
  },
  InputContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:'1em',
    alignItems:'center',
  },
  goalText:{
    borderBottomColor:'#000',
    borderWidth:'0.1em',
    padding:'1em',
    width:'80%'
  },
  addBtn:{
  }
});
