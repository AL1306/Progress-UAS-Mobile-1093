import React from 'react'; 
import { View,FlatList,Text } from 'react-native' 
import { ListItem } from 'react-native-elements' 
import Header from "./Header";
const axios = require('axios');


class luarnegri extends React.Component{ 
constructor(props) { 
super(props); 
this.state = { 
data: [], 
}; 
} 

componentDidMount(){ 
axios.get("http://inventariuniversal.000webhostapp.com/API/getbarang.php?jenis_barangid=1").then( (response)=>{ 
console.log(response.data); 
this.setState({ data:response.data }); 
}) 
.catch(function (error) { 
console.log(error); 
}); 
} 
static navigationOptions = {
    header: null
}
render() { 
return ( 
<View> 
<Header title={"Barang Luar Negeri"}/>
<FlatList 
keyExtractor={(item, index) => index.toString()} 
data={this.state.data} 
renderItem={({ item }) => ( 
<ListItem onPress={()=>     this.props.navigation.navigate('Detail',{kode_barang:   item.kode_barang,nama_barang})}
title={item.nama_barang} 
leftAvatar={{source: { uri:"http://inventariuniversal.000webhostapp.com/API/upload/kategori/"+ item.gambar},}} 
/> ) } /> 

</View> 
) } } 

export default luarnegri;
