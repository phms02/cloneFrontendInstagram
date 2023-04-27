;import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

// Importando o Header...
import Header from "./src/Header";

// Importando o Header...
import List from "./src/List";

export default function App() {
  const [feed, setFeed] = useState([
    {
      id: 1,
      nome: "Pedro",
      descricao: "Mais um dia de muitos bugs, refatoração e deploys.",
      imgPerfil: "http://sujeitoprogramador.com/instareact/fotoPerfil1.png",
      imgPublicacao: "http://sujeitoprogramador.com/instareact/foto1.png",
      likeada: true,  // Diz se tem curida ou não.
      likers: 1  // Quantidade de curtidas.
    },

    {
      id: 2,
      nome: "Guilherme",
      descricao: "Isso sim é ser raiz!!!!!",
      imgPerfil: "https://sujeitoprogramador.com/instareact/fotoPerfil2.png",
      imgPublicacao: "https://sujeitoprogramador.com/instareact/foto2.png",
      likeada: false,
      likers: 0
    },

    {
      id: 3,
      nome: "José",
      descricao: "Bora trabalhar! Hoje, estou começando em um projeto novo aqui no trampo, desde o frontend ao backend!",
      imgPerfil: "https://sujeitoprogramador.com/instareact/fotoPerfil3.png",
      imgPublicacao: "https://sujeitoprogramador.com/instareact/foto3.png",
      likeada: false,
      likers: 3
    },

    {
      id: 4,
      nome: "Pedro",
      descricao: "Isso sim que é TI!",
      imgPerfil: "https://sujeitoprogramador.com/instareact/fotoPerfil1.png",
      imgPublicacao: "https://sujeitoprogramador.com/instareact/foto4.png",
      likeada: false,
      likers: 1
    },

    {
      id: 5,
      nome: "Guilherme",
      descricao: "Boa tarde galera do insta...",
      imgPerfil: "https://sujeitoprogramador.com/instareact/fotoPerfil2.png",
      imgPublicacao: "https://sujeitoprogramador.com/instareact/foto5.png",
      likeada: true,
      likers: 32
    }
  ]);

  return (
    <View style={styles.container}>
      <Header />

      <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={feed}
        renderItem={
          ({item}) => <List data={item} />
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  // A View "mãe" ocupará toda a nossa tela.
    // justifyContent: "center", -> Centralizando VERTICALMENTE, ou seja, na COLUNA.
    // alignItems: "center", -> Centralizando VERTICALMENTE, ou seja, na LINHA.
    backgroundColor: '#B0B7C0'
  }
})