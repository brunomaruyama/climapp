import { LinearGradient } from "expo-linear-gradient";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import citiesData from "../assets/data/cities.json"; // Assuming you have a JSON file with city data

const Cities = () => {
  console.log(citiesData);

  return (
    <LinearGradient colors={["#00457d", "#05051f"]}>
      <ScrollView>
        <View style={styles.container}>
          {citiesData.map((city, index) => (
            <View key={index} style={styles.citiesContainer}>
              <Image source={require("../assets/images/clouds.png")}></Image>
              <Text style={styles.citiesName}>{city.city}</Text>
              <Text style={styles.cityTemp}>{city.temp}°</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    paddingHorizontal: 16,
  },
  citiesName: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Montserrat_500Medium",
  },
  citiesContainer: {
    width: "100%",
    height: 64,
    borderRadius: 16,
    backgroundColor: "#ffffff15",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    flexDirection: "row",
  },
  cityTemp: {
    color: "#fff",
    fontSize: 24,
    fontFamily: "Montserrat_700Bold",
  },
});

export default Cities;
