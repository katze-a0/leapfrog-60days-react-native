import { StyleSheet } from "react-native";
const savingsscss = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  headerSection: {
    flexDirection: "row", // Makes items horizontal
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 5,
    backgroundColor: "#7d65db", // Purple background
  },
  welcomeTitle: {
    flex: 1, // Each number takes equal space
    fontSize: 27,
    color: "#FFFFFF", // White color
    textAlign: "center", // Center each number
    marginRight: 5,
  },
});