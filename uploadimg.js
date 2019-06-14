import React from 'react';
import { StyleSheet,Text ,View,TextInput,TouchableHighlight, Image,Button } from 'react-native';
import { ListItem } from 'react-native-elements';

const axios = require('axios');
export default class upload extends React.Component{
    constructor() {
        super();
        this.state = {
          image: '',
          srcImg: '',
          uri: '',
          fileName: '',
          
        };
      }
        UpFoto(){
          this.uploadPicture();
          axios.post("INI LINK UPLOAD", {
            image: this.state.image
          })
          .then((response) => {
              console.log("Status update trx  "+response);
                console.log(response);
            }
          )
          .catch(function (error) {
            console.log(error);
          });
        }
        choosePicture = () => {
          console.log("upload");
          var ImagePicker = require("react-native-image-picker");
          var options = {
            title: "Pilih Gambar",
            storageOptions: {
              skipBackup: true,
              path: "images"
            }
          };
          ImagePicker.showImagePicker(options, response => {
            console.log("Response = ", response);
            if (response.didCancel) {
              console.log("User cancelled image picker");
            } else if (response.error) {
              console.log("ImagePicker Error: ", response.error);
            } else if (response.customButton) {
              console.log("User tapped custom button: ", response.customButton);
            } else {
              let source = { uri: response.uri };
              console.log(source);
              console.log(response.fileName);
              this.setState({
                srcImg: source,
                uri: response.uri,
                fileName: response.fileName,
                image: response.fileName
              });
            }
          });
        };
        uploadPicture = () => {
          const data = new FormData();
          data.append("fileToUpload", {
            uri: this.state.uri,
            type: "image/jpeg", // or photo.type
            name: this.state.fileName
          });
          const url =
            "https://ericwidhiantara.000webhostapp.com/sitalas/uploadFoto.php";
          fetch(url, {
            method: "post",
            body: data
          })
            .then(response => response.json())
            .then(responseJson => {
              console.log(responseJson);
              this.setState({
                loading: false
              });
            });
        };
      
        submit () {
          this.UpFoto();
        };
        render() {
          return (
            <View style={styles.conMain}>
            {
                (this.state.loading===true)&&
                   (
                          <Modal
                              animationType="none"
                              transparent={true}
                              visible={this.state.loading}
                              onRequestClose={() => {
                                alert('Modal has been closed.');
                              }}
                              >
                              <ActivityIndicator
                                animating={true}
                                style={styles.indicator}
                                size="large"
                              />
                          </Modal>
                  )
                }
              <View style={styles.conHeader}>
                <Text style={styles.textHeader}>Latihan Upload Foto</Text>
              </View>
              <View style={styles.conPreview} >
               {(this.state.srcImg!='') &&
                  (<Image source={this.state.srcImg} style={styles.uploadAvatar} />)
               }
              </View>
              <View style={styles.conButton}>
                <Button
                  onPress={
                    () => this.choosePicture()
                  }
                  title="Pilih Foto"
                />
                <Button
                  onPress={
                    () => this.uploadPicture()
                  }
                  title="Upload Foto"
                />
                </View>
      
            </View>
          );
        }
      }
      
      const styles = StyleSheet.create({
        conMain : {
          flex:1
        },
        conHeader : {
          flex:1,
          backgroundColor: '#1e3799',
          alignItems: 'center',
          justifyContent: 'center'
        },
        textHeader : {
          fontSize: 20,
          color :'white'
        },
        conPreview: {
          flex:8,
          alignItems: 'center',
          justifyContent: 'center'
        },
        conButton: {
          flex:1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        },
        uploadAvatar: {
          height: 400,
          width: 400
        },
        indicator: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          height: 80
        }
      });