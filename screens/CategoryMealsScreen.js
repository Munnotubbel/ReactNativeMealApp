import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
const CatergoryMealsScreen = props => {
  // const catId = props.navigation.getParam("categoryID");

  return (
    <View style={styles.screen}>
      <Text>The Categories Meals Screen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          // or props.navigation.push("MealDetails") stacks even same screen on top
          props.navigation.navigate({ routeName: "MealDetails" });
        }}
      />

      <Button
        title="Go Back"
        onPress={() => {
          //props.navigation.pop()   pop upper stack away
          props.navigation.goBack();
        }}
      />
    </View>
  );
};

CatergoryMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CatergoryMealsScreen;
