import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, useAnimatedValue } from 'react-native';

export default function App() {

  const buttons = ['AC', 'DEL', '%', '/', 7, 8, 9, '-', 6, 5, 4, '*', 3, 2, 1, '+', 0, '.', '+/-', '=']
  const [restNumero, setResNumero] = useState("")
  const [valor, setValor] = useState("")

  function calcular(){
    const splitNumero = restNumero.split(' ')
    const fistNumero = parseFloat(splitNumero[0])
    const lastNumero = parseFloat(splitNumero[2])
    const operador = splitNumero[1]

    switch(operador){
      case '+':
        setResNumero((fistNumero + lastNumero).toString())
        return
      
      case '-':
        setResNumero((fistNumero - lastNumero).toString())
        return
      
      case '*':
        setResNumero((fistNumero * lastNumero).toString())
        return
      
      case '/':
        setResNumero((fistNumero / lastNumero).toString())
    }
  }

  function handleInput(buttonPressed){
    console.log(buttonPressed)
    if(buttonPressed === '+' | buttonPressed === '-' | buttonPressed === '*' | buttonPressed === '/'){
      setResNumero(restNumero + " " + buttonPressed + " " )
      return
    }
    switch(buttonPressed){
      case 'DEL':
        setResNumero(restNumero.substring(0, (restNumero.length -2)))
        return
      case 'AC' :
        setValor("")
        setResNumero("")
        return
      case '=':
        setValor(restNumero + " = ")
        calcular()
        return
    }
    setResNumero(restNumero + buttonPressed)
  }


  return (

    <View>

      <View style={styles.resultado}>
        <Text style={styles.resulText}>{valor}</Text>
        <Text style={styles.subResul}>{restNumero}</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map(button => 
          button === '='?
            <TouchableOpacity key={button} style={styles.button} onPress={() => handleInput(button)}>
              <Text styles={styles.text}>{button}</Text>   
            </TouchableOpacity>
          :
            <TouchableOpacity key={button} style={styles.button} onPress={() => handleInput(button)}>
              <Text styles={styles.text}>{button}</Text>   
            </TouchableOpacity>
          
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  resultado:{
    backgroundColor: '#282f3b',
    width: '100%',
    minHeight: 300,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },

  subResul:{
    fontSize: 90,
    color: '#fff',
    marginRight: 5
  },

  resulText:{
    fontSize: 40,
    color: '#fff',
    marginTop: 5,
    marginBottom: 5,
    marginRight: 5
  },

  buttons:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    color: '#fff',
  
  },

  button: {
    minWidth: 90,
    minHeight: 90,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,

  },

  text:{
    fontSize: 20
  }
});
