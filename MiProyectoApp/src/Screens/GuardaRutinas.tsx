import React from 'react';
import { View, Text , StyleSheet, Button, TouchableOpacity, FlatList, ScrollViewBase, ScrollViewComponent ,} from 'react-native';  
import { SafeAreaView } from 'react-native-safe-area-context';
import Custominput from '../Components/Custominput';
import { useState } from 'react';
import {Ionicons, MaterialIcons} from "@expo/vector-icons"
import { ScrollView } from 'react-native';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setRutineProfile } from '../store/rutineSlice';


export default function GuardaRutinas({navigation}: any) {

    const dispatch = useAppDispatch();

    const savedData = useAppSelector((state) => state.rutines);

    const Musculos = [
                    { id: "1", title: "Pecho" },
                    { id: "2", title: "Espalda" },
                    { id: "3", title: "Brazo completo" },
                    { id: "4", title: "Piernas" },
                    { id: "5", title: "Hombros" },
                    { id: "6", title: "Abdominales" },
                    { id: "7", title: "Cardio" },
                    { id: "8", title: "Bicep" },
                    { id: "9", title: "Tricep" },
                    { id: "10", title: "Antebrazos" },
                    { id: "11", title: "Gluteos" },
                    { id: "12", title: "Pantorrillas" },
                    
                ];

    const [NombreRutina, setNombreRutina] = useState('');
    const [Descripcion, setDescripcion] = useState('');
    const [NumSeries, setNumSeries] = useState('');
    const [NumRepeticiones, setNumRepeticiones] = useState('');
    const [DiasSemana, setDiasSemana] = useState('');
    const [selectedIds, setSelectedIds] = useState<string[]>([]); 


                    const handleSelect = (item: { id: string; title: string }) => {
                        if (!item || !item.id) {
                            console.warn('Item is not valid');
                            return;
                        }
                        setSelectedIds((prev) =>
                            prev.includes(item.id) ? prev.filter((id) => id !== item.id) : [...prev, item.id]
                        );
                    }

    const Guardar = () => {

        if (!NombreRutina || !Descripcion || !NumSeries || !NumRepeticiones || !DiasSemana) {
            console.log('Por favor, complete todos los campos');
            return;
        }
        dispatch(
            setRutineProfile({
                nombreRutina: NombreRutina,
                Descripcion: Descripcion,
                NumSeries: NumSeries,
                NumRepeticiones: NumRepeticiones,
                DiasSemana: DiasSemana,
                selectedIds: selectedIds
            })
            
            
        );
       


        console.log('Rutina guardada:', {
            NombreRutina,
            Descripcion,
            NumSeries,
            NumRepeticiones,
            DiasSemana,
            selectedIds

            
        });
        setNombreRutina('');
        setDescripcion('');
        setNumSeries('');
        setNumRepeticiones('');
        setDiasSemana('');
        setSelectedIds([]);
       
    }



    return (
        <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{ padding: 16, paddingBottom: 40 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={true}
        >
            <Text style={styles.Main}>  Rutinas </Text>

            <Custominput
                value={NombreRutina}
                placeholder="Nombre de la Rutina"
                onChange={setNombreRutina}

            />
            <Custominput
                value={Descripcion}
                placeholder="Descripcion"
                onChange={setDescripcion}
            />
            <Custominput
                value={NumSeries}
                placeholder="Numero de Series"
                onChange={setNumSeries}
                type="number"
            />
            <Custominput
                value={NumRepeticiones}
                placeholder="Rango de Repeticiones por Serie"
                onChange={setNumRepeticiones}
                type="number"
            />
            <Custominput
                value={DiasSemana}
                placeholder="Dias de la Semana"
                onChange={setDiasSemana}
            />
            <Text style={{ fontSize: 14, fontWeight: '400', marginTop: 20, marginBottom: 10 , }}>Selecciona los grupos musculares:</Text>
            <FlatList
                                        data={Musculos}
                                        keyExtractor={(item) => item.id}
                                        nestedScrollEnabled={true}
                                        style={{ marginVertical: 19 }}
                                        renderItem={({ item }) => {
                                            const selected = selectedIds.includes(item.id);
                                            return (
                                                <TouchableOpacity
                                                    style={[styles.option, selected && styles.optionSelected]}
                                                    onPress={() => handleSelect(item)}
                                                >
                                                    <Text style={[styles.optionText, selected && styles.optionTextSelected]}>{item.title}</Text>
                                                </TouchableOpacity>
                                            );
                                        }}
                                    />
            
        
            <TouchableOpacity onPress={Guardar}style={styles.Guardar}>
                <MaterialIcons name="save" size={21} color="#fff" />
                <Text style={[styles.TextoBoton,{ backgroundColor: 'transparent', marginLeft: 8, paddingVertical: 0, paddingHorizontal: 0 },
                    ]}> Guardar Rutina </Text>
            </TouchableOpacity>

        </ScrollView>
        </SafeAreaView>
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
    TextoBoton:{
            fontSize: 18,
            color: '#ffffff',
            fontWeight: '600',
            letterSpacing: 0.8,
            textTransform: 'uppercase',
            textAlign: 'center',
            marginVertical: 14,
            paddingHorizontal: 14,
            paddingVertical: 12,
            borderRadius: 8,
            backgroundColor: '#0D3B66',

            shadowColor: '#0d3b66',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 6,
            elevation: 8,       
    },
    Guardar: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 4,
            borderRadius: 8,
            backgroundColor: '#143e65ff',
            marginHorizontal: 5,
    },
    option: {
            paddingVertical: 8,
            paddingHorizontal: 12,
            marginLeft: 16,
            marginRight: 0,
            marginVertical: 9,
            borderRadius: 8,
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#e0e0e0',
            alignSelf: 'flex-start', 
    },
    optionSelected: {
            backgroundColor: '#0D3B66',
            borderColor: '#0D3B66',
    },
    optionText: {
            fontSize: 16,
            color: '#1c1e20',
    },
    optionTextSelected: {
            fontSize: 16,
            color: '#ffffff',
            fontWeight: '600',
    },
})

/*const Guardar = () => {
        if (!NombreRutina || !Descripcion || !NumSeries || !NumRepeticiones || !DiasSemana) {
            console.log('Por favor, complete todos los campos');
            return;
        }

        // Construir la nueva rutina
        const nuevaRutina = {
            id: Date.now().toString(),
            nombreRutina: NombreRutina,
            descripcion: Descripcion,
            numSeries: NumSeries,
            numRepeticiones: NumRepeticiones,
            diasSemana: DiasSemana,
            musculosSeleccionados: selectedIds,
            createdAt: new Date().toISOString(),
        };

        // Obtener array existente de rutinas (soporta caso donde aún no existe)
        const existingRutinas = (savedData && (savedData as any).rutinas) ? (savedData as any).rutinas : [];

        // Guardar agregando la nueva rutina al array
        dispatch(
            setUserProfile({
                ...(savedData as any),
                rutinas: [...existingRutinas, nuevaRutina],
            })
        );

        console.log('Rutina guardada:', nuevaRutina);

        // Limpiar campos
        setNombreRutina('');
        setDescripcion('');
        setNumSeries('');
        setNumRepeticiones('');
        setDiasSemana('');
        setSelectedIds([]);

        // Navegar a la pantalla MisRutinas para ver todas las rutinas (asegúrate que la ruta exista)
        if (navigation && typeof navigation.navigate === 'function') {
            navigation.navigate('MisRutinas');
        }
    };*/