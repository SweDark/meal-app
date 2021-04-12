import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
      />
    );
  };
  return (
    //older versions need the key.
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
    // <View style={styles.screen}>
    //     <Text>The Category screen</Text>
    //     <Button title="Go to category meal screen" onPress={() => {
    //         props.navigation.navigate({routeName: 'CategoryMeals'});
    //     }}/>
    //             <Button title="Go to replace screen" onPress={() => {
    //         props.navigation.replace({routeName: 'CategoryMeals'});
    //     }}/>
    // </View>
  );
};
CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;
