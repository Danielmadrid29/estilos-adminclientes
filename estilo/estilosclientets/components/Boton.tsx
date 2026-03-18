import { Text, TouchableOpacity } from "react-native";
import { estilos } from "../styles/estilos";

type Props ={
titulo: string;

};

export default function Boton({titulo}: Props){
return(
<TouchableOpacity style={estilos.boton}>

<Text style={estilos.textoboton}>{titulo}</Text>


</TouchableOpacity>




);



}