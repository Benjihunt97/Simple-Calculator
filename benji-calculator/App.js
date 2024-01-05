import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [displayValue, setDisplayValue] = useState('');

  const handleButtonClick = (buttonValue) => {
    switch (buttonValue) {
      case '=':
        setDisplayValue(eval(displayValue).toString());
        break;
      case 'AC':
        setDisplayValue('');
        break;
      case '%':
        setDisplayValue((eval(displayValue) / 100).toString());
        break;
      case '+/-':
        setDisplayValue(
          displayValue.startsWith('-')
            ? displayValue.slice(1)
            : '-' + displayValue
        );
        break;
      case 'C':
        setDisplayValue(displayValue.slice(0, -1));
        break;
      default:
        setDisplayValue((prevDisplay) => prevDisplay + buttonValue);
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{displayValue}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {['AC', '+/-', '%', '/'].map((value) => (
          <TouchableOpacity
            key={value}
            style={styles.button}
            onPress={() => handleButtonClick(value)}>
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
        {['7', '8', '9', '*'].map((value) => (
          <TouchableOpacity
            key={value}
            style={styles.button}
            onPress={() => handleButtonClick(value)}>
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
        {['4', '5', '6', '+'].map((value) => (
          <TouchableOpacity
            key={value}
            style={styles.button}
            onPress={() => handleButtonClick(value)}>
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
        {['1', '2', '3', 'C'].map((value) => (
          <TouchableOpacity
            key={value}
            style={styles.button}
            onPress={() => handleButtonClick(value)}>
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
        {['0', '.', '='].map((value) => (
          <TouchableOpacity
            key={value}
            style={[styles.button, value === '=' && styles.equalsButton]}
            onPress={() => handleButtonClick(value)}>
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4a5568',
  },
  display: {
    backgroundColor: 'white',
    padding: 15,
    height: 80,
    width: 300,
    marginBottom: 10,
    justifyContent: 'flex-end',
  },
  displayText: {
    fontSize: 24,
    textAlign: 'right',
    color: '#1a202c',
  },
  buttonsContainer: {
    width: 300,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#334249',
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  equalsButton: {
    width: 150,
  },
});
