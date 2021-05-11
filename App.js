import React,{useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button,ScrollView} from 'react-native';

export default function App(){
  const [goal, setGoal]= useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (userGoal) => {
    setGoal(userGoal)
  }
  const addGoalHandler = () => {
    // This will work but not always
    // setCourseGoals([...courseGoals,goal])
    setCourseGoals(currentCourseGoals => [...courseGoals,goal])
    console.log(courseGoals)
  }
  return(
    <View style={styles.container}>     
      <View style={styles.InputContainer}>
        <TextInput 
        placeholder="Course Goals" 
        style={styles.goalText} 
        onChangeText={goalInputHandler} 
        value={goal}/>
        <Button title="Add" 
        style={styles.addBtn} 
        onPress={addGoalHandler}/>
      </View>
      <ScrollView>
        {courseGoals.map(goal=><View style={styles.listText} key={Math.random()}><Text>{goal}</Text></View>)}
      </ScrollView>
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
  },
  listText:{
    marginVertical:'0.1em',
    marginHorizontal:'0.5em',
    padding:'1em',
    backgroundColor:'lightgray',
    fontSize:'1.2em'
  }
});
