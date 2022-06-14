import * as React from "react";
import { View, Text, ImageBackground, StyleSheet} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Calculadora from './calculadora';

const Stack = createStackNavigator();

function MyStack(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Calculadora" component={Calculadora} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/backGround-churras.jpg")}
        style={styles.img}
      >
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={styles.title}>Bem Vindo!</Text>
          {/* <Button title='Calculadora' color={'red'}/> */}

          <TouchableOpacity style={styles.botao}
          onPress={() => navigation.navigate("Calculadora")}
          >
            <Text style={styles.botao}>CALCULADORA</Text>
          </TouchableOpacity>

        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  botao:{
    fontWeight:'bold',
    backgroundColor:'red',
    fontSize:26,
    textAlign:'center',
    paddingTop:13,
    paddingBottom:13,
    paddingLeft:10,
    paddingRight:10,
    color:'white',
    borderRadius:100
  },
  img: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
  },
  title: {
    fontSize: 38,
    fontWeight: "700",
    color: "#ffff",
    paddingBottom:15
  },
});
