import React from 'react';
import { Text ,View,FlatList } from 'react-native';
//import { ListItem } from 'react-native-elements';


const axios = require('axios');
export default class List extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          data: [],kode_barang:this.props.navigation.state.params.kode_barang,
          nama_barang:this.props.navigation.state.params.nama_barang,
          nama_barang:this.props.navigation.state.params.nama_barang,
        };
    }
    componentDidMount(){
    axios.get('http://inventariuniversal.000webhostapp.com/API/getbarang.php?jenis_barangid='+ this.state.id_kategori)
    .then((response)=>{
      console.log(response.data);
      this.setState({ data:response.data });
    })
    .catch(function (error) {
     console.log(error);
  });

}
    render() {
        return (
            <View>
           <Header title={this.state.nama_barang}/>
           <Text style={styles.text1}>Kode Barang : {this.state.kode_barang}</Text>
           <Text style={styles.text1}>Jenis Barang : {this.state.jenis_barangid}</Text>
           <Text style={styles.text1}>Asal Barang : {this.state.asal_barang}</Text>
           <Text style={styles.text1}>Keterangan : {this.state.ket}</Text>
           <Text style={styles.text1}>image : {this.state.image}</Text>
            </View>
        )
    }
}
