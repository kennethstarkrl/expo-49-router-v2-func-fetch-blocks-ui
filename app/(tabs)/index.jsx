import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function TabOneScreen() {
  const [myData,setMyData] = useState('');
  const loadData = () =>{
    let data = 0;
    while(data < 150000){
      data = data+1;
      console.log(data);
    }
    setMyData(data);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TouchableOpacity onPress={()=>loadData()}>
      <Text style={[styles.title,{maxWidth:300}]}>Press here to load data, then click the modal 'Open while loading' in the top right or try navigating to other tabs</Text>
      </TouchableOpacity>
      <Text style={{color:'white'}}>{myData ? myData : ''}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
