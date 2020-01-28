import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const MealDetailsScreen = props => {
  const mealId = props.navigation.getParam("mealId");

  const selectecMeal = MEALS.find(meal => meal.id === mealId);
  return (
    <View style={styles.screen}>
      <Text>{selectecMeal.title}</Text>
      <Button
        title="Go Back to Categorys"
        onPress={() => {
          // pops of all screens of the stack and takes me to the root screen
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

MealDetailsScreen.navigationOptions = navagationData => {
  const mealId = navagationData.navigation.getParam("mealId");
  const selectecMeal = MEALS.find(meal => meal.id === mealId);
  return {
    headerTitle: selectecMeal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log("marked as favorite");
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MealDetailsScreen;
