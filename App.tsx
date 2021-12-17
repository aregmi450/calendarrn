import React, { FC } from 'react';
import { Text, View, StyleSheet  } from 'react-native';
import tailwind from 'tailwind-rn';
import { Calendar } from 'react-native-calendars';



const INITIAL_DATE = '2021-12-11';
const App: FC = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.header}> CALENDAR </Text>

      <Calendar
        enableSwipeMonths
        current={INITIAL_DATE}
        // markingType={''}
        markedDates={{
          '2021-12-22': { selected: true, marked: false, selectedColor: "#FFD42A", textColor: 'black' },
          // '2021-12-23': { selected: true, startingDay: false, color: "teal", textColor: 'black' },
          // '2021-12-24': { selected: true, startingDay: false, color: "teal", textColor: 'black' },
          // '2021-12-25': { selected: true, startingDay: false, color: "teal", textColor: 'black' },
          '2021-12-26': { selected: true, endingDay: true, textColor: 'black', selectedColor: "#FFD42A" },
        }}
      >
      </Calendar>
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