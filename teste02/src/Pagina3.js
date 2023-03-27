import React from 'react'
import {Text} from 'react-native'
import estilo from './estilo'

function Comp1 () {
    return <Text style={estilo.FontMinima}>What is the price for your blind eye?</Text>
}
function Comp2 () {
    return <Text style={estilo.FontMinima}>L.D.D.M. ?0?3</Text>
}
export {Comp1, Comp2}