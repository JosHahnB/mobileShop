import { StyleSheet, SafeAreaView, TextInput, Text, View, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import RecipeList from '../RecipeList/RecipeList';

const RecipePage = () => {

  const [recipes, setRecipes] = useState([]);
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [showRecipes, setShowRecipes] = useState(false)

  const saveRecipe = () => {
    if (title.trim() === '' || details.trim() === '') {
      // Display an alert and return early
      Alert.alert('Incomplete Recipe', 'Please fill in both Recipe Title and Details.');
      return;
    }

    const newRecipe = {
      id: recipes.length + 1,
      title: title,
      details: details,
    }

    setRecipes([...recipes, newRecipe]);

    setTitle('');
    setDetails('');
  }
  return (

    <SafeAreaView style={styles.container}>
      {!showRecipes &&
        <View style={styles.formContainer}>

          <TextInput
            style={styles.input}
            onChangeText={(text) => setTitle(text)}
            value={title}
            placeholder="Recipe Title"
          />

          <TextInput
            editable
            multiline
            numberOfLines={16}
            maxLength={2500}
            onChangeText={(text) => setDetails(text)}
            value={details}
            style={styles.ingredientDetails}
            placeholder="Recipe Details"
          />

          <TouchableOpacity
            style={styles.button}
            onPress={saveRecipe}
          >
            <Text style={styles.buttonText}>Save Recipe</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setShowRecipes(true)}
          >
            <Text style={styles.buttonText}>Show Recipes</Text>
          </TouchableOpacity>

        </View>}
      {showRecipes && <RecipeList recipes={recipes} setShowRecipes={setShowRecipes} />}



    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f1f9ff',
  },
  formContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#f294f2',
    borderRadius: 8,
    padding: 10,
  },
  ingredientDetails: {
    height: 500,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#f294f2',
    borderRadius: 8,
    padding: 10,
  },
  button: {
    backgroundColor: '#409c9b',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});


export default RecipePage;