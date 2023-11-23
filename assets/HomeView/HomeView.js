import { StyleSheet, Text, SafeAreaView, ImageBackground, TouchableOpacity, Alert } from 'react-native';

const image = require('../images/HomeBackground.jpg');

const HomeView = ({ navigation }) => {
  const handleViewRecipes = () => {
    // Display an alert with custom text
    Alert.alert(
      'Pro tip...',
      'Always cook when you\'re hangry',
      [
        {
          text: 'OK',
          onPress: () => {
            // Handle the action after the user presses OK
            // In this case, navigate to the 'RecipePage'
            navigation.navigate('RecipePage');
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} resizeMode='cover' style={styles.image}>
        <Text style={styles.titleText}>Hangry?</Text>
      </ImageBackground>
      <TouchableOpacity style={styles.homeButton} onPress={handleViewRecipes}>
        <Text style={styles.buttonText}>View Recipes</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 7,
    justifyContent: 'center',
    position: 'relative',
  },
  titleText: {
    color: 'white',
    fontSize: 38,
    lineHeight: 60,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#409c9b',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  homeButton: {
    flex: 0.5,
    lineHeight: 84,
    textAlign: 'center',
    backgroundColor: '#409c9b',
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    lineHeight:50,
    fontWeight: 'bold',
    textAlign: 'center',
    alignContent: 'center',
  },
});

export default HomeView;
