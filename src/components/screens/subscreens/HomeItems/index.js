import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { fo} from 'expo-font'

const HomeImage = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../../../../assets/images/Delivery.jpg')} style={styles.image} />
        <LinearGradient
          colors={['rgba(0,0,0,0.5)', 'transparent']}
          start={[0.2, 0.5]}
          end={[1, 0.5]}
          style={styles.gradient}
        />
        <Text style={styles.title}>Deliver. Fast.</Text>
        <Text style={styles.title2}>Just request and feel free</Text>
        <Text style={styles.title3}>nostyle will deliver</Text>
      </View>
    </View>
  );
}

export default HomeImage;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    padding: 10,
    marginTop: 25,
    paddingHorizontal: 20,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 180,
    margin: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 10,
  },
  title: {
    position: 'absolute',
    bottom: 100,
    left: 30,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  title2: {
    position: 'absolute',
    bottom: 80,
    left: 30,
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },
  title3: {
    position: 'absolute',
    bottom: 60,
    left: 30,
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },
});
