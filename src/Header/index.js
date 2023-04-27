import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        {/* Colocando a logo... */}
        <Image style={styles.logo} source={require("../img/logo.png")} />
      </TouchableOpacity>

      {/* Colocando a imagem do direct... */}
      <TouchableOpacity>
        {/* Colocando o logo */}
        <Image style={styles.send} source={require("../img/send.png")} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  header:{
    height: 55,  // Ocupa a largura inteira da tela.
    backgroundColor: '#FFFFFF',
    justifyContent: "space-between",
    alignItems: "center",  // ALinhando VERTICALMENTE.
    flexDirection: "row",  // Deixa um item/elemento do lado do outro.
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 0.2,  // Coloca uma borda embaixo.
    shadowColor: '#000000',
    elevation: 3
  },

  send:{
    width: 23,
    height: 23
  }
})