import React from 'react'
import { StyleSheet, View} from 'react-native'

import Pagina1 from './src/Pagina1'
import Pagina2 from './src/Pagina2'
import {Comp1, Comp2} from './src/Pagina3'
import Imagem from './src/Imagem'


export default () => (
  <View style={style.Pagina1}>
    <Imagem></Imagem>
    <Pagina1></Pagina1>
    <Pagina2></Pagina2>
    <Comp1></Comp1>
    <Comp2></Comp2>
  </View>
)

const style = StyleSheet.create({
  Pagina1: {
    backgroundColor: '#000',
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})