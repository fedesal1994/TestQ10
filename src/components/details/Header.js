import React from 'react';
import {Text, StyleSheet, View, SafeAreaView, Image} from 'react-native';

export default function HeaderElement(props) {
  const {name, image} = props;

  return (
    <View>
      <SafeAreaView>
        <View style={styles.imageBack}>
          <Text style={styles.name}>{name}</Text>
          <Image source={{uri: image}} style={styles.image} />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 1 / 1,
    borderRadius: 30,
  },
  imageBack: {
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    color: '#7FFF33',
    fontWeight: 'bold',
    fontSize: 32,
    marginBottom: 16,
    textAlign: 'center',
  },
});
