import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Attibutes(props) {
  const {title, description} = props;

  return (
    <View style={styles.view}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#7FFF33',
    fontWeight: 'bold',
    fontSize: 20,
    marginRight: 10,
    flex: 1,
    textAlign: 'right',
  },
  description: {
    color: '#fff',
    fontSize: 20,
    flex: 1,
  },

  view: {
    paddingHorizontal: 28,
    flexDirection: 'row',
  },
});
