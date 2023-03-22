import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {getCharactersAPI} from '../api/SourceAPI';
import CharacterList from '../components/CharacterList';
import LinearGradient from 'react-native-linear-gradient';

export default function Character() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    (async () => {
      await loadCharacters();
    })();
  }, []);

  const loadCharacters = async () => {
    try {
      const response = await getCharactersAPI();

      const CharactersArray = [];

      //console.log(response);

      for await (const character of response) {
        CharactersArray.push({
          id: character.id,
          name: character.name,
          status: character.status,
          species: character.species,
          gender: character.gender,
          image: character.image,
          origin: character.origin.name,
        });
        //console.log(character.image);
      }

      setCharacters([...characters, ...CharactersArray]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LinearGradient
      colors={['#8D0059', '#0E1149']}
      style={styles.linearGradient}>
      <StatusBar translucent backgroundColor="transparent" />
      <SafeAreaView style={styles.safe}>
        <CharacterList characters={characters} />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  safe: {
    paddingBottom: 24,
  },
  linearGradient: {
    flex: 1,
    paddingTop: 16,
  },
});
