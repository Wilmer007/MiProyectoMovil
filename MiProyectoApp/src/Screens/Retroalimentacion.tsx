import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAppSelector } from '../store/hooks';


export default function Retroalimentacion({navigation}: any) {


    const savedData = useAppSelector((state) => state.user);

    
    


return (
    <View>
        <Text style={styles.Main}>Informacion segura y legitima</Text>
        <Text>Tu informacion e intereses</Text>
        <Text>Nombre</Text>
        <Text>{savedData.name}</Text>
        <Text>Email</Text>
        <Text>{savedData.email}</Text>
        <Text>Intereses seleccionados</Text>
        <Text>{savedData.interes}</Text>

        

    </View>
);
}
const styles = StyleSheet.create({

    Main:{
            fontSize: 25,
            color: '#1c1e20ff',
            fontWeight: '800',
            letterSpacing: 1.2,
            textTransform: 'uppercase',
            textAlign: 'center',
            marginVertical: 14,
            paddingHorizontal: 14,
            paddingVertical: 8,
            borderRadius: 16,
            backgroundColor: 'rgba(13,59,102,0.06)',
            marginTop: 30,

            textShadowColor: 'rgba(13,59,102,0.25)',
            textShadowOffset: { width: 0, height: 3 },
            textShadowRadius: 8,

            shadowColor: '#0d3b66',
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 0.12,
            shadowRadius: 12,
            elevation: 10,
    },
});