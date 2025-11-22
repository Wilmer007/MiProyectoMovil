import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import { useAppSelector } from "../store/hooks";


export default function MisRutinas({navigation}: any) {

const userProfile = useAppSelector((state) => state.rutines);

return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Mis Rutinas Guardadas</Text>
        <Text>1 = Pecho 2 = Espalda 3 = Brazo completo</Text>
        <Text> 4 = Piernas 5 = Hombros 6 = Abdominales</Text>
        <Text> 7 = Cardio 8 = Biceps 9 = Pecho 10 = Antebrazo</Text>
        <Text> 10 = Antebrazo 11 = Gluteos 12 = Pantorrillas</Text>

        <View style={styles.routineContainer}>
            <Text style={styles.label}>Nombre de la Rutina:</Text>
            <Text style={styles.value}>{userProfile.nombreRutina || 'No guardado'}</Text>

            <Text style={styles.label}>Descripción:</Text>
            <Text style={styles.value}>{userProfile.Descripcion || 'No guardado'}</Text>

            <Text style={styles.label}>Número de Series:</Text>
            <Text style={styles.value}>{userProfile.NumSeries || 'No guardado'}</Text>

            <Text style={styles.label}>Número de Repeticiones:</Text>
            <Text style={styles.value}>{userProfile.NumRepeticiones || 'No guardado'}</Text>

            <Text style={styles.label}>Días de la Semana:</Text>
            <Text style={styles.value}>{userProfile.DiasSemana || 'No guardado'}</Text>

            <Text style={styles.label}>Músculos Seleccionados:</Text>
            <Text style={styles.value}>
                {userProfile.selectedIds.length > 0 ? userProfile.selectedIds.join(', ') : 'No guardado'}
            </Text>
        </View>
    </SafeAreaView>
);          


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
        color: '#0D3B66',
    },
    routineContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 8,
        color: '#333333',
    },
    value: {
        fontSize: 16,
        marginTop: 4,
        color: '#666666',
    },
});