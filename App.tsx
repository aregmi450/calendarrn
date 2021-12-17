import React, { FC } from 'react';
import { Text, View, StyleSheet  } from 'react-native';
import UsedCalendar from './Calendar';



const INITIAL_DATE = '2021-12-11';
const App: FC = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.header}> CALENDAR 
      </Text>
    
    <UsedCalendar/>
  
    
    </View>

  )
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  alignContent:"center",
  marginTop: 35,
    backgroundColor: '#212431'
},
header:{
  padding: 20,
  color: 'red',
  alignItems: 'center',
  fontSize: 30,
  fontWeight: "bold",
},

})

export default App;