import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet } from 'react-native';

export default function Macros({navigation}: any) {

const [Alimento, setAlimento] = useState('');
const [Porcion, setPorcion] = useState('');
const [Calorias, setCalorias] = useState('');
const [Proteinas, setProteinas] = useState('');
const [Carbohidratos, setCarbohidratos] = useState('');
const [Grasas, setGrasas] = useState('');
const [Fibra, setFibra] = useState('');

  return (
    
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Macros</Text>
    </SafeAreaView>
  );          
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0D3B66',
  },    

  });
