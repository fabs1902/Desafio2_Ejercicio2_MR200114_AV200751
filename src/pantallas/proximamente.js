import React, {useState, useCallback} from "react";
import {ScrollView,Text, Button, StyleSheet, View, Modal, TouchableHighlight} from "react-native";
import YoutubePlayer from 'react-native-youtube-iframe';
import {Video} from 'expo-av';

export default function Peliculas(){
    const video = React.useRef(null);
    const secondVideo = React.useRef(null);
    const [status, setStatus] = React.useState({});

    return(
        <ScrollView style={{backgroundColor:'#DCDCDC'}}>
            {/*------ */}
            <View style={styles.card}>
                    <Video
                        ref={video}
                        style={styles.video}
                        source={require("../videos/dwd.mp4")}
                        useNativeControls
                        resizeMode="contain"
                        isLooping
                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                        />
                    <Text style={styles.titulo}>Don't Worry Darling</Text>
                    <Text style={styles.titulo2}>Thriller</Text>
                    <Text style={styles.descripcion}>En la década de 1950, No te preocupes, cariño sigue la historia de una pareja joven conformada por Alice  y Jack que tienen la suerte de vivir en Victory, la ciudad experimental de una compañía que alberga a los hombres que trabajan para un proyecto secreto llamado Victory y a sus familias. Sus vidas son perfectas, con las necesidades de cada residente satisfechas por la empresa. Todo lo que ellos piden a cambio es un compromiso incondicional con la causa de Victory. Pero cuando comienzan a aparecer situaciones que perturban sus vidas perfectas, terminan exponiendo 
                    algo más siniestro que acecha debajo de la atractiva fachada, y  Alice no puede evitar cuestionar qué están haciendo en Victory y la razón.</Text>
                    <Text style={styles.fecha}>Fecha de estreno: 22 de octubre 2022</Text>
            </View>
            {/*------ */}
            <View style={styles.card}>
                        <Video
                        ref={video}
                        style={styles.video}
                        source={require("../videos/aai.mp4")}
                        useNativeControls
                        resizeMode="contain"
                        isLooping
                        onPlaybackStatusUpdate={setStatus}
                        />
                    <Text style={styles.titulo}>After: Amor infinito</Text>
                    <Text style={styles.titulo2}>Romance</Text>
                    <Text style={styles.descripcion}>La relación de Tessa Young (Josephine Langford) y Hardin Scott (Hero Fiennes-Tiffin) ha pasado por muchas dificultades que, por otro lado, han conseguido que su unión y su amor se fortalezcan. Cuando la verdad sobre sus familias ha salido a la luz, ambos han descubierto que no son tan diferentes como pensaban. Tessa ya no es esa chica dulce y buena que llegó a la universidad, y Hardin ya no es el chico cruel del que se enamoró. Ella es la única persona 
                    capaz de compender, entender y calmar a Hardin, pero el secreto que esconde es tan grande que provoca que él se aleje de absolutamente todo. Incluso de su alma gemela.</Text>
                    <Text style={styles.fecha}>Fecha de estreno: 26 de noviembre 2022</Text>
            </View>
            {/*------ */}
            <View style={styles.card}>
                        <Video
                        ref={video}
                        style={styles.video}
                        source={require("../videos/snwh.mp4")}
                        useNativeControls
                        resizeMode="contain"
                        isLooping
                        onPlaybackStatusUpdate={setStatus}
                        />
                    <Text style={styles.titulo}>Spiderman: No Way Home - Reestreno</Text>
                    <Text style={styles.titulo2}>Aventura/Acción</Text>
                    <Text style={styles.descripcion}>Por primera vez en la historia cinematográfica de Spider-Man, se revela la identidad de nuestro simpático héroe de barrio, lo que hace que sus responsabilidades de superhéroe entren en conflicto con su vida normal y pone en peligro a los que más le importan. Cuando reclama la ayuda del Doctor Strange para restaurar su secreto, el hechizo abre un agujero en su mundo, liberando a los villanos más poderosos que jamás hayan luchado contra un 
                    Spider-Man en cualquier universo. Ahora, Peter tendrá que superar su mayor desafío hasta la fecha, que no sólo alterará para siempre su propio futuro, sino el del Multiverso.</Text>
                    <Text style={styles.fecha}>Fecha de estreno: 23 de septiembre 2022</Text>
            </View>
            {/*------ */}
            <View style={styles.card}>
                        <Video
                        ref={video}
                        style={styles.video}
                        source={require("../videos/lcs.mp4")}
                        useNativeControls
                        resizeMode="contain"
                        isLooping
                        onPlaybackStatusUpdate={setStatus}
                        />
                    <Text style={styles.titulo}>La Chica Salvaje</Text>
                    <Text style={styles.titulo2}>Misterio</Text>
                    <Text style={styles.descripcion}>Kya Clark, también conocida como la niña de los pantanos por los habitantes de Barkley Cove, es una joven misteriosa y salvaje. Abandonada por su familia, la muchacha pasara la mayor parte de su vida en las marismas del sur de Estados Unidos en los años 50. 
                    Cuando un hombre importante de la ciudad es encontrado muerto e inexplicablemente vinculado a Kya, ésta se convierte en la principal sospechosa de este caso de asesinato.</Text>
                    <Text style={styles.fecha}>Fecha de estreno: 30 de octubre 2022</Text>
            </View>
            {/*------ */}
            <View style={styles.card}>
                        <Video
                        ref={video}
                        style={styles.video}
                        source={require("../videos/bt.mp4")}
                        useNativeControls
                        resizeMode="contain"
                        isLooping
                        onPlaybackStatusUpdate={setStatus}
                        />
                    <Text style={styles.titulo}>Bullet Train</Text>
                    <Text style={styles.titulo2}>Acción</Text>
                    <Text style={styles.descripcion}>Ladybug (Brad Pitt) es un asesino sin suerte, decidido a cumplir su trabajo tranquilamente después de que demasiadas misiones se hayan ido de madre en el pasado. En la recta final de su carrera, 
                    es reclutado por Maria Beetle (Sandra Bullock) para recoger una maleta en un tren bala que va de Tokio a Morioka. El destino, sin embargo, puede tener otros planes: esta última misión de Ladybug lo pone en el camino de varios asesinos letales de todo el mundo, todos con objetivos conectados pero en conflicto unos con otros. En el tren más rápido del mundo -uno de los trenes bala Shinkansen de Japón- este asesino tendrá que enfrentarse a los criminales más variopintos del planeta con sus propias misiones. Y mientras todo esto sucede debe averiguar cómo bajar. Un filme que mezcla los ingeniosos díalogos del cine de Quentin Tarantino o Guy Richie con la acción desmadrada de productos como Deadpool o Fast & Furious.</Text>
                    <Text style={styles.fecha}>Fecha de estreno: 05 de octubre 2022</Text>
            </View>
            {/*------ */}
            <View style={styles.card}>
                        <Video
                        ref={video}
                        style={styles.video}
                        source={require("../videos/avt.mp4")}
                        useNativeControls
                        resizeMode="contain"
                        isLooping
                        onPlaybackStatusUpdate={setStatus}
                        />
                    <Text style={styles.titulo}>Avatar - Reestreno</Text>
                    <Text style={styles.titulo2}>Ciencia Ficción</Text>
                    <Text style={styles.descripcion}>El futuro: Jake Sully es un antiguo marine que vive postrado en una silla de ruedas, pero cuya determinación y valentía se mantienen intactas. Ahora, tiene una misión entre manos: viajar a Pandora, un planeta del que los humanos extraen un mineral que puede acabar con la crisis 
                    energética de la Tierra. Sin embargo, este planeta posee una atmósfera extremadamente tóxica, por lo que se ha creado el programa Avatar, según el cual los humanos unen sus conciencias a un cuerpo biológico que, por control remoto, es capaz de sobrevivir al aire letal. Este cuerpo está compuesto tanto por ADN humano como por ADN de los Na'vis, las criaturas nativas de Pandora, entre las que Jake se tendrá que infiltrar empleando su nueva apariencia.</Text>
                    <Text style={styles.fecha}>Fecha de estreno: 30 de diciembre 2022</Text>
            </View>
         
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    titulo:{
        fontWeight:'bold',
        fontSize:18,
        marginLeft:12,
        marginTop:12,
        color:'#6C3483'
        
    },
    containerv:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    },
    button:{
        backgroundColor:'#DCDCDC',
        color:'white',
        fontWeight:'bold',
        height:50,
        
    },
    video:{
        flex:1,
        alignSelf:'stretch',
        height:200,
    },
    modal:{
       backgroundColor:'black',
       height:'100%', 
       flex:1,
    },
    descripcion:{
        marginLeft:12,
        marginRight:12,
        marginBottom:6,
        textAlign:'justify'
    },
    fecha:{
        marginLeft:12,
        marginRight:12,
        marginBottom:6,
        fontWeight:'bold',
        color:'#A569BD'
    },
    card:{
        backgroundColor:'white',
        marginBottom:8,
        paddingTop:10,
    },
    titulo2:{

        fontWeight:'bold',
        fontSize:15,
        marginLeft:12,
        color:'#A569BD',
        marginBottom:5
    },
});