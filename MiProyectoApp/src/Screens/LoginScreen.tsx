import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Custominput from '../Components/Custominput';
import { useAuth } from '../contexts/AuthContext';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function LoginScreen({navigation} : any) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const {login, isAllowed} = useAuth();

  const handleLogin = () => {
    try {
      const allowed = login(email, password);
      if (!allowed) {
        console.log('Usuario no autorizado');
        return;
      }
        navigation.navigate('Tabs', {email: email});
    } catch (error) {
        console.log(error);
    }
  }
      const handleRegistro = () => {
        try {
          if (!navigation || typeof navigation.navigate !== 'function') {
            console.warn('Navigation is not available');
            return;
          }
          navigation.navigate('Registro');
        } catch (error) {
          console.log(error);
        }
      }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.imagen}
        source={require('/Users/wilmerisaacgodoyescoto/Documents/ProgramacionMovil/MiProyectoMovil/MiProyectoApp/src/muscular-bodybuilder-silhouette-vector-54965420.jpg.avif')}
        resizeMode="contain"
      />
      <Text style={styles.Main}>WELCOME TO IFITAPP</Text>
      <View style={{ width: '100%', alignItems: 'center' }}>
        <View style={styles.card}>
          <Custominput value={email} type="email" placeholder={'Correo'} onChange={setEmail} />
          <Custominput value={password} type="password" placeholder={'contrasena'} onChange={setPassword} />
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.MediumText}>Iniciar Sesion</Text>
          </TouchableOpacity>
          <Text style={styles.SmallText}>¿No tienes una cuenta?</Text>
          <TouchableOpacity onPress={handleRegistro}>
            <Text style={styles.MediumText}>Registrarme</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 10,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 16,

          pointerEvents: 'box-none',
        }}
      >
        <Image
          source={require('/Users/wilmerisaacgodoyescoto/Documents/ProgramacionMovil/MiProyectoMovil/MiProyectoApp/src/depositphotos_284191856-stock-illustration-gym-logo-vector.jpg')}
          style={{ width: 150, height: 100, marginRight: 25 }}
          resizeMode="contain"
        />
        <Image
          source={require('/Users/wilmerisaacgodoyescoto/Documents/ProgramacionMovil/MiProyectoMovil/MiProyectoApp/src/universal-black-and-white-logo-with-the-image-of-a-sports-man-good-for-the-gym-vector.jpg')}
          style={{ width: 100, height: 100, marginLeft: 25 }}
          resizeMode="contain"
        />
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //distribucion en eje horizontal
    alignItems: 'center',
    //alineacion en eje vertical
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffffff',
    paddingTop: 40,
    paddingBottom: 40,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    overflow: 'hidden',
    shadowColor: '#fcfdffff',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 6,
    borderWidth: 1,
    borderColor: 'rgba(251, 250, 250, 0.6)',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 30,
    width: '85%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 6,
    justifyContent: 'space-between'
  },
  SmallText: {
    fontSize: 10, 
    color: '#333', 
    fontWeight: '600', 
    letterSpacing: 0.4,
    textTransform: 'capitalize',
    alignSelf: 'center',
    marginTop: 12,
    backgroundColor: '#f5f7fa',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 4,
    borderColor: '#e6e9ef',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 2,
    elevation: 2,
  },
  MediumText: {
    fontSize: 20, 
    color: '#333', 
    fontWeight: '600', 
    letterSpacing: 0.4,
    textTransform: 'capitalize',
    alignSelf: 'center',
    marginTop: 12,
    backgroundColor: '#f5f7fa',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#858890ff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 2,
    elevation: 2,

  },
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
  },
  imagen :{

    width: 160, height: 160,
   
      alignSelf: 'center',
      marginTop: 20,
      borderRadius: 25,
      overflow: 'hidden',

      // subtle border
      borderWidth: 2,
      borderColor: 'rgba(13,59,102,0.12)',

      // soft shadow for iOS
      shadowColor: '#0D3B66',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.15,
      shadowRadius: 12,

      // elevation for Android
      elevation: 8,

      // slight visual effects
      opacity: 0.98,
      transform: [{ rotate: '-2deg' }],
    }
  }
);