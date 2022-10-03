import React from 'react';
import { ScrollView, Text, View, StyleSheet, Button } from 'react-native';
import { useState } from "react";


const YourApp = () => {
  // const [count, setCount] = useState(0);

  // const increaseCount = () => {
  //   setCount(count + 1);
  // };

  const [items, setItems] = useState([
    { key: 1, item: "item 1" },
    { key: 2, item: "item 2" },
    { key: 3, item: "item 3" },
    { key: 4, item: "item 4" },
    { key: 5, item: "item 5" },
    { key: 6, item: "item 6" },
    { key: 7, item: "item 7" },
    { key: 8, item: "item 8" },
    { key: 9, item: "item 9" },
    { key: 10, item: "item 10" },
    { key: 11, item: "item 11" },
    { key: 12, item: "item 12" },
    { key: 13, item: "item 13" },
  ]);


  return (
    // <View style={styles.demo1}>
    //   <Text style={styles.text}>
    //     Nguyễn Thanh Lâm 26/03/2002 🎉
    //   </Text>
    //   <Button onPress={increaseCount} title="Chọt mình đi"></Button>
    //   <Text style={styles.count}>Chọt chi lắm dị má: {count}</Text>
    // </View>
    <ScrollView style={styles.container}>
    {items.map((item) => {
      return (
        <View style={styles.item} key={item.key}>
          <Text style={styles.text}>{item.item}</Text>
        </View>
      );
    })}
  </ScrollView>
    
  );
}

export default YourApp;

const styles = StyleSheet.create({
  demo1:{
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    
  },
  text:{
    color: "#FF0000",
    fontSize:50,
  },
  item: {
    alignItems: "center",
    justifyContent: "center",
  },

});
