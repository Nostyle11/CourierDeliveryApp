import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        marginTop: 50,
        padding: 10
      },
      headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
      },
      header: {
        fontSize: 24,
        fontWeight: '500',
        flex: 1,
        textAlign: 'center',
      },
      checkbox: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        marginBottom: 20,
      },
      dropdown: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        justifyContent: 'center',
        marginBottom: 20,
      },
      addItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 20,
        borderTopWidth: 1,
        borderTopColor: 'lightgray',
        paddingTop: 10,
      },
      itemNameLabel: {
        margin: 10,
        color: 'gray'
      },
      input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        margin: 10,
        marginBottom: 20,
      },
      photoButton: {
        height: 80,
        width: 80,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
      },
      supportedFormat: {
        marginBottom: 20,
      },
      bottomview: {
        borderTopWidth: 1,
        padding: 10,
        position: 'relative',
        width: '100%',
        bottom: 0,
      },
      price: {
        fontSize: 16,
        fontWeight: 'bold',
        alignItems: 'center'
      },
      continueButton: {
        backgroundColor: 'black',
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: 'center',
        marginVertical: 10,
      },
      continueButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
})