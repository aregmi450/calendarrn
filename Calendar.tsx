import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Calendar from "react-native-calendar-range-picker";

const UsedCalendar = () => {
  return (
    <View>
      <Calendar
        startDate="2022-03-11"
        endDate="2021-12-23"
        onChange={({ startDate, endDate }) =>
          console.log({ startDate, endDate })
        }
        style={{
          todayColor: "blue",
          selectedDayBackgroundColor: "#FFD42A",
          selectedBetweenDayBackgroundTextColor: "#ffe58033",
        }}
      />
    </View>
  );
};

export default UsedCalendar;
