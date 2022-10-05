import React, {useState, useCallback} from "react";
import {ScrollView,Text, Button, StyleSheet, View, Modal, TouchableHighlight, Image} from "react-native";
import {Video} from 'expo-av';

export default function Peliculas(){
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const [modalVisibleC1, setModalVisibleC1] = useState(false);
    const [modalVisibleC2, setModalVisibleC2] = useState(false);
    const [modalVisibleC3, setModalVisibleC3] = useState(false);
    const [modalVisibleC4, setModalVisibleC4] = useState(false);
    const [modalVisibleC5, setModalVisibleC5] = useState(false);
    const [modalVisibleC6, setModalVisibleC6] = useState(false);
    const [modalVisibleC7, setModalVisibleC7] = useState(false);
    const [modalVisibleC8, setModalVisibleC8] = useState(false);
    const [modalVisibleC9, setModalVisibleC9] = useState(false);
    return(
        <ScrollView style={{backgroundColor:'#DCDCDC'}}>
            <View style={styles.card}>
                <Image source={require('../imagenes/seriesB.jpg')} style={styles.banner}></Image>
            </View>
            <View style={styles.cardT}>
                <Text style={styles.cardText}>Comedia</Text>
            </View>
            {/*----------*/}
            <View style={styles.card}>
                <TouchableHighlight  onPress={()=>{setModalVisibleC4(!modalVisibleC4)}}>
                    <View>
                        <Image source={require('../imagenes/s4.jpeg')} style={styles.img}></Image>
                    </View>
                </TouchableHighlight>
                <View>
                    <Text style={styles.titulo5}>Anne with an E</Text>
                    <Text style={styles.titulo2}>4 Temporadas</Text>
                </View>
            </View>
            <Modal transparent={true} animationType="slide" visible={modalVisibleC4} onRequestClose={() => {alert('Se ha cerrado el video.');}}>
                        <View style={styles.modal}>
                            <Video
                                ref={video}
                                style={styles.video}
                                source={require("../videos/awae.mp4")}
                                useNativeControls
                                resizeMode="contain"
                                isLooping
                                onPlaybackStatusUpdate={setStatus}
                            />
                            <View style={styles.button}>
                                <Button title="Cerrar" onPress={()=>{setModalVisibleC4(!modalVisibleC4)}} color='white'  style={styles.button}  />
                            </View>
                        </View>
            </Modal>
            {/*----------*/}
            <View style={styles.card}>
                <TouchableHighlight  onPress={()=>{setModalVisibleC5(!modalVisibleC5)}}>
                    <View>
                        <Image source={require('../imagenes/s5.jpg')} style={styles.img}></Image>
                    </View>
                </TouchableHighlight>
                <View>
                    <Text style={styles.titulo6}>Gilmore Girls</Text>
                    <Text style={styles.titulo2}>7 Temporadas</Text>
                </View>
            </View>
            <Modal transparent={true} animationType="slide" visible={modalVisibleC5} onRequestClose={() => {alert('Se ha cerrado el video.');}}>
                        <View style={styles.modal}>
                            <Video
                                ref={video}
                                style={styles.video}
                                source={require("../videos/gg.mp4")}
                                useNativeControls
                                resizeMode="contain"
                                isLooping
                                onPlaybackStatusUpdate={setStatus}
                            />
                            <View style={styles.button}>
                                <Button title="Cerrar" onPress={()=>{setModalVisibleC5(!modalVisibleC5)}} color='white' style={styles.button}   />
                            </View>
                        </View>
            </Modal>
            {/*----------*/}
            <View style={styles.card}>
                <TouchableHighlight  onPress={()=>{setModalVisibleC7(!modalVisibleC7)}}>
                    <View>
                        <Image source={require('../imagenes/bnn.jpg')} style={styles.img}></Image>
                    </View>
                </TouchableHighlight>
                <View>
                    <Text style={styles.titulo5}>Brooklyn 9-9</Text>
                    <Text style={styles.titulo2}>4 Temporadas</Text>
                </View>
            </View>
            <Modal transparent={true} animationType="slide" visible={modalVisibleC7} onRequestClose={() => {alert('Se ha cerrado el video.');}}>
                        <View style={styles.modal}>
                            <Video
                                ref={video}
                                style={styles.video}
                                source={require("../videos/bnn.mp4")}
                                useNativeControls
                                resizeMode="contain"
                                isLooping
                                onPlaybackStatusUpdate={setStatus}
                            />
                            <View style={styles.button}>
                                <Button title="Cerrar" onPress={()=>{setModalVisibleC7(!modalVisibleC7)}} color='white'  style={styles.button}  />
                            </View>
                        </View>
            </Modal>
            {/*-------- */}
            <View style={styles.cardT}>
                <Text style={styles.cardText}>Aventura</Text>
            </View>
            {/*----------*/}
            <View style={styles.card}>
                <TouchableHighlight  onPress={()=>{setModalVisibleC3(!modalVisibleC3)}}>
                    <View>
                        <Image source={require('../imagenes/s3.jpg')} style={styles.img}></Image>
                    </View>
                </TouchableHighlight>
                <View>
                    <Text style={styles.titulo4}>Riverdale</Text>
                    <Text style={styles.titulo2}>6 Temporadas</Text>
                </View>
            </View>
            <Modal transparent={true} animationType="slide" visible={modalVisibleC3} onRequestClose={() => {alert('Se ha cerrado el video.');}}>
                        <View style={styles.modal}>
                            <Video
                                ref={video}
                                style={styles.video}
                                source={require("../videos/rd.mp4")}
                                useNativeControls
                                resizeMode="contain"
                                isLooping
                                onPlaybackStatusUpdate={setStatus}
                            />
                            <View style={styles.button}>
                                <Button title="Cerrar" onPress={()=>{setModalVisibleC3(!modalVisibleC3)}} color='white'  style={styles.button}  />
                            </View>
                        </View>
            </Modal>
            {/*----------*/}
            <View style={styles.card}>
                <TouchableHighlight  onPress={()=>{setModalVisibleC6(!modalVisibleC6)}}>
                    <View>
                        <Image source={require('../imagenes/s6.jpg')} style={styles.img}></Image>
                    </View>
                </TouchableHighlight>
                <View>
                    <Text style={styles.titulo6}>Quick Sand</Text>
                    <Text style={styles.titulo2}>1 Temporada </Text>
                </View>
            </View>
            <Modal transparent={true} animationType="slide" visible={modalVisibleC6} onRequestClose={() => {alert('Se ha cerrado el video.');}}>
                        <View style={styles.modal}>
                            <Video
                                ref={video}
                                style={styles.video}
                                source={require("../videos/qs.mp4")}
                                useNativeControls
                                resizeMode="contain"
                                isLooping
                                onPlaybackStatusUpdate={setStatus}
                            />
                            <View style={styles.button}>
                                <Button title="Cerrar" onPress={()=>{setModalVisibleC6(!modalVisibleC6)}} color='white'  style={styles.button} />
                            </View>
                        </View>
            </Modal>
            {/*----------*/}
            <View style={styles.card}>
                <TouchableHighlight  onPress={()=>{setModalVisibleC8(!modalVisibleC8)}}>
                    <View>
                        <Image source={require('../imagenes/tf.jpg')} style={styles.img}></Image>
                    </View>
                </TouchableHighlight>
                <View>
                    <Text style={styles.titulo10}>The Flash</Text>
                    <Text style={styles.titulo2}>8 Temporadas</Text>
                </View>
            </View>
            <Modal transparent={true} animationType="slide" visible={modalVisibleC8} onRequestClose={() => {alert('Se ha cerrado el video.');}}>
                        <View style={styles.modal}>
                            <Video
                                ref={video}
                                style={styles.video}
                                source={require("../videos/tf.mp4")}
                                useNativeControls
                                resizeMode="contain"
                                isLooping
                                onPlaybackStatusUpdate={setStatus}
                            />
                            <View style={styles.button}>
                                <Button title="Cerrar" onPress={()=>{setModalVisibleC8(!modalVisibleC8)}} color='white'  style={styles.button}  />
                            </View>
                        </View>
            </Modal>
            {/*-------- */}
            <View style={styles.cardT}>
                <Text style={styles.cardText}>Fantasía</Text>
            </View>
            {/*--------- */}
            <View style={styles.card}>
                <TouchableHighlight onPress={()=>{setModalVisibleC1(!modalVisibleC1)}}>
                    <View>
                        <Image source={require('../imagenes/s1.jpg')} style={styles.img}></Image>
                    </View>
                </TouchableHighlight>
                <View>
                    <Text style={styles.titulo1}>Sabrina</Text>
                    <Text style={styles.titulo2}>5 Temporadas </Text>
                </View>
            </View>
            <Modal transparent={true} animationType="slide" visible={modalVisibleC1} onRequestClose={() => {alert('Se ha cerrado el video.');}}>
                        <View style={styles.modal}>
                            <Video
                                ref={video}
                                style={styles.video}
                                source={require("../videos/sbn.mp4")}
                                useNativeControls
                                resizeMode="contain"
                                isLooping
                                onPlaybackStatusUpdate={setStatus}
                            />
                            <View style={styles.button}>
                                <Button title="Cerrar" onPress={()=>{setModalVisibleC1(!modalVisibleC1)}} color='white' style={styles.button}   />
                            </View>
                        </View>
            </Modal>
            {/*----------*/}
            <View style={styles.card}>
                <TouchableHighlight  onPress={()=>{setModalVisibleC2(!modalVisibleC2)}}>
                    <View>
                        <Image source={require('../imagenes/s2.jpg')} style={styles.img}></Image>
                    </View>
                </TouchableHighlight>
                <View>
                    <Text style={styles.titulo3}>Dark</Text>
                    <Text style={styles.titulo2}>1 Temporada </Text>
                </View>
            </View>
            <Modal transparent={true} animationType="slide" visible={modalVisibleC2} onRequestClose={() => {alert('Se ha cerrado el video.');}}>
                        <View style={styles.modal}>
                            <Video
                                ref={video}
                                style={styles.video}
                                source={require("../videos/dk.mp4")}
                                useNativeControls
                                resizeMode="contain"
                                isLooping
                                onPlaybackStatusUpdate={setStatus}
                            />
                            <View style={styles.button}>
                                <Button title="Cerrar" onPress={()=>{setModalVisibleC2(!modalVisibleC2)}} color='white' style={styles.button}   />
                            </View>
                        </View>
            </Modal>
                        {/*-------- */}
            <View style={styles.card}>
                <TouchableHighlight  onPress={()=>{setModalVisibleC9(!modalVisibleC9)}}>
                    <View>
                        <Image source={require('../imagenes/st.jpg')} style={styles.img}></Image>
                    </View>
                </TouchableHighlight>
                <View>
                    <Text style={styles.titulo11}>Stranger Things</Text>
                    <Text style={styles.titulo2}>4 Temporadas</Text>
                </View>
            </View>
            <Modal transparent={true} animationType="slide" visible={modalVisibleC9} onRequestClose={() => {alert('Se ha cerrado el video.');}}>
                        <View style={styles.modal}>
                            <Video
                                ref={video}
                                style={styles.video}
                                source={require("../videos/st.mp4")}
                                useNativeControls
                                resizeMode="contain"
                                isLooping
                                onPlaybackStatusUpdate={setStatus}
                            />
                            <View style={styles.button}>
                                <Button title="Cerrar" onPress={()=>{setModalVisibleC9(!modalVisibleC9)}} color='white'  style={styles.button}  />
                            </View>
                        </View>
            </Modal>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    titulo:{
        fontWeight:'bold',
        fontSize:19,
        padding:8,
        marginTop:-3
    },
    banner:{
        height:200,
        width:'100%',
        
    },
    img:{
        width:150,
        height:250,
        marginRight:10,
        marginBottom:10,
        marginLeft:12
    },
    card:{
        backgroundColor:'white',
        marginBottom:8,
        paddingTop:10,
        flexDirection:'row'
    },
    titulo1:{
        fontWeight:'bold',
        fontSize:25,
        padding:8,
        marginTop:70,
        marginLeft:65,
        color:'#6C3483'
    },
    titulo2:{
        marginLeft:50,
        fontSize:20,
        color:'#A569BD'
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
    titulo3:{
        fontWeight:'bold',
        fontSize:25,
        padding:8,
        marginTop:70,
        marginLeft:80,
        color:'#6C3483'
    },
    titulo4:{
        fontWeight:'bold',
        fontSize:25,
        padding:8,
        marginTop:70,
        marginLeft:55,
        color:'#6C3483'
    },
    titulo5:{
        fontWeight:'bold',
        fontSize:25,
        padding:8,
        marginTop:70,
        marginLeft:20,
        color:'#6C3483'
    },
    titulo6:{
        fontWeight:'bold',
        fontSize:25,
        padding:8,
        marginTop:70,
        marginLeft:30,
        color:'#6C3483'
    },
    button:{
        padding:10
    }
    ,
    cardT:{
        backgroundColor:'white',
        marginBottom:8,
        paddingTop:10,

    },
    cardText:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft:12,
        marginBottom:8,
        color:'#4A235A'
    },
    titulo10:{
        fontWeight:'bold',
        fontSize:25,
        padding:8,
        marginTop:70,
        marginLeft:45,
        color:'#6C3483'
    },
    titulo11:{
        fontWeight:'bold',
        fontSize:25,
        padding:8,
        marginTop:70,
        marginLeft:10,
        color:'#6C3483'
    },
     
});