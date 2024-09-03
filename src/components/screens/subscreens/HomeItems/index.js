import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../../config/firebase'; // Adjust the import path according to your project structure

const HomeImage = () => {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail('');
      }
    });

    return unsubscribe; // Cleanup subscription on unmount
  }, []);

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
      <View style={styles.welcomeContainer}>
        {userEmail ? (
          <>
            <Text style={styles.welcomeText}>Welcome Back</Text>
            <Text style={styles.emailText}>{userEmail}</Text>
          </>
        ) : (
          <Text style={styles.welcomeText}>Welcome</Text>
        )}
      </View>
    </View>
  );
};

export default HomeImage;

const styles = StyleSheet.create({
  Container: {
    alignItems: 'flex-start',
    padding: 10,
    marginTop: 50,
    paddingHorizontal: 20,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 30,
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
  welcomeContainer: {
    margin: 20,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  welcomeText: {
    fontSize: 16,
  },
  emailText: {
    fontSize: 20,
    color: 'gray',
    fontWeight: 'bold',
  },
});
