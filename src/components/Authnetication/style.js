import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#fff',
      },
      image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
      },
      welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
      },
      subText: {
        fontSize: 14,
        textAlign: 'left',
        marginBottom: 5,
        color: '#2d2e36',
      },
      inputcontainer: {
        width: '100%',
        marginVertical: 5,
      },
      inputheader: {
        fontWeight: 'bold',
        textAlign: 'left',
      },
      input: {
        width: '100%',
        height: 50,
        borderColor: '#ccc',
        borderRadius: 15,
        backgroundColor: '#e6e8f5',
        paddingHorizontal: 15,
        marginVertical: 10,
      },
      forgotPassword: {
        alignSelf: 'flex-end',
        marginBottom: 20,
      },
      signInButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#090b1a',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginBottom: 20,
      },
      signInButtonText: {
        color: '#fff',
        fontSize: 18,
      },
      orSignInWith: {
        fontSize: 16,
        marginBottom: 15,
    
      },
      socialButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 20,
      },
      socialButton: {
        width: '100%',
        height: 45,
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#e6e8f5',
        flexDirection: 'row',
      },
      signUp: {
        fontSize: 16,
      },
      signUpLink: {
        color: '#007bff',
      },
      welcomeContainer: {
        marginTop: 30,
        marginVertical: 20,
        alignItems: 'left',
        width: '100%',
      },
      orWithContainer: {
        flexDirection: 'row',
        alignItems: 'center', 
      },
      orWith: {
        width: 140,
        borderRadius: 1,
        height: 1,
        backgroundColor: 'gray',
        margin: 30,
      },
      socialButton1: {
        width: '100%',
        height: 45,
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#e6e8f5',
        flexDirection: 'row',
      },
      errorText: {
        color: 'red',
        marginBottom: 12,
      },
})