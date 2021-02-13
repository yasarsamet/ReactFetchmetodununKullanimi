/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { Component } from 'react';
import {
  StyleSheet,  
  View,
  TouchableOpacity,
  Text,
  TextInput
} from 'react-native';

class Home extends Component{
  constructor(){
    super();
    this.state={
      a:'',
      b:''
    }
  }
  updateValue(text,field){
    if(field =='a'){
        this.setState({
          a:text,
        })
    }else if(field=='b'){
          this.setState({
            b:text,
          })
    }
    // console.warn(text)
  }
  submit(){
    let collection = {}
    collection.a=this.state.a,
    collection.b=this.state.b 
    console.warn(collection);
    fetch('https://httpbin.org/post', { //https://httpbin.org/post
         method: 'POST',
          headers: {
           'Content-Type': 'application/json',
          },
          body: JSON.stringify(collection),
        })
        .then(response => response.json())
        .then(collection => {
        console.log('Success:', collection);
          })
        .catch((error) => {
        console.error('Error:', error);
        });
    }
  render(){
    return (
        <View style={styles.container}>
            <TextInput 
            placeholder="Name"
            style={styles.Input}
            onChangeText={(text)=>this.updateValue(text,'a')}
            />
            <TextInput
              placeholder="Password"
              style={styles.Input}
              onChangeText={(text)=>this.updateValue(text,'b')}
            />
            <TouchableOpacity style={styles.btn}
            onPress={()=>this.submit()}>            
              <Text>Test ET</Text>
            </TouchableOpacity>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:'#F5FCFF',
    flex:1,
    justifyContent:'center'
  },
  item: {
    flex:1,
    alignSelf:'stretch',
    margin:10,
    alignItems:'center',
    justifyContent:'center',
    borderBottomWidth:1,
    borderBottomColor:'#eee'
  },
    btn:{
      backgroundColor:'skyblue',
    height:40,
    color:'#fff',
    justifyContent:'center',
    alignItems:'center',
  }
});
export default Home;