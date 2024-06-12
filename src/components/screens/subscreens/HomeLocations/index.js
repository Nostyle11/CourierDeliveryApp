import { StyleSheet, Text, View, Image } from 'react-native';
import { Feather, Entypo } from '@expo/vector-icons';

const HomeLocation = () => {
  return (
    <View style={styles.Container}>
        <Text style={styles.titlemain}>Make Your Request</Text>

        <View style={styles.row}>
            <View><Entypo name='location-pin' size={24} style={styles.loclogo}/></View>
            <View><Text style={styles.title}> Pickup From Me</Text></View>
            <View style={styles.arrow}><Feather name='arrow-right' size={23}/></View>
        </View>

        <View style={styles.row}>
            <View><Entypo name='location-pin' size={24} style={styles.loclogo}/></View>
            <View><Text style={styles.title}> Deliver To Me</Text></View>
            <View style={styles.arrow}><Feather name='arrow-right' size={23}/></View>
        </View>
    </View>
  );
}

export default HomeLocation;

const styles = StyleSheet.create({
  Container: {
    padding: 10,
    marginVertical: 40,

  },
  titlemain: {

    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
    marginLeft: 10,
  },
  title: {

    fontSize: 16,
    fontWeight: "500",
    marginVertical: 20,
    marginLeft: 10,
  },
  subtitle:{
    color: "grey"
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    margin: 10,
  },
  arrow: {
    marginLeft: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20
  },
  loclogo: {
    marginLeft: 15,
    backgroundColor: 'lightgray',
    width: 35,
    height: 35,
    borderRadius: 20,
    padding: 6,
  },
})