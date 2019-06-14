import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight, TextInput,ImageBackground   } from "react-native";
import Header from "./Header";

const axios = require('axios');
class tambahluar extends Component {   
    static navigationOptions = {
        header: null
    } 
    constructor(props) {
        super(props);
        this.state = {
          
            kode_barang: '',
            nama_barang: '',
            jenis_barangid: 1,
            asal_barang: '',
            ket:'',
            image: ''
            
        };
    }
   
    render() {
        handleSubmit = event => {
            axios.post('http://inventariuniversal.000webhostapp.com/API/tambahbarang.php', {
                kode_barang: this.state.kode_barang,
                nama_barang: this.state.nama_barang,
                jenis_barangid: this.state.jenis_barangid,
                asal_barang: this.state.asal_barang,
                ket: this.state.ket,
                image: this.state.image,
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              }); 
    }
        return (
            <ImageBackground source={require("./img/bc.png")} style={{width: '100%', height:'100%'}} >
            <View style={styles.container}>
              <Header title={"Tambah Barang Luar Negeri"}/>
             
              <View style={styles.box1}>
              <Text style={styles.text1}>Kode Barang</Text>
                <TextInput
                  style={styles.Input}
                  onChangeText={kode_barang => this.setState({ kode_barang })}
                />
              </View>
              <View style={styles.box1}>
              <Text style={styles.text1}>Nama Barang</Text>
                <TextInput
                  style={styles.Input}
                  onChangeText={nama_barang => this.setState({ nama_barang })}
                />
              </View>
             
              <View style={styles.box1}>
              <Text style={styles.text1}>Asal Barang</Text>
                <TextInput
                  style={styles.Input}
                  onChangeText={asal_barang => this.setState({ asal_barang })}
                />
              </View>
              <View style={styles.box1}>
              <Text style={styles.text1}>Keterangan</Text>
                <TextInput
                  style={styles.Input}
                  onChangeText={ket => this.setState({ ket })}
                />
              </View>
              <View style={styles.box1}>
              <Text style={styles.text1}>Image</Text>
                <TextInput
                  style={styles.Input}
                  onChangeText={image => this.setState({ image })}
                />
              </View>
              <View style={styles.box2}>
                <TouchableHighlight
                  activeOpacity={0.5}
                  style={styles.buttons}
                  onPress={() =>     
                    handleSubmit()
                  }
      >
                  <Text style={styles.Text2}>Tambah</Text>
                </TouchableHighlight>
              </View>
              <View style={styles.box1}>
              <Text style={styles.text1}>Kode Barang : {this.state.kode_barang}</Text>
              </View>
              <View style={styles.box1}>
              <Text style={styles.text1}>Nama Barang : {this.state.nama_barang}</Text>   
              </View>
              <View style={styles.box1}>
              <Text style={styles.text1}>Jenis Barang : {this.state.jenis_barangid}</Text>
              </View>
              <View style={styles.box1}>
              <Text style={styles.text1}>Asal Barang : {this.state.asal_barang}</Text>   
              </View>
              <View style={styles.box1}>
              <Text style={styles.text1}>Keterangan : {this.state.ket}</Text>
              </View>
              <View style={styles.box1}>
              <Text style={styles.text1}>Image : {this.state.image}</Text>
              </View>
             
                       
            </View>            
          
            </ImageBackground> 
        );
    }
}
const styles = StyleSheet.create({
    container: {
       // flex: 1,        
        
        flexDirection: "column",
        alignItems: "center"
    },
    Text2: {
        textAlign: "center",
        height: 40,
        width: "100%",
        marginTop: 10,
        color: "white",
        fontSize: 20

    },
    text1: {
      fontSize: 16,
      textAlign: "left",
      justifyContent: 'flex-start',
      paddingTop: 12,
      fontWeight: 'bold',
      color: "white",

    },
    buttons: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#445660",
        marginTop: 20,
        marginBottom: 20,
        height: 40,
        width: "100%",
        borderRadius: 5,
        borderWidth: 3,
        borderColor: "#b80000",
    },
    box1: {
        //flex: 0.1,
        width: "90%",
        paddingTop: 0,
        marginTop: 10,
        marginLeft: 2,
        justifyContent: "space-between",
        flexDirection: "row"
       
    },
    box2: {
      // flex: 0.1,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center"
        
    },
    Input: {
        width: 170,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#445660",
        borderRadius: 5,
        textAlign: "center"
    },    
});
export default tambahluar;