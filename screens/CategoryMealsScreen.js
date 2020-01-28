import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const CatergoryMealsScreen = props => {
  const renderMealItem = ItemData => {
    return (
      <MealItem
        title={ItemData.item.title}
        image={ItemData.item.imageUrl}
        duration={ItemData.item.duration}
        complexity={ItemData.item.complexity}
        affordability={ItemData.item.affordability}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetails",
            params: {
              mealId: ItemData.item.id
            }
          });
        }}
      />
    );
  };

  const catId = props.navigation.getParam("categoryId");

  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: "95%" }}
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
