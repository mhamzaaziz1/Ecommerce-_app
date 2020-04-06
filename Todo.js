import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';

const Todo = () => {
  const [goal, setGoal] = useState('');
  const [currentGoal, setCurrentGoal] = useState([]);

  const enterGoal = () => {
    setCurrentGoal([{
      id: Math.random().toString(), value: goal
    }, ...currentGoal]);
  };

  const deleteGoal = (id) => {
    const filteredGoal = currentGoal.filter(item => item.id !== id);
    setCurrentGoal(filteredGoal);
  };

  const recvGoal = currentGoal.map(goalText => {
    return <View key={goalText.id} style={styles.goal}>
      <TouchableOpacity onPress={() => deleteGoal(goalText.id)}>
        <Text>
          {goalText.value}
        </Text> 
      </TouchableOpacity>
    </View>
  });

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput autoCorrect={false} value={goal}  onChangeText={(text) => setGoal(text)}  style={styles.input} />
        <Button title='add' onPress={enterGoal} style={styles.button} />
      </View>
      
      {recvGoal}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',  
    marginTop: 20, 
    marginBottom: 10 
  },
  input: { 
    borderWidth: 1, 
    width: 200, 
    marginRight: 5, 
    padding: -2, 
    paddingLeft: 5 
  },
  button: { 
    padding: 10 
  },
  goal: { 
    width: 200, 
    alignItems: 'center',
    marginVertical: 5 
  }
});

export default Todo;