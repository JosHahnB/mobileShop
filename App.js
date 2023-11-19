import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableNativeFeedback, Button, Alert, ImageBackground, TouchableOpacity, } from 'react-native';

// import { useDeviceOrientation } from '@react-native-community/hooks;';

const image = require('./assets/HomeBackground.jpg')
export default function App() {
  // const orientation = useDeviceOrientation()

  return (
    // view = div
    // <SafeAreaView >

    /* <Button
        color={'red'}
        title='Add Recipe'
        // onPress={() => Alert.alert("Add a new recipe?", 'It better be yummy...',
        //   [{ text: 'yes', onPress: () => console.log('Yes') },
        //   { text: 'no', onPress: () => console.log('No') }])}
        onPress={() => Alert.prompt('title', 'message', text => console.log(text))}

      /> */

    <SafeAreaView style={styles.container}>
      <ImageBackground source={image}
        resizeMode='cover'
        style={styles.image}>
        <Text style={styles.titleText}>
          Hangry
        </Text>
      </ImageBackground>
      <TouchableOpacity
        style={styles.homeButton}
        // onPress={handleViewRecipes}
        >
        <Text style={styles.buttonText}>View Recipes</Text>

      </TouchableOpacity>

    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 7,
    justifyContent: 'center',
    position: 'relative'
  },
  titleText: {
    color: 'black',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'lightgray',
    position: 'absolute',
    top: 0, // Place the text at the top
    left: 0, // Center the text horizontally
    right: 0, // Center the text horizontally
  },
  homeButton: {
    flex: 0.5,
    color: 'dodgerblue',
    lineHeight: 84,
    textAlign: 'center',
    backgroundColor: 'dodgerblue',
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    alignContent: 'center'
  },
});
