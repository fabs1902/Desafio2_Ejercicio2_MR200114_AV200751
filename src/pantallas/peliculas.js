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

    const [modalVisibleR1, setModalVisibleR1] = useState(false);
    const [modalVisibleR2, setModalVisibleR2] = useState(false);
    const [modalVisibleR3, setModalVisibleR3] = useState(false);
    const [modalVisibleR4, setModalVisibleR4] = useState(false);
    const [modalVisibleR5, setModalVisibleR5] = useState(false);
    const [modalVisibleR6, setModalVisibleR6] = useState(false);

    const [modalVisibleA1, setModalVisibleA1] = useState(false);
    const [modalVisibleA2, setModalVisibleA2] = useState(false);
    const [modalVisibleA3, setModalVisibleA3] = useState(false);
    const [modalVisibleA4, setModalVisibleA4] = useState(false);
    const [modalVisibleA5, setModalVisibleA5] = useState(false);
    const [modalVisibleA6, setModalVisibleA6] = useState(false);

    return(
        <ScrollView style={{backgroundColor:'#DCDCDC'}}>
            <View style={styles.card}>
                <Image source={require('../imagenes/comedyB.jpg')} style={styles.banner}></Image>
            </View>
            <View style={styles.card}>
                <Text style={styles.titulo}>Comedia</Text>
                <ScrollView horizontal>
                {/*--------*/}
                    <View>
                        <TouchableHighlight onPress={()=>{setModalVisibleC1(!modalVisibleC1)}}>
                            <Image source={require('../imagenes/c1.jpg')} style={styles.img}></Image>
                        </TouchableHighlight>
                    </View>
                    <Modal transparent={true} animationType="slide" visible={modalVisibleC1} onRequestClose={() => {alert('Se ha cerrado el video.');}}>
                        <View style={styles.modal}>
                            <Video
                                ref={video}
                                style={styles.video}
                                source={require("../videos/ilybc.mp4")}
                                useNativeControls
                                resizeMode="contain"
                                isLooping
                                onPlaybackStatusUpdate={setStatus}
                            />
                            <View style={styles.button}>
                                {/* <Button title={status.isPlaying ? 'Pause': 'Play'} onPress={()=>status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()} style={styles.button} /> */}
                                <Button title="Cerrar" onPress={()=>{setModalVisibleC1(!modalVisibleC1)}} color='white'  style={styles.button}  />
                            </View>
                        </View>
                    </Modal>
                    {/*----------*/}
                    <View>
                        <TouchableHighlight onPress={()=>{setModalVisibleC2(!modalVisibleC2)}}>
                            <Image source={require('../imagenes/c2.jpg')} style={styles.img}></Image>
                        </TouchableHighlight>
                    </View>
                    <Modal transparent={true} animationType="slide" visible={modalVisibleC2} onRequestClose={() => {alert('Se ha cerrado el video.');}}>
                        <View style={styles.modal}>
                            <Video
                                ref={video}
                                style={styles.video}
                                source={require("../videos/ews.mp4")}
                                useNativeControls
                                resizeMode="contain"
                                isLooping
                                onPlaybackStatusUpdate={setStatus}
                            />
                            <View style={styles.button}>
                                {/* <Button title={status.isPlaying ? 'Pause': 'Play'} onPress={()=>status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()} style={styles.button} /> */}
                                <Button title="Cerrar" onPress={()=>{setModalVisibleC2(!modalVisibleC2)}} color='white'  style={styles.button}  />
                            </View>
                        </View>
                    </Modal>
                    {/*----------*/}
                    <View>
                        <TouchableHighlight onPress={()=>{setModalVisibleC3(!modalVisibleC3)}}>
                            <Image source={require('../imagenes/c3.jpg')} style={styles.img}></Image>
                        </TouchableHighlight>
                    </View>
                    <Modal transparent={true} animationType="slide" visible={modalVisibleC3} onRequestClose={() => {alert('Se ha cerrado el video.');}}>
                        <View style={styles.modal}>
                            <Video
                                ref={video}
                                style={styles.video}
                                source={require("../videos/mm.mp4")}
                                useNativeControls
                                resizeMode="contain"
                                isLooping
                                onPlaybackStatusUpdate={setStatus}
                            />
                            <View style={styles.button}>
                                {/* <Button title={status.isPlaying ? 'Pause': 'Play'} onPress={()=>status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()} style={styles.button} /> */}
                                <Button title="Cerrar" onPress={()=>{setModalVisibleC3(!modalVisibleC3)}} color='white'  style={styles.button}  />
                            </View>
                        </View>
                    </Modal>
                    {/*----------*/}
                    <View>
                        <TouchableHighlight onPress={()=>{setModalVisibleC4(!modalVisibleC4)}}>
                            <Image source={require('../imagenes/c4.png')} style={styles.img}></Image>
                        </TouchableHighlight>
                    </View>
                    <Modal transparent={true} animationType="slide" visible={modalVisibleC4} onRequestClose={() => {alert('Se ha cerrado el video.');}}>
                        <View style={styles.modal}>
                            <Video
                                ref={video}
                                style={styles.video}
                                source={require("../videos/fdc.mp4")}
                                useNativeControls
                                resizeMode="contain"
                                isLooping
                                onPlaybackStatusUpdate={setStatus}
                            />
                            <View style={styles.button}>
                                {/* <Button title={status.isPlaying ? 'Pause': 'Play'} onPress={()=>status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()} style={styles.button} /> */}
                                <Button title="Cerrar" onPress={()=>{setModalVisibleC4(!modalVisibleC4)}} color='white'   style={styles.button} />
                            </View>
                        </View>
                    </Modal>
                    {/*----------*/}
                    <View>
                        <TouchableHighlight onPress={()=>{setModalVisibleC5(!modalVisibleC5)}}>
                            <Image source={require('../imagenes/c5.jpg')} style={styles.img}></Image>
                        </TouchableHighlight>
                    </View>
                    <Modal transparent={true} animationType="slide" visible={modalVisibleC5} onRequestClose={() => {alert('Se ha cerrado el video.');}}>
                        <View style={styles.modal}>
                            <Video
                                ref={video}
                                style={styles.video}
                                source={require("../videos/tw.mp4")}
                                useNativeControls
                                resizeMode="contain"
                                isLooping
                                onPlaybackStatusUpdate={setStatus}
                            />
                            <View style={styles.button}>
                                {/* <Button title={status.isPlaying ? 'Pause': 'Play'} onPress={()=>status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()} style={styles.button} /> */}
                                <Button title="Cerrar" onPress={()=>{setModalVisibleC5(!modalVisibleC5)}} color='white'  style={styles.button}  />
                            </View>
                        </View>
                    </Modal>
                    {/*----------*/}
                    <View>
                        <TouchableHighlight onPress={()=>{setModalVisibleC6(!modalVisibleC6)}}>
                            <Image source={require('../imagenes/c6.jpg')} style={styles.img}></Image>
                        </TouchableHighlight>
                    </View>
                    <Modal transparent={true} animationType="slide" visible={modalVisibleC6} onRequestClose={() => {alert('Se ha cerrado el video.');}}>
                        <View style={styles.modal}>
                            <Video
                                ref={video}
                                style={styles.video}
                                source={require("../videos/dm.mp4")}
                                useNativeControls
                                resizeMode="contain"
                                isLooping
                                onPlaybackStatusUpdate={setStatus}
                            />
                            <View style={styles.button}>
                                {/* <Button title={status.isPlaying ? 'Pause': 'Play'} onPress={()=>status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()} style={styles.button} /> */}
                                <Button title="Cerrar" onPress={()=>{setModalVisibleC6(!modalVisibleC6)}} color='white'  style={styles.button}  />
                            </View>
                        </View>
                    </Modal>
                    {/*----------*/}
                </ScrollView>
            </View>
            {/*----- */}
            <View style={styles.card}>
                <Text style={styles.titulo}>Romance</Text>
                <ScrollView horizontal>
                    <View>
                        <TouchableHighlight onPress={()=>{setModalVisibleR1(!modalVisibleR1)}}>
                            <Image source={require('../imagenes/r1.jpg')} style={styles.img}></Image>
                        </TouchableHighlight>
                    </View>
                    <Modal transparent={true} animationType="slide" visible={modalVisibleR1} onRequestClose={() => {alert('Se ha cerrado el video.');}}>
                        <View style={styles.modal}>
                            <Video
                                ref={video}
                                style={styles.video}
                                source={require("../videos/tfios.mp4")}
                                useNativeControls
                                resizeMode="contain"
                                isLooping
                                onPlaybackStatusUpdate={setStatus}
                            />
                            <View style={styles.button}>
                                {/* <Button title={status.isPlaying ? 'Pause': 'Play'} onPress={()=>status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()} style={styles.button} /> */}
                                <Button title="Cerrar" onPress={()=>{setModalVisibleR1(!modalVisibleR1)}} color='white'  style={styles.button}  />
                            </View>
                        </View>
                    </Modal>
                    {/*----------*/}
                    <View>
                        <TouchableHighlight onPress={()=>{setModalVisibleR2(!modalVisibleR2)}}>
                            <Image source={require('../imagenes/r2.jpg')} style={styles.img}></Image>
                        </TouchableHighlight>
                    </View>
                    <Modal transparent={true} animationType="slide" visible={modalVisibleR2} onRequestClose={() => {alert('Se ha cerrado el video.');}}>
                        <View style={styles.modal}>
                            <Video
                                ref={video}
                                style={styles.video}
                                source={require("../videos/cd.mp4")}
                                useNativeControls
                                resizeMode="contain"
                                isLooping
                                onPlaybackStatusUpdate={setStatus}
                            />
                            <View style={styles.button}>
                                {/* <Button title={status.isPlaying ? 'Pause': 'Play'} onPress={()=>status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()} style={styles.button} /> */}
                                <Button title="Cerrar" onPress={()=>{setModalVisibleR2(!modalVisibleR2)}} color='white'   style={styles.button} />
                            </View>
                        </View>
                    </Modal>
                    {/*----------*/}
                    <View>
                        <TouchableHighlight onPress={()=>{setModalVisibleR3(!modalVisibleR3)}}>
                            <Image source={require('../imagenes/r3.jpg')} style={styles.img}></Image>
                        </TouchableHighlight>
                    </View>
                    <Modal transparent={true} animationType="slide" visible={modalVisibleR3} onRequestClose={() => {alert('Se ha cerrado el video.');}}>
                        <View style={styles.modal}>
                            <Video
                                ref={video}
                                style={styles.video}
                                source={require("../videos/lll.mp4")}
                                useNativeControls
                                resizeMode="contain"
                                isLooping
                                onPlaybackStatusUpdate={setStatus}
                            />
                            <View style={styles.button}>
                                {/* <Button title={status.isPlaying ? 'Pause': 'Play'} onPress={()=>status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()} style={styles.button} /> */}
                                <Button title="Cerrar" onPress={()=>{setModalVisibleR3(!modalVisibleR3)}} color='white'  style={styles.button}  />
                            </View>
                        </View>
                    </Modal>
                    {/*----------*/}
                    <View>
                        <TouchableHighlight onPress={()=>{setModalVisibleR4(!modalVisibleR4)}}>
                            <Image source={require('../imagenes/r4.jpg')} style={styles.img}></Image>
                        </TouchableHighlight>
                    </View>
                    <Modal transparent={true} animationType="slide" visible={modalVisibleR4} onRequestClose={() => {alert('Se ha cerrado el video.');}}>
                        <View style={styles.modal}>
                            <Video
                                ref={video}
                                style={styles.video}
                                source={require("../videos/so.mp4")}
                                useNativeControls
                                resizeMode="contain"
                                isLooping
                                onPlaybackStatusUpdate={setStatus}
                            />
                            <View style={styles.button}>
                                {/* <Button title={status.isPlaying ? 'Pause': 'Play'} onPress={()=>status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()} style={styles.button} /> */}
                                <Button title="Cerrar" onPress={()=>{setModalVisibleR4(!modalVisibleR4)}} color='white'  style={styles.button}  />
                            </View>
                        </View>
                    </Modal>
                    {/*----------*/}
                    <View>
                        <TouchableHighlight onPress={()=>{setModalVisibleR5(!modalVisibleR5)}}>
                            <Image source={require('../imagenes/r5.jpg')} style={styles.img}></Image>
                        </TouchableHighlight>
                    </View>
                    <Modal transparent={true} animationType="slide" visible={modalVisibleR5} onRequestClose={() => {alert('Se ha cerrado el video.');}}>
                        <View style={styles.modal}>
                            <Video
                                ref={video}
                                style={styles.video}
                                source={require("../videos/mmm.mp4")}
                                useNativeControls
                                resizeMode="contain"
                                isLooping
                                onPlaybackStatusUpdate={setStatus}
                            />
                            <View style={styles.button}>
                                {/* <Button title={status.isPlaying ? 'Pause': 'Play'} onPress={()=>status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()} style={styles.button} /> */}
                                <Button title="Cerrar" onPress={()=>{setModalVisibleR5(!modalVisibleR5)}} color='white'  style={styles.button}  />
                            </View>
                            <Modal transparent={true} animationType="slide" visible={modalVisibleR5} onRequestClose={() => {alert('Se ha cerrado el video.');}}>
                        <View style={styles.modal}>
                            <Video
                                ref={video}
                                style={styles.video}
                                source={require("../videos/mmm.mp4")}
                                useNativeControls
                                resizeMode="contain"
                                isLooping
                                onPlaybackStatusUpdate={setStatus}
                            />
                            <View style={styles.button}>
                                {/* <Button title={status.isPlaying ? 'Pause': 'Play'} onPress={()=>status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()} style={styles.button} /> */}
                                <Button title="Cerrar" onPress={()=>{setModalVisibleR5(!modalVisibleR5)}} color='white'  style={styles.button}  />
                            </View>
                        </View>
                    </Modal>
                    {/*----------*/}
                        </View>
                    </Modal>
                    {/*----------*/}
                    <View>
                        <TouchableHighlight onPress={()=>{setModalVisibleR6(!modalVisibleR6)}}>
                            <Image source={require('../imagenes/r6.jpg')} style={styles.img}></Image>
                        </TouchableHighlight>
                    </View>
                    <Modal transparent={true} animationType="slide" visible={modalVisibleR6} onRequestClose={() => {alert('Se ha cerrado el video.');}}>
                        <View style={styles.modal}>
                            <Video
                                ref={video}
                                style={styles.video}
                                source={require("../videos/at.mp4")}
                                useNativeControls
                                resizeMode="contain"
                                isLooping
                                onPlaybackStatusUpdate={setStatus}
                            />
                            <View style={styles.button}>
                                {/* <Button title={status.isPlaying ? 'Pause': 'Play'} onPress={()=>status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()} style={styles.button} /> */}
                                <Button title="Cerrar" onPress={()=>{setModalVisibleR6(!modalVisibleR6)}} color='white'  style={styles.button}  />
                            </View>
                        </View>
                    </Modal>
                </ScrollView>
            </View>
            {/*----- */}
            <View style={styles.card}>
                <Text style={styles.titulo}>Acción</Text>
                <ScrollView horizontal>
                    <View>
                        <TouchableHighlight onPress={()=>{setModalVisibleA1(!modalVisibleA1)}}>
                            <Image source={require('../imagenes/a1.jpg')} style={styles.img}></Image>
                        </TouchableHighlight>
                    </View>
                    <Modal transparent={true} animationType="slide" visible={modalVisibleA1} onRequestClose={() => {alert('Se ha cerrado el video.');}}>
                        <View style={styles.modal}>
                            <Video
                                ref={video}
                                style={styles.video}
                                source={require("../videos/sn.mp4")}
                                useNativeControls
                                resizeMode="contain"
                                isLooping
                                onPlaybackStatusUpdate={setStatus}
                            />
                            <View style={styles.button}>
                                {/* <Button title={status.isPlaying ? 'Pause': 'Play'} onPress={()=>status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()} style={styles.button} /> */}
                                <Button title="Cerrar" onPress={()=>{setModalVisibleA1(!modalVisibleA1)}} color='white'  style={styles.button}  />
                            </View>
                        </View>
                    </Modal>
                    {/*----- */}
                    <View>
                        <TouchableHighlight onPress={()=>{setModalVisibleA2(!modalVisibleA2)}}>
                            <Image source={require('../imagenes/a2.jpg')} style={styles.img}></Image>
                        </TouchableHighlight>
                    </View>
                    <Modal transparent={true} animationType="slide" visible={modalVisibleA2} onRequestClose={() => {alert('Se ha cerrado el video.');}}>
                        <View style={styles.modal}>
                            <Video
                                ref={video}
                                style={styles.video}
                                source={require("../videos/bi.mp4")}
                                useNativeControls
                                resizeMode="contain"
                                isLooping
                                onPlaybackStatusUpdate={setStatus}
                            />
                            <View style={styles.button}>
                                {/* <Button title={status.isPlaying ? 'Pause': 'Play'} onPress={()=>status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()} style={styles.button} /> */}
                                <Button title="Cerrar" onPress={()=>{setModalVisibleA2(!modalVisibleA2)}} color='white'  style={styles.button}  />
                            </View>
                        </View>
                    </Modal>
                    {/*----- */}
                    <View>
                        <TouchableHighlight onPress={()=>{setModalVisibleA3(!modalVisibleA3)}}>
                            <Image source={require('../imagenes/a3.jpg')} style={styles.img}></Image>
                        </TouchableHighlight>
                    </View>
                    <Modal transparent={true} animationType="slide" visible={modalVisibleA3} onRequestClose={() => {alert('Se ha cerrado el video.');}}>
                        <View style={styles.modal}>
                            <Video
                                ref={video}
                                style={styles.video}
                                source={require("../videos/od.mp4")}
                                useNativeControls
                                resizeMode="contain"
                                isLooping
                                onPlaybackStatusUpdate={setStatus}
                            />
                            <View style={styles.button}>
                                {/* <Button title={status.isPlaying ? 'Pause': 'Play'} onPress={()=>status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()} style={styles.button} /> */}
                                <Button title="Cerrar" onPress={()=>{setModalVisibleA3(!modalVisibleA3)}} color='white'  style={styles.button}  />
                            </View>
                        </View>
                    </Modal>
                    {/*----- */}
                    <View>
                        <TouchableHighlight onPress={()=>{setModalVisibleA4(!modalVisibleA4)}}>
                            <Image source={require('../imagenes/a4.jpg')} style={styles.img}></Image>
                        </TouchableHighlight>
                    </View>
                    <Modal transparent={true} animationType="slide" visible={modalVisibleA4} onRequestClose={() => {alert('Se ha cerrado el video.');}}>
                        <View style={styles.modal}>
                            <Video
                                ref={video}
                                style={styles.video}
                                source={require("../videos/tr.mp4")}
                                useNativeControls
                                resizeMode="contain"
                                isLooping
                                onPlaybackStatusUpdate={setStatus}
                            />
                            <View style={styles.button}>
                                {/* <Button title={status.isPlaying ? 'Pause': 'Play'} onPress={()=>status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()} style={styles.button} /> */}
                                <Button title="Cerrar" onPress={()=>{setModalVisibleA4(!modalVisibleA4)}} color='white'   style={styles.button} />
                            </View>
                        </View>
                    </Modal>
                    {/*----- */}
                    <View>
                        <TouchableHighlight onPress={()=>{setModalVisibleA5(!modalVisibleA5)}}>
                            <Image source={require('../imagenes/a5.jpg')} style={styles.img}></Image>
                        </TouchableHighlight>
                    </View>
                    <Modal transparent={true} animationType="slide" visible={modalVisibleA5} onRequestClose={() => {alert('Se ha cerrado el video.');}}>
                        <View style={styles.modal}>
                            <Video
                                ref={video}
                                style={styles.video}
                                source={require("../videos/ap.mp4")}
                                useNativeControls
                                resizeMode="contain"
                                isLooping
                                onPlaybackStatusUpdate={setStatus}
                            />
                            <View style={styles.button}>
                                {/* <Button title={status.isPlaying ? 'Pause': 'Play'} onPress={()=>status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()} style={styles.button} /> */}
                                <Button title="Cerrar" onPress={()=>{setModalVisibleA5(!modalVisibleA6)}} color='white'   style={styles.button} />
                            </View>
                            </View>
                    </Modal>
                    {/*----- */}
                            <Modal transparent={true} animationType="slide" visible={modalVisibleA6} onRequestClose={() => {alert('Se ha cerrado el video.');}}>
                            <View style={styles.modal}>
                            <Video
                                ref={video}
                                style={styles.video}
                                source={require("../videos/tlc.mp4")}
                                useNativeControls
                                resizeMode="contain"
                                isLooping
                                onPlaybackStatusUpdate={setStatus}
                            />
                            <View style={styles.button}>
                                {/* <Button title={status.isPlaying ? 'Pause': 'Play'} onPress={()=>status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()} style={styles.button} /> */}
                                <Button title="Cerrar" onPress={()=>{setModalVisibleA6(!modalVisibleA6)}} color='white'   style={styles.button} />
                            </View>
                        </View>
                    </Modal>
                    {/*----- */}
        
                    <View>
                        <TouchableHighlight onPress={()=>{setModalVisibleA6(!modalVisibleA6)}}>
                            <Image source={require('../imagenes/a6.jpg')} style={styles.img}></Image>
                        </TouchableHighlight>
                    </View>
                </ScrollView>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    titulo:{
        fontWeight:'bold',
        fontSize:19,
        padding:8,
        marginTop:-3,
        color:'#4A235A'
    },
    banner:{
        height:200,
        width:'100%',
        
    },
    img:{
        width:250,
        height:400,
        marginRight:10,
        marginBottom:10
    },
    card:{
        backgroundColor:'white',
        marginBottom:8,
        paddingTop:10,
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
    button:{
        padding:10
    }
});