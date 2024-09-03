import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeLocation = () => {
  const navigation = useNavigation();

  const onPress = (packageType) => {
    navigation.navigate('OrderLocation', { packageType });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titlemain}>Delivery Request</Text>

      <Pressable onPress={() => onPress('Standard Packages')} style={styles.row}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../../../../../assets/images/download.png')} />
        </View>
        <View>
          <Text style={styles.title}>Standard Packages</Text>
          <Text style={styles.subtitle}>For lightweight items and packages</Text>
        </View>
      </Pressable>

      <Pressable onPress={() => onPress('Heavy Packages')} style={styles.row}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../../../../../assets/images/images.png')} />
        </View>
        <View>
          <Text style={styles.title}>Heavy Packages</Text>
          <Text style={styles.subtitle}>For heavyweight items and packages</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  titlemain: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 13,
    color: 'grey',
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgray',
    margin: 10,
    padding: 10,
  },
  imageContainer: {
    width: 110,
    height: 110,
  },
  image: {
    width: 'auto',
    height: 105,
  },
});

export default HomeLocation;
