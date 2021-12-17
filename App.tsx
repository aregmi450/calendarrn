import React, { FC } from 'react';
import { Text, View, StyleSheet  } from 'react-native';
import tailwind from 'tailwind-rn';
import Calendar  from 'react-native-calendar-range-picker';



const INITIAL_DATE = '2021-12-11';
const App: FC = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.header}> CALENDAR 
      </Text>
      <View style={{backgroundColor: '#212431'}}>
        <Calendar
          startDate='2021-12-14'
          endDate='2021-12-23'
          onChange={({ startDate, endDate }) => console.log({ startDate, endDate })}
          style={{
            todayColor: 'blue',
            selectedDayBackgroundColor: '#FFD42A',
            selectedBetweenDayBackgroundTextColor: '#ffe58033'
          }}
        />
      </View>
  
    
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