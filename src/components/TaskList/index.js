import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';


export default function TaskList( {data} ){
   
   
    return(
        <Animatable.View 
        style={styles.container1}
        animation="bounceIn"
        useNativeDriver
        >

            <TouchableOpacity>
             <AntDesign name="pluscircleo" size={24} color="black" />
            </TouchableOpacity>

            <View>
             <Text style={styles.task} >{data.task}</Text>
            </View>

            <TouchableOpacity>
             <AntDesign name="pluscircleo" size={24} color="black" />
            </TouchableOpacity>

        </Animatable.View>



    )


    }
const styles = StyleSheet.create({
    container1:{
        flex: 1,
        margin: 8,
        flexDirection: 'row',
        backgroundColor: '#FFF',
        borderRadius: 5,
        padding: 7,
        elevation: 1.5,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset:{
            width: 1,
            hieght: 3,
        }



    },
    task:{
        color:'#121212',
        fontSize: 20,
        paddingLeft: 8,
        paddingRight: 20,



    }

});