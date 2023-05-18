import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';

const Header = () => {
  let time = new Date().toUTCString();

  const times = (timez) => {
    const localTime = new Date(time);
    const hour = localTime.getHours();

    if (hour >= 0 && hour < 12) {
      timez = 'good morning';
    } else if (hour >= 12 && hour < 18) {
      timez = 'good afternoon';
    } else {
      timez = 'good night';
    }
    return timez;
  };

  return (
    <View style={styles.containerheader}>
      <View style={styles.left}>
        <Text style={{ fontSize: 15, 
          color: 'white', fontWeight: 300, marginBottom: 4 }}>{times()}</Text>
        <Text style={{ fontSize: 22, 
          color: 'white', 
          fontWeight: 500 }}>Lawand barbarosa</Text>
      </View>

      <View style={styles.right}>
        <TouchableOpacity style={{ backgroundColor: '#FF4C29', borderRadius: 20 }}>
          <Button title="240 point" color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerheader: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Header;
