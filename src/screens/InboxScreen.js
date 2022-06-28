
import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity ,Text,Button} from 'react-native'
import axios from "axios";



const getPost=()=>{
     axios.get('https://demo.screenit.io/api/dashboard/get_company_list')
     .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
  
}

const InboxScreen=()=>{
    return(
        <View>
            <Text style={{fontSize:30, justifyContent:"center",alignSelf:"center",marginTop:"50%"}}>Inbox Screen</Text>
            <Button title="display" onPress={getPost()}/>
        </View>
    )
}

const styles = StyleSheet.create({

})


export default InboxScreen;