import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView,StatusBar,TouchableOpacity, FlatList, Modal, TextInput } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import TaskList from './src/components/TaskList';
import * as Animatable from 'react-native-animatable';



export default function App() {
  


  const [task, setTask] = useState([]);
  
  const [open, setOpen] = useState(false);
  const [produto, setproduto] = useState('');
  const [quantidade, setquantidade] = useState('');
  const [unimedida, setunimedida] = useState('');
  const input = quantidade + ' - ' +  unimedida + ' - ' + produto ;
  
  
  function Cadastrar(){

    const data ={
      key: input,
      task: input,
    };

    setTask([...task, data]);
    setOpen(false);
  

  }
  
  
  
  
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar backgroudColor= "#171d31" barStyle="light-content" />
     
      <View style={styles.content}>
       <Text style={styles.title}> Lista De Produtos</Text>
      </View>
    
      <FlatList 
      showsHorizontalScrollIndicator={false}
      data={task}
      quantidade={(item) => String(item.quantidade)} 
      keyExtractor={(item) => String(item.key)}
      renderItem={({item}) => <TaskList data ={item} />}
      />

      <Modal animationType="slide10" transparent={false} visible={open}>
      <SafeAreaView style={styles.modal}>
       
        <View style={styles.modalHeader}>
         <TouchableOpacity onPress= { () => setOpen(false)}>
           <Ionicons name="md-arrow-back" size={40} color="#000"/>
         </TouchableOpacity>
         
         
         
         
         
         
         
         
         
         
         <Text style={styles.modalTitle}> Novo Produto </Text>
        </View>

        <View style={styles.modalBody}>
          
         
         
         
          <TextInput
          placeholder= "Produto:"
          style={styles.input}
          value={produto}
          onChangeText={(pro) => setproduto(pro)}
          />
           <TextInput
          placeholder= "Quantidade:"
          keyboardType='numeric'
          style={styles.input}
          value={quantidade}
          onChangeText={(quant) => setquantidade(quant)}
          />
           <TextInput
          placeholder= "Unidade Medida: Ex(Uni,Kg ou Lt)"
          style={styles.input}
          value={unimedida}
          onChangeText={(uni) => setunimedida(uni)}
          />
        </View>
          
          
          <TouchableOpacity 
            style={styles.button}
            onPress={Cadastrar}
            
            >
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>

      </SafeAreaView>

      </Modal>

      <TouchableOpacity style={styles.add}
      onPress={() => setOpen(true)}
      >
       
       <Ionicons name= "ios-add" size={35} color="#FFF"/>

      </TouchableOpacity>




    </SafeAreaView>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6A5ACD',
    
    
  },
  title:{
    marginTop: 10,
    paddingBottom: 10,
    fontSize: 25,
    textAlign: 'center',
    color: '#FFF'

  },
  add:{
    position: 'absolute',
    width: 60,
    height: 60,
    backgroundColor: '#0094FF',
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 30,
    right: 25,
    bottom:25,
    elevation: 2,
    zIndex: 9,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset:{
      width: 1,
      height: 3,
    }

  },
  modal:{ 
    flex: 1,
    backgroundColor: '#6A5ACD',
    
    
  },
  modalHeader:{
    marginLeft: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
      



  },


  modalBody:{ 
    marginTop: 30,
    backgroundColor: '#6A5ACD',
    
    
  },

  modalTitle:{
    marginLeft: 40,
    fontSize: 30,
    color: '#FFF',
    
  },
  input:{
    fontSize: 20,
    color: '#000',
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

  button : {
    marginLeft: 40,
    marginRight: 40,
    marginTop: 50,
    flexDirection: 'row',
    
    backgroundColor :"#FFF",
    borderRadius: 30,
    
    fontSize: 50,

    padding: 7,
    elevation: 1.5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset:{
        width: 1,
        hieght: 3,
    }
     
  },


  buttonText: {
    marginLeft: 40,
    alignSelf :"center",
    padding : 20,
    fontSize : 30,
    color : "#000",
    fontWeight : 'bold'

 } 


});