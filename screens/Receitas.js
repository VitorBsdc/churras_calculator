import * as React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export default function Receitas() {
  return (
    <ScrollView>
      <View>
        <Text style={styles.title}>Receitas</Text>
        {/* Receita 1 */}
        <View>
          <Text style={styles.subtitle}>1. Arroz biro biro</Text>
          <Text style={styles.subtitle}>Ingredientes</Text>
          <Text style={styles.content}>- 3 xícaras de chá de arroz</Text>
          <Text style={styles.content}>- Alho, cebola, óleo, sal à gosto</Text>
          <Text style={styles.content}>
            - Água quente o suficiente para cobrir o arroz
          </Text>
          <Text style={styles.content}>- 3 ovos</Text>
          <Text style={styles.content}>- 300g de bacon</Text>
          <Text style={styles.content}>- 1 pacote de batata palha</Text>
          <Text style={styles.subtitle}>Mode de Preparo</Text>
          <Text style={styles.content}>
            1. Lave o arroz, escorra e reserve.
          </Text>
          <Text style={styles.content}>
            2. Em uma panela coloque o óleo frite a cebola e o alho e coloque o
            arroz.
          </Text>
          <Text style={styles.content}>
            3. Refogue bem o arroz coloque a água quente e o sal.
          </Text>
          <Text style={styles.content}>
            4. Deixe cozinhar ficando soltinho e reserve.
          </Text>
          <Text style={styles.content}>
            5. Em outra panela coloque óleo frite o bacon já picadinho bem
            fritinho.
          </Text>
          <Text style={styles.content}>6. Retire e reserve.</Text>
          <Text style={styles.content}>
            7. Neste mesmo óleo frite os 3 ovos.
          </Text>
          <Text style={styles.content}>
            8. Depois misture tudo ao arroz junto com a batata palha e é só
            servir.
          </Text>
          <Image
            style={styles.img}
            source={require("../imgs/arroz_biro_biro.jpg")}
          />
        </View>

        {/* Receita 2 */}
        <View>
          <Text style={styles.subtitle}>2. Maionese de Batata</Text>
          <Text style={styles.subtitle}>Ingredientes</Text>
          <Text style={styles.content}>- 5 batatas</Text>
          <Text style={styles.content}>- 3 cenouras</Text>
          <Text style={styles.content}>- 1 cebola grande</Text>
          <Text style={styles.content}>- 1 maço de cheiro verde</Text>
          <Text style={styles.content}>- 4 colheres (sopa) maionese</Text>
          <Text style={styles.content}>
            - 1 colher (sopa) de mostarda de Dijon
          </Text>
          <Text style={styles.content}>- Azeitonas verdes</Text>
          <Text style={styles.content}>- Sal</Text>
          <Text style={styles.content}>- 2 colheres (sopa) de azeite</Text>
          <Text style={styles.subtitle}>Modo de Preparo</Text>
          <Text style={styles.content}>
            1. Descasque e corte as batatas e as cenouras em quadrados pequenos.
          </Text>
          <Text style={styles.content}>
            2. Cozinhe separadamente em água com sal.
          </Text>
          <Text style={styles.content}>3. Escorra e deixe esfriar.</Text>
          <Text style={styles.content}>
            4. À parte misture a maionese, azeite, cebola batidinha, mostarda
            Dijon, sal, cheiro verde, azeitonas picadas.
          </Text>
          <Text style={styles.content}>
            5. Junte as batatas e as cenouras cozidas.
          </Text>
          <Text style={styles.content}>6. Coloque na geladeira.</Text>
          <Image style={styles.img} source={require("../imgs/maionese.jpg")} />
        </View>

        {/* Receita 3 */}
        <View>
          <Text style={styles.subtitle}>3. Costela bovina</Text>
          <Text style={styles.subtitle}>Ingredientes</Text>
          <Text style={styles.content}>- 3kg de costela de boi</Text>
          <Text style={styles.content}>
            - 3m de papel alumínio com aproximadamente 40cm de largura
          </Text>
          <Text style={styles.content}>
            - 3/4 de copo americano de sal grosso
          </Text>
          <Text style={styles.subtitle}>Modo de preparo</Text>
          <Text style={styles.content}>
            1. Usando uma faca, faça vários furos na costela.
          </Text>
          <Text style={styles.content}>
            2. Na parte do osso, fure entre eles.
          </Text>
          <Text style={styles.content}>
            3. Na parte da frente (carnuda) fure até a ponta da faca encostar
            neles.
          </Text>
          <Text style={styles.content}>
            4. Abra o papel-alumínio sobre uma mesa, colocando de 3 a 4 pedaços
            um sobre o outro, com a parte brilhante pra cima.
          </Text>
          <Text style={styles.content}>
            5. Esses pedaços devem ser suficientes para acomodar a costela e
            ficar com umas pontas de uns 5 cm sobrando pra cada lado.
          </Text>
          <Text style={styles.content}>
            6. Sobre o papel, espalhe sal grosso, formando uma fina camada por
            todo o local onde a costela se apoiará.
          </Text>
          <Text style={styles.content}>
            7. Coloque a costela com os ossos virados para baixo sobre o papel e
            o sal.
          </Text>
          <Text style={styles.content}>
            8. Cubra a costela com uma fina camada de sal grosso.
          </Text>
          <Text style={styles.content}>
            9. Agora recorte a mesma quantidade de papéis que colocou embaixo e
            coloque sobre a costela.
          </Text>
          <Text style={styles.content}>
            10. Vá dobrando e unindo os papéis de baixo com os de cima, fazendo
            uma forte união entre as bordas deles.
          </Text>
          <Text style={styles.content}>
            11. Leve a costela e coloque sobre a grelha.
          </Text>
          <Text style={styles.content}>
            12. Marque 2 horas e vire a mesma, deixando mais uma hora e pronto.
          </Text>
          <Image
            style={styles.img}
            source={require("../imgs/costela_bovina.jpg")}
          />
        </View>

        {/* Receita 4 */}
        <View>
          <Text style={styles.subtitle}>4. Panceta Pururuca</Text>
          <Text style={styles.subtitle}>Ingredientes</Text>
          <Text style={styles.content}>
            - 1kg de Panceta (com pele/couro) fresca
          </Text>
          <Text style={styles.content}>- Sal Grosso a gosto</Text>
          <Text style={styles.content}>- Papel Alumínio</Text>
          <Text style={styles.content}>- 1 Espeto para Churrasco</Text>
          <Text style={styles.subtitle}>Modo de Preparo</Text>
          <Text style={styles.content}>
            1. Com uma faca, faça furos na pele da panceta.
          </Text>
          <Text style={styles.content}>
            2. Coloque a panceta sobre o papel alumínio, coloque-a no espeto.
            Tempere a panceta com pouco sal na parte da carne e muito sal na
            parte da pele.
          </Text>
          <Text style={styles.content}>
            3. Enrole o papel alumínio e leve à churrasqueira. Lado da pele para
            cima, fogo médio, altura de 40 centímetros por aproximadamente 1
            hora.
          </Text>
          <Text style={styles.content}>
            4. Após 1 hora (ainda na churrasqueira), com uma faca, faça um corte
            na parte de baixo do papel alumínio para escorrer o líquido. Retire
            a panceta da churrasqueira.
          </Text>
          <Text style={styles.content}>
            5. Retire o papel alumínio da panceta, retire o excesso de sal e
            volte a churrasqueira (primeiro andar da churrasqueira) com o lado
            da carne voltado para o braseiro para dourar a parte da carne.
          </Text>
          <Text style={styles.content}>
            6. Quando a parte da carne estiver dourada, suba a panceta na altura
            de 40 centímetros, com o lado da pele voltado para o braseiro, para
            pururucar a pele.
          </Text>
          <Text style={styles.content}>
            7. Assim que a pele estiver pururuca, retire da churrasqueira, deixe
            a panceta descansar por 5 minutos antes de servir. Para servir,
            corte em iscas e sirva com limão.
          </Text>
          <Text style={styles.content}>
            8. Prato pronto é só servir e bom apetite! O tempo de preparo
            depende do braseiro utilizado. Vale lembrar que o fogo é muito alto,
            vai dourar por fora e não vai assar por dentro.
          </Text>
          <Image style={styles.img} source={require("../imgs/panceta.jpg")} />
        </View>

        {/* Receita 5 */}
        <View>
          <Text style={styles.subtitle}>
            5. Espetinho de Legumes - p/Vegetarianos
          </Text>
          <Text style={styles.subtitle}>Ingredientes</Text>
          <Text style={styles.content}>- 1 batata-doce em cubos médios</Text>
          <Text style={styles.content}>- 1 xícara (chá) de cebola petisco</Text>
          <Text style={styles.content}>- 1 berinjela em cubos grandes</Text>
          <Text style={styles.content}>- 1 xícara (chá) de tomate cereja</Text>
          <Text style={styles.content}>
            - 1 xícara (chá) de tofu em cubos grande
          </Text>
          <Text style={styles.subtitle}>Ingredientes do Tempero</Text>
          <Text style={styles.content}>- 1 xícara (chá) de azeite</Text>
          <Text style={styles.content}>- 1/4 xícara (chá) de mostarda</Text>
          <Text style={styles.content}>- 1/4 xícara (chá) de balsâmico</Text>
          <Text style={styles.content}>
            - 1/4 xícara (chá) de suco de limão
          </Text>
          <Text style={styles.content}>- Pimenta (a gosto)</Text>
          <Text style={styles.subtitle}>Modo de Preparo</Text>
          <Text style={styles.content}>
            1. Bata os ingredientes da marinada no liquidificador.
          </Text>
          <Text style={styles.content}>
            2. Marine todos os legumes e o tofu por 8 horas.
          </Text>
          <Text style={styles.content}>
            3. Asse a batata e a cebola marinadas.
          </Text>
          <Text style={styles.content}>
            4. Grelhe o tofu, a berinjela e a abobrinha.
          </Text>
          <Text style={styles.content}>5. Forme espetinhos.</Text>
          <Text style={styles.content}>6. Grelhe-os no espetinho.</Text>
          <Image
            style={styles.img}
            source={require("../imgs/espetinho_de_legumes.jpg")}
          />
        </View>

        {/* Receita 6 */}
        <View>
          <Text style={styles.subtitle}>
            6. Lombinho de porco recheado com cogumelo - p/Diabéticos
          </Text>
          <Text style={styles.subtitle}>Ingredientes</Text>
          <Text style={styles.content}>- 1kg de lombo de porco</Text>
          <Text style={styles.content}>- 200g de cogumelos frescos</Text>
          <Text style={styles.content}>- 2 colheres (sopa) de azeite</Text>
          <Text style={styles.content}>- 3 colheres (sopa) de manteiga</Text>
          <Text style={styles.content}>- 1 cebola grande picada</Text>
          <Text style={styles.content}>- 2 dentes de alhos picados</Text>
          <Text style={styles.content}>- 1 raminho de salsa picada</Text>
          <Text style={styles.content}>- 2 tomates maduros picados</Text>
          <Text style={styles.content}>- 200ml de vinho branco</Text>
          <Text style={styles.content}>- Sal e pimenta (a gosto)</Text>
          <Text style={styles.subtitle}>Modo de Preparo</Text>
          <Text style={styles.content}>
            1. Lavar, secar e fatiar os cogumelos. Cozinhe-os em azeite com uma
            colher (sopa) da cebola dourada. Fazer uma cavidade no lombo e
            acrescentar sal e pimenta e rechear com os cogumelos.
          </Text>
          <Text style={styles.content}>
            2. Amarrar com barbante e temperar novamente com sal e pimenta. Em
            uma panela, dourar a carne com a manteiga aquecida. Colocar a carne
            em uma assadeira e reservar a gordura que sobrou.
          </Text>
          <Text style={styles.content}>
            3. Em uma panela, refogar o alho com o restante da cebola na gordura
            da carne. Acrescentar a salsa e o tomate picado, incluindo o vinho
            branco.
          </Text>
          <Text style={styles.content}>
            4. Deixar levantar fervura e regar o lombo de porco com o molho
            obtido. Leve ao forno, durante 50 a cinco minutos, a 180 °C, regando
            com um pouco de água. Por fim, retirar o barbante e servir inteiro,
            ou fatiado, com o que sobrou do molho, à parte.
          </Text>
          <Text style={styles.content}>
            5. Por final, grelhe rapidamente na churrasqueira.
          </Text>
          <Image
            style={styles.imgBottom}
            source={require("../imgs/lombinho_de_porco.jpg")}
          />
        </View>
      </View>
    </ScrollView>
  );
}

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
  img: {
    marginBottom: 25,
    alignSelf: "center",
    width: "100%",
  },
  imgBottom: {
    marginTop: 20,
    alignSelf: "center",
    width: "100%",
  },
});
