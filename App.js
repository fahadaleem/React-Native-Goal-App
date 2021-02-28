import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Form from "./Components/Form"
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function App() {

  const goalValue = useState("");
  const [goals, setGoals] = useState([]);
  const [isAddModal, setIsAddModal] = useState(false);

  const deleteItem = (id)=>{
    const filteredGoal = goals.filter(item=>item.key!==id)
    setGoals(filteredGoal);
  }

  const modalCloseHandler= ()=>{
    setIsAddModal(false);
  }

  return (
    <View style={styles.container} >
      <Text style={styles.heading} >Goal App!</Text>
    <Button title="Add New Goal" onPress={()=>setIsAddModal(true)} color="#242423"/>
      <Form setGoalHandler={setGoals} goals={goals} visible={isAddModal} visibleState={setIsAddModal} modalCloseHandler = {modalCloseHandler}/>
      {goals.length==0?<Text style={{textAlign:"center",marginTop:20, fontSize:32, color:"#242423"}}>There is No Goal!</Text>:<FlatList data={goals} style={styles.goalsDisplayBlock} renderItem={(goalItem=><TouchableOpacity activeOpacity={0.5} onPress={deleteItem.bind(this, goalItem.item.key)}><Text style={styles.goal}>{goalItem.item.value}</Text></TouchableOpacity>)} />} 
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5CB5C",
    textAlign: "center",
    justifyContent:"center",
    padding:15,
    paddingTop:25
  },
  heading: {
    color: "#242423",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom:15
  },
 
  
  goal: {
    backgroundColor: "#242423",
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
    marginTop: 5,
    marginBottom: 5,
    padding: 10
  }


});
