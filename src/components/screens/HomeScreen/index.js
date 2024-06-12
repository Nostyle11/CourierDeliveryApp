import { StyleSheet, Text, View, Image } from 'react-native';
import HomeImage from '../subscreens/HomeItems';
import HomeLocation from '../subscreens/HomeLocations';

const HomeMain = () => {
  return (
    <View style={styles.Container}>
      <HomeImage/>
      <HomeLocation/>
    </View>
  );
}

export default HomeMain;


const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },

});
