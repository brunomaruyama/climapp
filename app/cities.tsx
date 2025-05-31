import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import citiesData from "../assets/data/cities.json"; // Assuming you have a JSON file with city data

const Cities = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [filteredCities, setFilteredCities] = useState(citiesData);

  useEffect(() => {
    // This effect can be used to filter cities based on the search input
    // For now, it just logs the search term
    console.log("Searching for:", search);

    const newFilteredCities = citiesData.filter((city) =>
      city.city.toLocaleLowerCase().includes(search.toLowerCase())
    );
    setFilteredCities(newFilteredCities);
  }, [search]);
  return (
    <LinearGradient colors={["#00457d", "#05051f"]} style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.searchInput}>
            <TextInput
              placeholder="Digite a cidade"
              style={styles.textInput}
              placeholderTextColor={"#fff"}
              value={search}
              onChangeText={(value) => setSearch(value)}
            />
            <MaterialIcons name="search" size={24} color={"#fff"} />
          </View>
          {filteredCities.map((city) => (
            <TouchableOpacity
              onPress={() => {
                router.push(`/${city.city}`);
              }}
              key={city.city}
              style={styles.citiesContainer}
            >
              <Image source={require("../assets/images/clouds.png")}></Image>
              <Text style={styles.citiesName}>
                {city.city.replace(",", " - ")}
              </Text>
              <Text style={styles.cityTemp}>{city.temp}°</Text>
            </TouchableOpacity>
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
    paddingTop: 40,
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
  searchInput: {
    width: "100%",
    height: 42,
    backgroundColor: "#ffffff15",
    borderRadius: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 40,
  },
  textInput: {
    color: "#fff",
    fontFamily: "Montserrat_500Medium",
    fontSize: 16,
  },
});

export default Cities;
