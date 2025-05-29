import MaterialIcon from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <LinearGradient colors={["#00457d", "#05051f"]} style={styles.container}>
      <Image source={require("../assets/images/Logo.png")}></Image>
      <Image source={require("../assets/images/Ilustra.png")}></Image>
      <Text style={styles.title}>Boas Vindas!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          router.push("/cities");
        }}
      >
        <Text style={styles.buttonTitle}>Entrar</Text>
        <MaterialIcon
          name="arrow-forward"
          size={24}
          color="#01080e"
          style={styles.icon}
        />
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 64,
    paddingVertical: 80,
    paddingHorizontal: 32,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontFamily: "Montserrat_400Regular",
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "#7693ff",
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },
  buttonTitle: {
    color: "#01080e",
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Montserrat_600SemiBold",
  },
  icon: {
    position: "absolute",
    right: 16,
  },
});
