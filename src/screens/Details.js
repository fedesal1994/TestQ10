import React, {useState, useEffect} from 'react';
import {
  Text,
  Image,
  View,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {getDetailsAPI} from '../api/SourceAPI';
import HeaderElement from '../components/details/Header';
import LinearGradient from 'react-native-linear-gradient';
import Attibutes from '../components/details/Attibutes';

export default function Details(props) {
  const {
    navigation,
    route: {params},
  } = props;

  const [character, setCharacter] = useState(null);
  //   console.log(params.id);

  useEffect(() => {
    (async () => {
      try {
        const response = await getDetailsAPI(params.id);
        setCharacter(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!character) return null;

  return (
    <LinearGradient
      colors={['#8D0059', '#0E1149']}
      style={styles.linearGradient}>
      <ScrollView>
        <StatusBar translucent backgroundColor="transparent" />
        <HeaderElement name={character.name} image={character.image} />
        <Attibutes title={'Status: '} description={character.status} />
        <Attibutes title={'species: '} description={character.species} />
        <Attibutes title={'gender: '} description={character.gender} />
        <Attibutes title={'origin: '} description={character.origin.name} />
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  back: {
    padding: 24,
  },
  linearGradient: {
    flex: 1,
  },
});
