import React, {useState} from "react"
import {StyleSheet,View, TextInput,Text, Button, Modal} from "react-native"


const Form = (props) => {
    const [goalText, setGoalText] = useState("");
    const {modalCloseHandler} = props;
    const addGoal = () => {
        const {setGoalHandler, goals, visibleState} = props;
        if(goalText.length>0)
        {
          setGoalHandler([...goals, {key:Math.random().toString(), value:goalText}]);
        setGoalText("")
        visibleState(false)
          
      }
      }
    console.log(props.visible)
    return (
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputForm}>
        <Text style={styles.label}>Input Your Goal</Text>
        <TextInput style={styles.inputGoals} placeholder="Enter Your Goal!" value={goalText} onChangeText={(enteredValue) => {
            setGoalText(enteredValue)
          }} />
          <View style={{flexDirection:"row", justifyContent:"space-around", width:"70%"}}>
        <View style={styles.buttonStyles}>
          <Button title="ADD" color="#242423" onPress={addGoal} style={styles.button} />
          </View>
          <View style={styles.buttonStyles}>
          <Button title="CLOSE" color="red" style={styles.button} onPress={modalCloseHandler}/>
          </View>
          </View>
        </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputGoals: {
        width: "80%",
        borderWidth: 1,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom:15
      },
      inputForm:
      {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#F5CB5C"
      },
      label:{
        fontSize:22,
        margin:10,
      },
      modal:{
        backgroundColor:"#F5CB5C"
      },
      buttonStyles:
      {
        width:"40%"
      }
    
})


export default Form