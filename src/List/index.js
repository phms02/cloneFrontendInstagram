import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function List(props) {
  function carregaIcone(likeada) {
    return likeada ? require("../img/like_dado.png") : require("../img/like_vazio.png");
  }

  function mostrarLikes(likers) {
    if(likers === 0) {
      return  // Não retorna nada
    }

    // Retornanddo um JSX...
    return(
      <Text style={styles.likes}>
        {likers} {likers > 1 ? "curtidas" : "curtida"}
      </Text>
    )
  }

  return(
    <View>
      {/* Colocando o cabeçalho... */}
      <View style={styles.viewPerfil}>
        <Image
          source={{uri: props.data.imgPerfil}}
          style={styles.fotoPerfil}
        />

        <Text style={styles.nomeUsuario}>
          {props.data.nome}
        </Text>
      </View>

      {/* Colocando a imagem da publicação... */}
      <Image
        source={{uri: props.data.imgPublicacao}}
        style={styles.fotoPublicacao}
        resizeMode="cover"  // Vai encaixar a imagem no tamanho que definimos no 'styles'.
      />

      {/* Colocando os botões... */}
      <View style={styles.btnArea}>
        <TouchableOpacity>
          <Image
            source={carregaIcone(props.data.likeada)}
            style={styles.icones}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSend}>
          <Image
            source={require("../img/comment.png")}
            style={styles.icones}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSend}>
          <Image
            source={require("../img/send.png")}
            style={styles.icones}
          />
        </TouchableOpacity>
      </View>

      {/* Chamando a função que mostra as curtidas... */}
      {mostrarLikes(props.data.likers)}

      {/* Trabalhando com o rodapé... */}
      <Text style={styles.rodapeNome}>
        {props.data.nome}
      </Text>

      <Text style={styles.rodapeDescricao}>
        {props.data.descricao}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewPerfil:{
    flex:1,
    alignItems: "center",  // Alinha no centro.
    flexDirection: "row",  // Deixa um item/elemento do lado do outro.
    padding: 8
  },

  fotoPerfil:{
    borderRadius: 25,
    width: 50,
    height: 50
  },

  nomeUsuario:{
    fontSize: 22,
    color: '#000000',
    paddingLeft: 5
  },

  fotoPublicacao:{
    alignItems: "center",
    height: 400
  },

  btnArea:{
    flexDirection:"row",
    padding: 10
  },

  icones:{
    width: 28,
    height: 28
  },

  btnSend:{
    paddingLeft: 5
  },

  likes:{
    fontWeight: "bold",
    marginLeft: 10
  },

  rodapeNome:{
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 10
  },

  rodapeDescricao:{
    fontSize: 15,
    paddingLeft: 10,
    paddingBottom: 15
  }
})