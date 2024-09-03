import { StyleSheet, Text, View, Image } from 'react-native';
import HomeImage from '../subscreens/HomeItems';
import HomeLocation from '../subscreens/HomeLocations';

export default function HomeMain(){
  return (
    <View style={styles.Container}>
      <HomeImage/>
      <HomeLocation/>
    </View>
  );
}

 


const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },

});
