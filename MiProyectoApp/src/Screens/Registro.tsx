import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "../Components/Custominput";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setUserProfile } from "../store/userSlice";


import { View, Text, Button, TouchableOpacity, FlatList, StyleSheet , Alert} from "react-native";
import { useAuth } from "../contexts/AuthContext";

            export default function Registro({ navigation }: any) {

                const dispatch = useAppDispatch();

                const savedData = useAppSelector((state) => state.user);

                const {register} = useAuth();



                const enfoques = [
                    { id: "1", title: "Rutinas y programas" },
                    { id: "2", title: "Nutrición y dietas" },
                    { id: "3", title: "Seguimiento de progreso" },
                    { id: "4", title: "Comunidad y soporte" },
                    { id: "5", title: "informacion y Retro alimentacion" },
                ];

                const [name, setName] = useState("");
                const [email, setEmail] = useState("");
                const [password, setPassword] = useState("");
                const [confirmPassword, setConfirmPassword] = useState("");
                const [phone, setPhone] = useState("");
                const [selectedIds, setSelectedIds] = useState<string[]>([]); 





                const handleSelect = (item: { id: string; title: string }) => {
                    setSelectedIds((prev) =>
                        prev.includes(item.id) ? prev.filter((id) => id !== item.id) : [...prev, item.id]
                    );
                };

                const handleSendForm = async () => {
                    if (!email || !password ){
                    Alert.alert("Error de registro", "Por favor, complete todos los campos obligatorios.");
                    return;
                    }

                    try{                    
                    await register(email, password);
                    navigation.replace("Login", {
                    });
                } catch (error:any){
                    Alert.alert(
                        "Error de registro",
                    error?.message ?? "Error al registrar el usuario"
                    );
                }

                    dispatch(
                        setUserProfile({
                            interes: enfoques.filter((e) => selectedIds.includes(e.id)).map((e) => e.title),
                            name: name,
                            email: email,
                            password: password,
                        })
                    );

                    const selectedItems = enfoques.filter((e) => selectedIds.includes(e.id));

                    const form = {
                        name,
                        email,
                        password,
                        confirmPassword,
                        phone,
                        enfoques: selectedItems,
                    };

                    navigation.navigate("Tabs", {
                        screen: "LoginScreen",
                        params: { form },
                    });
                };

                return (
                    

                    <SafeAreaView style={styles.container}>
                        <Text style={styles.CenterText}>Regístrate</Text>
                        <CustomInput value={name} placeholder="Nombre Completo" onChange={setName} />
                        <CustomInput value={email} placeholder="Correo electrónico" type="email" onChange={setEmail} />
                        <CustomInput value={password} placeholder="Contraseña" type="password" onChange={setPassword} />
                        <CustomInput
                            value={confirmPassword}
                            placeholder="Confirmar contraseña"
                            type="password"
                            onChange={setConfirmPassword}
                        />
                        <CustomInput value={phone} placeholder="Teléfono" type="number" onChange={setPhone} />

                        <Text style={[styles.MainText, { fontSize: 20 }]}>Selecciona tus enfoques de interés</Text>
                        <FlatList
                            data={enfoques}
                            keyExtractor={(item) => item.id}
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

                        <Button title="Registrarse" onPress={handleSendForm} />
                    </SafeAreaView>
                
                );
            }

            const styles = StyleSheet.create({
                container: {
                    flex: 1,
                    alignItems: "flex-start",
                    justifyContent: "center",
                    padding: 20,
                },
                MainText: {
                    fontSize: 24,
                    marginBottom: 20,
                },
                option: {
                    padding: 10,
                    borderBottomWidth: 5,
                    borderBottomColor: "#ddd",
                    width: "100%",
                },
                optionSelected: {
                    backgroundColor: "#e6f0ff",
                },
                optionText: {
                    fontSize: 15,
                },
                optionTextSelected: {
                    fontWeight: "600",
                },
                CenterText :{
                fontSize: 24,
                    marginBottom: 30,
                    alignSelf: 'center',
                }
            });
        
    
    
