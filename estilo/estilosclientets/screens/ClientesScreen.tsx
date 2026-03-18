import { Text, View } from "react-native";
import { estilos } from "../styles/estilos";
import Boton from "../components/Boton";

export default function ClientesSreen(){
return(
<View style={estilos.container}> 

<Text style={estilos.titulo}>Administrar clientes</Text>

<View style={estilos.containerbotones}>

<Boton titulo="Agregar cliente"></Boton>
<Boton titulo="Ver clientes"></Boton>
<Boton titulo="Editar clientes"></Boton>
<Boton titulo="Eliminar clientes"></Boton>

</View>



</View>





);



}