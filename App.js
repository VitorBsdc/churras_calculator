import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Calculadora from "./screens/calculadora";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
//import { FontAwesome5 } from "@expo/vector-icons";
import Receitas from "./screens/Receitas";
import Dicas from "./screens/Dicas";
import DrawerItems from "./constants/DrawerItems";
import { FontAwesome } from '@expo/vector-icons'; 
import Creditos from './screens/Credits';
//import Footer from "./components/Footer";


//import { MaterialCommunityIcons } from "@expo/vector-icons";
//import { Feather } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
    <NavigationContainer>
      <Drawer.Navigator
        drawerType="front"
        initialRouteName="Home"
        drawerContentOptions={{
          activeTintColor: "#e91e63",
          itemStyle: { marginVertical: 10 },
        }}
      >
        {DrawerItems.map((drawer) => (
          <Drawer.Screen
            key={drawer.name}
            name={drawer.name}
          
            options={{
              drawerIcon: ({ focused }) =>
                drawer.iconType === "SimpleLineIcons" ? (
                  <SimpleLineIcons
                    name={drawer.iconName}
                    size={24}
                    color={focused ? "#e91e63" : "black"}
                  />
                ) : drawer.iconType === "Ionicons" ? (
                  <Ionicons
                    name={drawer.iconName}
                    size={24}
                    color={focused ? "#e91e63" : "black"}
                  />
                ) : drawer.iconType === "FontAwesome" ? (
                  <FontAwesome
                    name={drawer.iconName}
                    size={24}
                    color={focused ? "#e91e63" : "black"}
                  />
                )
                : drawer.iconType === "FontAwesome" ? (
                  <FontAwesome
                    name={drawer.iconName}
                    size={24}
                    color={focused ? "#e91e63" : "black"}
                  />
                )
                : (
                  <Ionicons
                    name={drawer.iconName}
                    size={24}
                    color={focused ? "#e91e63" : "black"}
                  />
                )
                
              
            }}
            component={
              drawer.name === "Home"
                ? Home
                : drawer.name === "Calculadora"
                ? Calculadora
                : drawer.name === "Receitas"
                ? Receitas
                : drawer.name === "Dicas"
                ? Dicas
                : Creditos
            }
          />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
    {/* <Footer /> */}
    </>
  );
}