import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function CharacterCard(props) {
  const {characters} = props;
  const navigation = useNavigation();

  const goToCharacter = () => {
    console.log(characters.name);
    navigation.navigate('Details', {id: characters.id});
  };

  return (
    <TouchableWithoutFeedback onPress={goToCharacter}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={styles.bgStyles}>
            <Image source={{uri: characters.image}} style={styles.image} />
            <View style={styles.backText}>
              <Text style={styles.name}>{characters.name}</Text>
              <Text style={styles.description}>{characters.species}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 170,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    overflow: 'hidden',
  },
  spacing: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgStyles: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    position: 'absolute',
    right: 10,
    top: 10,
    color: '#fff',
    fontSize: 11,
  },
  name: {
    color: '#7FFF33',
    fontWeight: 'bold',
    fontSize: 16,
    marginStart: 4,
  },
  description: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
    marginStart: 4,
  },
  backText: {
    backgroundColor: '#00000077',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  image: {position: 'absolute', width: '100%', height: '100%'},
  //image: {position: 'absolute', bottom: 2, right: 2, width: 90, height: 90},
});
