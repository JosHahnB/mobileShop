import { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, } from 'react-native';
import Collapsible from 'react-native-collapsible';

const RecipeList = ({ recipes, setShowRecipes }) => {
  const [expanded, setExpanded] = useState({})

  const toggleExpand = (id) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [id]: !prevExpanded[id],
    }));
  };

  return (
    <View >
      <Text style={styles.header}>List of Yummies!</Text>
      <FlatList

        data={recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.recipeItem}>

            <TouchableOpacity onPress={() => toggleExpand(item.id)}>
              <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
            <Collapsible collapsed={!expanded[item.id]}>
              <Text style={styles.details}>{item.details}</Text>
            </Collapsible>
          </View>
        )}
      />
      <TouchableOpacity style={styles.button} title="Back" onPress={() => setShowRecipes(false)} >
        <Text style={styles.buttonText}>Insert Another Recipe</Text>
        </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff', // White background
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#333333', // Dark gray text color
  },
  recipeItem: {
    marginBottom: 16,
    backgroundColor: '#f9f9f9', // Light gray background
    padding: 10,
    borderRadius: 8,
    borderWidth: 1, // Add border
    borderColor: '#f294f2', // Border color
    elevation: 2, // Shadow on Android
    shadowColor: '#000000', // Shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333333', // Dark gray text color
  },
  details: {
    fontSize: 16,
    color: '#666666', // Medium gray text color
  },
  button: {
    backgroundColor: '#3498db',
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

export default RecipeList;