import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ActivityIndicator } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';
import styles from './style';

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // State to manage loading indicator

  const signUp = async () => {
    setLoading(true); // Show loader
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigation.replace('RootNavigator'); // Navigate to Home after sign-up
    } catch (error) {
      setError('Invalid email or password');
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
        <Text style={styles.welcomeText}>Sign Up</Text>
      </View>

      <View style={styles.inputcontainer}>
        <Text style={styles.inputheader}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Example@email.com"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputcontainer}>
        <Text style={styles.inputheader}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TouchableOpacity style={styles.signInButton} onPress={signUp}>
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.signInButtonText}>Sign Up</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.signUp}>
          Already have an account? <Text style={styles.signUpLink} onPress={() => navigation.navigate('SignIn')}>Log in</Text>
        </Text>
      </TouchableOpacity>

      <View style={styles.orWithContainer}><View style={styles.orWith}/><Text style={styles.orSignInWith}>or</Text><View style={styles.orWith}/></View>
      
      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.socialButton1}>
          <Image style={{ width: 25, height: 25, margin: 5 }} source={require('../../../assets/images/google.png')} />
          <Text>Google</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ActivityIndicator } from 'react-native';
// import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
// import { auth } from '../../config/firebase';
// import styles from './style';
// import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

// const SignUp = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   GoogleSignin.configure({
//     webClientId: 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
//   });

//   const signUp = async () => {
//     setLoading(true);
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       navigation.replace('RootNavigator');
//     } catch (error) {
//       setError('Invalid email or password');
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
//       <Image
//         source={require('../../../assets/images/Delivery.jpg')}
//         style={styles.image}
//       />
//       <View style={styles.welcomeContainer}>
//         <Text style={styles.welcomeText}>Sign Up</Text>
//       </View>

//       <View style={styles.inputcontainer}>
//         <Text style={styles.inputheader}>Email</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Example@email.com"
//           keyboardType="email-address"
//           autoCapitalize="none"
//           value={email}
//           onChangeText={setEmail}
//         />
//       </View>
//       <View style={styles.inputcontainer}>
//         <Text style={styles.inputheader}>Password</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//         />
//       </View>
//       {error ? <Text style={styles.errorText}>{error}</Text> : null}

//       <TouchableOpacity style={styles.signInButton} onPress={signUp}>
//         {loading ? (
//           <ActivityIndicator size="small" color="#fff" />
//         ) : (
//           <Text style={styles.signInButtonText}>Sign Up</Text>
//         )}
//       </TouchableOpacity>
//       <TouchableOpacity>
//         <Text style={styles.signUp}>
//           Already have an account? <Text style={styles.signUpLink} onPress={() => navigation.navigate('SignIn')}>Log in</Text>
//         </Text>
//       </TouchableOpacity>

//       <View style={styles.orWithContainer}><View style={styles.orWith}/><Text style={styles.orSignInWith}>or</Text><View style={styles.orWith}/></View>
      
//       <View style={styles.socialButtons}>
//         <TouchableOpacity style={styles.socialButton1} onPress={signInWithGoogle}>
//           <Image style={{ width: 25, height: 25, margin: 5 }} source={require('../../../assets/images/google.png')} />
//           <Text>Google</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default SignUp;
