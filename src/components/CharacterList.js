import React from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import CharacterCard from './CharacterCard';

export default function CharacterList(props) {
  const {characters} = props;

  return (
    <FlatList
      data={characters}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={character => String(character.id)}
      renderItem={({item}) => <CharacterCard characters={item} />}
      contentContainerStyle={style.flatListContentContainer}
    />
  );
}

const style = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 8,
  },
});
