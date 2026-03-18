import { StyleSheet } from "react-native";
import { colores } from "./colores";


export const estilos = StyleSheet.create({

container: {
flex: 1,
backgroundColor: colores.fondo,
padding: 20,


},

titulo: {
fontSize: 24,
fontWeight: "bold",
color: colores.texto,
marginBottom: 20,
textAlign: "center",


},

containerbotones: {
marginTop: 10,

},

boton: {
backgroundColor: colores.primario,
padding: 15,
borderRadius: 25,
marginBottom: 12,
alignItems: "center",

},


textoboton: {
color: colores.blanco,
fontSize: 16,
fontWeight: "600",


},


});