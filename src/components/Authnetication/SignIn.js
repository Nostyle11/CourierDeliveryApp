import 'react-native-gesture-handler'
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ActivityIndicator } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';
import styles from './style';

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // State to manage loading indicator

  const signIn = async () => {
    setLoading(true); // Show loader
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.replace('RootNavigator'); // Navigate to Home after sign-in
    } catch (error) {
      setError('Incorrect email or password');
    } finally {
      setLoading(false); // Hide loader
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../../assets/images/Delivery.jpg')} // Replace with your image URL
        style={styles.image}
      />
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Hello 👋</Text>
        <Text style={styles.subText}>Today is a new day. It's your day. You shape it.</Text>
        <Text style={styles.subText}>Sign in to start making your delivery request.</Text>
      </View>

      <View style={styles.inputcontainer}>
        <Text style={styles.inputheader}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Example@email.com"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputcontainer}>
        <Text style={styles.inputheader}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="At least 8 characters"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={{ color: '#007bff' }}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signInButton} onPress={signIn}>
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.signInButtonText}>Sign in</Text>
        )}
      </TouchableOpacity>
      <Text style={styles.orSignInWith}>continue with</Text>
      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.socialButton}>
          <Image style={{ width: 25, height: 25, margin: 5 }} source={require('../../../assets/images/google.png')} />
          <Text>Google</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={styles.signUp}>
          Don't you have an account? <Text style={styles.signUpLink} onPress={() => navigation.navigate('SignUp')}>Sign up</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignIn;
// import 'react-native-gesture-handler';
// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ActivityIndicator } from 'react-native';
// import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
// import { auth } from '../../config/firebase';
// import styles from './style';
// import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

// const SignIn = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   GoogleSignin.configure({
//     webClientId: 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
//   });

//   const signIn = async () => {
//     setLoading(true);
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       navigation.replace('RootNavigator');
//     } catch (error) {
//       setError('Incorrect email or password');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const signInWithGoogle = async () => {
//     try {
//       await GoogleSignin.hasPlayServices();
//       const userInfo = await GoogleSignin.signIn();
//       const googleCredential = GoogleAuthProvider.credential(userInfo.idToken);
//       await signInWithCredential(auth, googleCredential);
//       navigation.replace('RootNavigator');
//     } catch (error) {
//       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//         setError('User cancelled the login flow');
//       } else if (error.code === statusCodes.IN_PROGRESS) {
//         setError('Sign in is in progress already');
//       } else {
//         setError('Some error occurred');
//       }
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Image source={require('../../../assets/images/Delivery.jpg')} style={styles.image} />
//       <View style={styles.welcomeContainer}>
//         <Text style={styles.welcomeText}>Hello 👋</Text>
//         <Text style={styles.subText}>Today is a new day. It's your day. You shape it.</Text>
//         <Text style={styles.subText}>Sign in to start making your delivery request.</Text>
//       </View>
//       <View style={styles.inputcontainer}>
//         <Text style={styles.inputheader}>Email</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Example@email.com"
//           keyboardType="email-address"
//           value={email}
//           onChangeText={setEmail}
//           autoCapitalize="none"
//         />
//       </View>
//       <View style={styles.inputcontainer}>
//         <Text style={styles.inputheader}>Password</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="At least 8 characters"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//         />
//       </View>
//       {error ? <Text style={styles.errorText}>{error}</Text> : null}
//       <TouchableOpacity style={styles.forgotPassword}>
//         <Text style={{ color: '#007bff' }}>Forgot Password?</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.signInButton} onPress={signIn}>
//         {loading ? <ActivityIndicator size="small" color="#fff" /> : <Text style={styles.signInButtonText}>Sign in</Text>}
//       </TouchableOpacity>
//       <Text style={styles.orSignInWith}>continue with</Text>
//       <View style={styles.socialButtons}>
//         <TouchableOpacity style={styles.socialButton} onPress={signInWithGoogle}>
//           <Image style={{ width: 25, height: 25, margin: 5 }} source={require('../../../assets/images/google.png')} />
//           <Text>Google</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.socialButton}>
//           <Image style={{ width: 25, height: 25, margin: 5 }} source={require('../../../assets/images/communication.png')} />
//           <Text>Facebook</Text>
//         </TouchableOpacity>
//       </View>
//       <TouchableOpacity>
//         <Text style={styles.signUp}>
//           Don't you have an account? <Text style={styles.signUpLink} onPress={() => navigation.navigate('SignUp')}>Sign up</Text>
//         </Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// export default SignIn;
