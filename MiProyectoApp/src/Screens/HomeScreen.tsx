import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { Button } from "react-native";

export default function HomeScreen({navigation}: any) {

const handleGuardarRutinas = () => {
    // perform the save action or navigate; using console.log as a placeholder
    navigation.navigate('GuardarRutinas');
}


    return(
        <View>
            <Text style={styles.Main}>Bienvenido</Text>
            <Button title="Guardar Rutinas" onPress={handleGuardarRutinas}/>
        </View>


    )
}

const styles = StyleSheet.create({

Main:{
    fontSize: 25,
    color: '#0D3B66',
    fontWeight: '800',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    textAlign: 'center',
    marginVertical: 14,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 16,
    backgroundColor: 'rgba(13,59,102,0.06)',

    textShadowColor: 'rgba(13,59,102,0.25)',
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 8,

    shadowColor: '#0d3b66',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 10,
  }
})