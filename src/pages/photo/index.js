import React from 'react';
import { Image, View } from 'react-native';
import styles from './styles';

const Photo = ({ navigation }) => (
  <View style={styles.container}>
    <Image source={{ uri: navigation.state.params.source }} style={styles.image} />
  </View>
);

export default Photo;
