import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View , SafeAreaView} from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [tem, setTemp] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto"  />
      <View>
        <Text>{text}</Text>
      </View>

      <View style={styles.takeDown} >
        <TextInput 
          placeholder = "Enter a text here..."
          style={styles.input} 
          onChangeText={(e)=>setTemp(e)}
        />
        <Button title="Enter" 
          onPress={()=>setText(text => text + tem + "\n")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  takeDown: {
    position: 'absolute',
    bottom: 40,
    flexDirection:"row", 
    justifyContent: "center",
    alignContent: "center"
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 16
  },

  input: {
    borderWidth: 1,
    borderColor: '#777',
    width: "80%"
  }
});
