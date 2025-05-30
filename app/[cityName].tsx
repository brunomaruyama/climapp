import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

type Forecast = {
  min: string;
  max: string;
};

type City = {
  city: string;
  date: string;
  temp: string;
  description: string;
  humidity: string;
  forecast: Forecast[];
};

const CityDetails = () => {
  const searchParams = useLocalSearchParams();
  const [cityDetails, setCityDetails] = useState<City | null>(null);
  const handleData = async () => {
    try {
      const response = await fetch(`https://climapp-api.vercel.app/api`);
      const responseJSON: City[] = await response.json();
      const city = responseJSON.find(
        (cityData) => cityData.city === searchParams.cityName
      );
      setCityDetails(city ?? null);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <LinearGradient colors={["#00457d", "#05051f"]} style={styles.container}>
      <View>
        <MaterialIcons
          name="chevron-left"
          size={24}
          color={"#fff"}
          style={styles.headerIcon}
        />
        <Text style={styles.headerTitle}>
          {cityDetails ? cityDetails.city : "Carregando..."}
        </Text>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardHeaderTitle}>Hoje</Text>
          <Text style={styles.cardHeaderTitle}>
            {cityDetails ? cityDetails.date : ""}
          </Text>
        </View>
        <View style={styles.cardBox}>
          <Image
            source={require("../assets/images/clouds.png")}
            style={styles.cardImage}
          />
          <View>
            <Text style={styles.cardTemperature}>{cityDetails?.temp}°</Text>
            <Text style={styles.cardDescription}>
              {cityDetails?.description}
            </Text>
          </View>
        </View>
        <View style={styles.rowBox}>
          <View style={styles.row}>
            <Image source={require("../assets/icons/humidity.png")} />
            <Text style={styles.rowTitle}>Humidity:</Text>
            <Text style={styles.rowValue}>{cityDetails?.humidity}%</Text>
          </View>
          <View style={styles.row}>
            <Image source={require("../assets/icons/temperature.png")} />
            <Text style={styles.rowTitle}>Min/Max: </Text>
            <Text style={styles.rowValue}>
              {cityDetails?.forecast[0].min}°/{cityDetails?.forecast[0].max}°
            </Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 16,
    gap: 40,
  },
  headerTitle: {
    fontSize: 20,
    color: "#fff",
    fontFamily: "Montserrat_600SemiBold",
    textAlign: "center",
  },

  cardContainer: {
    width: "100%",
    borderRadius: 24,
    backgroundColor: "#4463d5",
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  cardHeaderTitle: {
    color: "#fff",
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 16,
  },
  headerIcon: {
    position: "absolute",
    left: 16,
  },
  cardImage: {
    width: 72,
    height: 64,
  },
  cardTemperature: {
    color: "#fff",
    fontSize: 48,
    fontFamily: "Montserrat_700Bold",
    textAlign: "center",
  },
  cardDescription: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Montserrat_500Medium",
    textAlign: "center",
  },
  cardBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    gap: 8,
  },
  rowTitle: {
    color: "#fff",
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 16,
  },
  rowValue: {
    color: "#fff",
    fontFamily: "Montserrat_400Regular",
    fontSize: 16,
    marginLeft: "auto",
  },
  rowBox: {
    gap: 8,
  },
});

export default CityDetails;
