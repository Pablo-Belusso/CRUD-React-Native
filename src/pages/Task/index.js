import React, { useState, useEffect} from 'react'; // UseState = Quando carrega a página Task ele puxa as tasks vindas do firebase
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
//import { useNavigation } from '@react-navigation/native'; // Serve para ativar a navegação do App
//import database from '../../config/firebaseconfig';
import estilo from "./style";


export default function Task({ navigation }) {
/*
  // Cria um useState para poder receber as tasks no useEffect quando for carregado no Banco de Dados
  const [task, setTask] = useState([]) // Array que irá guardar as tasks, podendo ser consumido no FlatList

  function deleteTask(id){
    database.collection("Crud").doc(id).delete()
  }

  // Irá fazer a chamada no Banco de Dados
  useEffect(()=>{
    database.collection("Crud").onSnapshot((query)=>{ 
      const list = []
      query.forEach((doc) => {
        list.push({...doc.data(), id: doc.id })
      })
    })
  }, [])
*/
 return (
   <View style={estilo.container}>
      <FlatList 
        showsVerticalScrollIndicator={false}
        //data={task}
      />
      <TouchableOpacity estilo
      style={estilo.buttonNewTask}
      onPress={() => navigation.navigate("Nova Tarefa")} // O nome da Stack.Screen do App.jsx
      >
        <Text style={estilo.iconButton}>+</Text>
      </TouchableOpacity>

   </View>
  );
}