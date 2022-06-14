import * as React from "react";
import { View, Text, StyleSheet, Linking } from "react-native";
import { RectButton } from "react-native-gesture-handler";

function Link() {
  Linking.openURL("https://github.com/NexusGroup6");
}
function Link2() {
  Linking.openURL("https://github.com/NexusGroup6/churrasCalculator");
}

const Credits = () => {
  return (
    <>
      <View>
        <Text style={styles.title}>Colaboradores</Text>
      </View>
      <View>
        <Text style={styles.subtitle}>Equipe Nexus Group</Text>
        <Text style={styles.content}>Paulo Rondon - Tech Lead</Text>
        <Text style={styles.content}>Paulo Willyan - Full Stack</Text>
        <Text style={styles.content}>Vitor Benedito - Front End</Text>
        <Text style={styles.content}>Matheus Reis - Back End</Text>
        <Text style={styles.content}>Matheus Costa - Back End</Text>
        <Text style={styles.contentEnd}>Marcos Arambasic - Scrum</Text>
      </View>
      <View>
        <Text style={styles.subtitle}>Docente</Text>
        <Text style={styles.contentEnd}>Atila Andreatti Olivi</Text>
      </View>

      <View>
        <Text style={styles.subtitle}>Git Hub</Text>

        <RectButton onPress={Link} style={styles.button}>
          <Text style={styles.titleBotao}> PERFIL </Text>
        </RectButton>

        <RectButton onPress={Link2} style={styles.button}>
          <Text style={styles.titleBotao}> REPOSITÓRIO </Text>
        </RectButton>
      </View>
    </>
  );
};

export default Credits;

const styles = StyleSheet.create({
  title: {
    color: "red",
    fontSize: 32,
    padding: 20,
    textAlign: "right",
  },
  subtitle: {
    color: "black",
    textAlign: "justify",
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 15,
  },
  content: {
    color: "black",
    textAlign: "justify",
    fontSize: 19,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 15,
  },
  contentEnd: {
    color: "black",
    textAlign: "justify",
    fontSize: 19,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 25,
  },
  button: {
    backgroundColor: "red",
    color: "white",
    borderRadius: 100,
    margin: 20,
  },
  titleBotao: {
    fontSize: 25,
    textAlign: "center",
    color: "#fff",
    padding: 13,
  },
});
