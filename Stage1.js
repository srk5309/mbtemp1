import React from 'react'
import { View, Text, TouchableOpacity,StyleSheet,Dimensions,ImageBackground,Image } from 'react-native'

import stage1bg1 from '../assets/stage1bg1.png'


var {height} = Dimensions.get('window')
var {width} = Dimensions.get('window')

const Stage1 = ({navigation})=> {
    return (
        <View style={styles.stag1container}>
            <View style={styles.headercontainer}>
                <TouchableOpacity>
                    <Text></Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomcontainer}>
                <View style={styles.imgcontainer}>
                    <ImageBackground source={stage1bg1} style={styles.bgimg}>
                        <Text style={styles.txt1}>SAFE & SECURE</Text>
                        <Text style={styles.txt2}>PAYMENTS</Text>
                    </ImageBackground>
                </View>
                <View style={styles.btncontainer}>
                    <View>
                        <TouchableOpacity>
                            <Text style={styles.skiptxt}>Skip</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.nexttxtcontainer}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Stage2')}>
                            <Text style={styles.nexttxt}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Stage1



const styles = StyleSheet.create({
    stag1container:{
        flex:1,
        // backgroundColor:"yellow",
        // justifyContent:'center',
        // alignItems:'center'
    },

    headercontainer:{
        flex:0.05,
        justifyContent:'center'
    },
    bottomcontainer:{
        flex:0.95,
        // backgroundColor:'pink'
    },
    imgcontainer:{
        flex:0.90,
        // backgroundColor:'lightblue',
        justifyContent:'center',
        alignItems:'center'
    },

    bgimg:{
        width:width/1.1,
        height:height/1.5,
        justifyContent:'center',
        alignItems:'flex-end'
    },
    txt1:{
        fontWeight:'bold',
        fontSize:30,
        color:'#297E8E',
    },
    txt2:{
        fontWeight:'bold',
        fontSize:18,
        color:'#297E8E',
        alignSelf:'flex-end',
        width:width/2.40,
        // backgroundColor:'yellow'
    },
    btncontainer:{
        flex:0.05,
        // backgroundColor:'green',
        justifyContent:'space-between',
        flexDirection:'row',
        marginHorizontal:20,
        // marginTop:10,
        alignItems:'center'
    },

    skiptxt:{
        // fontWeight:'bold',
        fontSize:16,
        color:'#297E8E',
    },
    nexttxt:{
        fontWeight:'bold',
        fontSize:16,
        color:'#297E8E',
        // borderColor:'#297E8E',
        // borderWidth:2,
        paddingHorizontal:10,
        // paddingVertical:10,
        // alignSelf:'center'
    },
    nexttxtcontainer:{
        // backgroundColor:"yellow",
        marginTop:2,
        justifyContent:'center',
        borderRadius:5,
        borderColor:'green',
        borderWidth:2
    }
    
})

















