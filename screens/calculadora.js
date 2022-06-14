import React, { useState } from "react";
import { StyleSheet, Text, SafeAreaView, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Checkbox } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import Calcular from "../script";
//import Calculadora from "../script";

const Calculadora = () => {
  const check = () => {
    if (checkPicanha != true) {
      alert("checkbox está verdadeiro");
    } else {
      alert("nothing");
    }
  };

  const Limpar = () => {
    setResultado("");
    setResultado2("");
  };

  // TEXT INPUT NUMBER
  const [adultos, setAdultos] = useState("");
  const [kids, setKids] = useState("");
  const [resultado, setResultado] = useState("");
  const [resultado2, setResultado2] = useState("");

  const Calcular = () => {
    setResultado(adultos * 600);
    setResultado2(kids * 100);
  };

  // CORTES
  const [checkPicanha, setPicanha] = React.useState(false);
  const [checkCostela, setCostela] = React.useState(false);
  const [checkBovina, setBovina] = React.useState(false);
  const [checkLinguica, setLinguica] = React.useState(false);
  const [checkAsa, setAsa] = React.useState(false);
  const [checkCoxa, setCoxa] = React.useState(false);

  //ACOMPANHAMENTOS
  const [checkAlho, setAlho] = React.useState(false);
  const [checkFarofa, setFarofa] = React.useState(false);
  const [checkQueijo, setQueijo] = React.useState(false);
  const [checkVinagrete, setVinagrete] = React.useState(false);

  //BEBIDAS
  const [checkRefrigerante, setRefrigerante] = React.useState(false);
  const [checkSuco, setSuco] = React.useState(false);
  const [checkCerveja, setCerveja] = React.useState(false);
  const [checkAgua, setAgua] = React.useState(false);

  //SUPRIMENTOS
  const [checkCarvao, setCarvao] = React.useState(false);
  const [checkCopos, setCopos] = React.useState(false);
  const [checkTalher, setTalher] = React.useState(false);
  const [checkPrato, setPrato] = React.useState(false);

  return (
    <>
      <ScrollView>
        <SafeAreaView>
          <Text style={styles.title}>Calculadora</Text>
        </SafeAreaView>

        <SafeAreaView>
          <Text style={styles.subtitle}>1. QUANTOS ADULTOS? </Text>
          <TextInput
            style={styles.input}
            onChangeText={(texto) => {
              setAdultos(texto);
            }}
            value={String(adultos)}
            placeholder="Informe a quantidade de Adultos!"
            keyboardType="numeric"
          />

          <Text style={styles.subtitle}>2. QUANTAS CRIANÇAS? </Text>
          <TextInput
            style={styles.input}
            onChangeText={(texto) => {
              setKids(texto);
            }}
            value={String(kids)}
            placeholder="Informe a quantidade de Crianças!"
            keyboardType="numeric"
          />
        </SafeAreaView>

        <SafeAreaView>
          <Text style={styles.subtitle}>3. CORTES</Text>

          <Text style={styles.placeholder}> PICANHA SUÍNA</Text>
          <Checkbox //PICANHA SUINA
            status={checkPicanha ? "checked" : "unchecked"}
            onPress={() => {
              setPicanha(!checkPicanha);
              check();
            }}
            color={"red"}
            uncheckColor={"red"}
          />

          <Text style={styles.placeholder}>COSTELA SUÍNA</Text>
          <Checkbox // COSTELA SUINA
            status={checkCostela ? "checked" : "unchecked"}
            onPress={() => {
              setCostela(!checkCostela);
            }}
            color={"red"}
            uncheckColor={"red"}
          />

          <Text style={styles.placeholder}>CARNE BOVINA</Text>
          <Checkbox // CARNE BOVINA
            status={checkBovina ? "checked" : "unchecked"}
            onPress={() => {
              setBovina(!checkBovina);
            }}
            color={"red"}
            uncheckColor={"red"}
          />

          <Text style={styles.placeholder}>LINGUIÇA</Text>
          <Checkbox //  LINGUIÇA
            status={checkLinguica ? "checked" : "unchecked"}
            onPress={() => {
              setLinguica(!checkLinguica);
            }}
            color={"red"}
            uncheckColor={"red"}
          />

          <Text style={styles.placeholder}>COXINHA DE ASA</Text>
          <Checkbox // COXINHA DE ASA
            status={checkAsa ? "checked" : "unchecked"}
            onPress={() => {
              setAsa(!checkAsa);
            }}
            color={"red"}
            uncheckColor={"red"}
          />

          <Text style={styles.placeholder}>SOBRECOXA</Text>
          <Checkbox // SOBRECOXA
            status={checkCoxa ? "checked" : "unchecked"}
            onPress={() => {
              setCoxa(!checkCoxa);
            }}
            color={"red"}
            uncheckColor={"red"}
          />
        </SafeAreaView>

        <SafeAreaView>
          <Text style={styles.subtitle}>4. ACOMPANHAMENTOS</Text>

          <Text style={styles.placeholder}>PÃO DE ALHO</Text>
          <Checkbox // PÃO DE ALHO
            status={checkAlho ? "checked" : "unchecked"}
            onPress={() => {
              setAlho(!checkAlho);
            }}
            color={"red"}
            uncheckColor={"red"}
          />

          <Text style={styles.placeholder}>FAROFA</Text>
          <Checkbox // FAROFA
            status={checkFarofa ? "checked" : "unchecked"}
            onPress={() => {
              setFarofa(!checkFarofa);
            }}
            color={"red"}
            uncheckColor={"red"}
          />

          <Text style={styles.placeholder}>QUEIJO COALHO</Text>
          <Checkbox // QUEIJO COALHO
            status={checkQueijo ? "checked" : "unchecked"}
            onPress={() => {
              setQueijo(!checkQueijo);
            }}
            color={"red"}
            uncheckColor={"red"}
          />

          <Text style={styles.placeholder}>VINAGRETE</Text>
          <Checkbox // VINAGRETE
            status={checkVinagrete ? "checked" : "unchecked"}
            onPress={() => {
              setVinagrete(!checkVinagrete);
            }}
            color={"red"}
            uncheckColor={"red"}
          />
        </SafeAreaView>

        <SafeAreaView>
          <Text style={styles.subtitle}>5. BEBIDAS</Text>

          <Text style={styles.placeholder}> REFRIGERANTE</Text>
          <Checkbox //  REFRIGERANTE
            status={checkRefrigerante ? "checked" : "unchecked"}
            onPress={() => {
              setRefrigerante(!checkRefrigerante);
            }}
            color={"red"}
            uncheckColor={"red"}
          />

          <Text style={styles.placeholder}>SUCO</Text>
          <Checkbox // SUCO
            status={checkSuco ? "checked" : "unchecked"}
            onPress={() => {
              setSuco(!checkSuco);
            }}
            color={"red"}
            uncheckColor={"red"}
          />

          <Text style={styles.placeholder}>CERVEJA</Text>
          <Checkbox // CERVEJA
            status={checkCerveja ? "checked" : "unchecked"}
            onPress={() => {
              setCerveja(!checkCerveja);
            }}
            color={"red"}
            uncheckColor={"red"}
          />

          <Text style={styles.placeholder}>ÁGUA</Text>
          <Checkbox // ÁGUA
            status={checkAgua ? "checked" : "unchecked"}
            onPress={() => {
              setAgua(!checkAgua);
            }}
            color={"red"}
            uncheckColor={"red"}
          />
        </SafeAreaView>

        <SafeAreaView>
          <Text style={styles.subtitle}>6. SUPRIMENTOS</Text>

          <Text style={styles.placeholder}>CARVÃO</Text>
          <Checkbox //  CARVÃO
            status={checkCarvao ? "checked" : "unchecked"}
            onPress={() => {
              setCarvao(!checkCarvao);
            }}
            color={"red"}
            uncheckColor={"red"}
          />

          <Text style={styles.placeholder}>COPOS</Text>
          <Checkbox // COPOS
            status={checkCopos ? "checked" : "unchecked"}
            onPress={() => {
              setCopos(!checkCopos);
            }}
            color={"red"}
            uncheckColor={"red"}
          />

          <Text style={styles.placeholder}>TALHERES</Text>
          <Checkbox // TALHERES
            status={checkTalher ? "checked" : "unchecked"}
            onPress={() => {
              setTalher(!checkTalher);
            }}
            color={"red"}
            uncheckColor={"red"}
          />

          <Text style={styles.placeholder}>PRATOS</Text>
          <Checkbox //  PRATOS
            status={checkPrato ? "checked" : "unchecked"}
            onPress={() => {
              setPrato(!checkPrato);
            }}
            color={"red"}
            uncheckColor={"red"}
          />
          <SafeAreaView>
            <TouchableOpacity style={styles.botao} onPress={() => Calcular()}>
              <Text style={styles.titleBotao}>CALCULAR</Text>
            </TouchableOpacity>
          </SafeAreaView>

          <SafeAreaView>
            <TouchableOpacity style={styles.botao} onPress={() => Limpar()}>
              <Text style={styles.titleBotao}>LIMPAR</Text>
            </TouchableOpacity>
          </SafeAreaView>

          <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: "black", fontSize: 25, fontWeight: "bold" }}>
              Resultado:{" "}
            </Text>
            <Text style={{ color: "crimson" }}>{resultado}</Text>
            <Text style={{ color: "crimson" }}>{resultado2}</Text>
          </SafeAreaView>

        </SafeAreaView>
      </ScrollView>
    </>
  );
};

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

  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    color: "black",
    borderRadius: 15,
    borderColor: "black",
    marginLeft: 20,
    marginRight: 20,
  },

  placeholder: {
    fontSize: 12,
    fontWeight: "700",
    color: "black",
    padding: 3,
    marginLeft: 5,
  },
  botao: {
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
export default Calculadora;
