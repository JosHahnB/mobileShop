// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RecipePage from '../RecipePage/RecipePage';
import HomeView from '../HomeView/HomeView';
// import RecipeListPage from '../RecipeList/RecipeListPage';
// import RecipeList from '../RecipeList/RecipeList';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeView'>
        <Stack.Screen name="HomeView" component={HomeView} />
        <Stack.Screen name="RecipePage" component={RecipePage} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
