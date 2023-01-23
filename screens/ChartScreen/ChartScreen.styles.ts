import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  itemView: {
    backgroundColor: "#fff",
    padding: 20,
    margin: 8,
    borderRadius: 5,
  },
  title: { fontWeight: "700", fontSize: 16, color: "black" },
  address: { color: "gray", fontSize: 14 },
  addressContainer: { justifyContent: "space-between", flexDirection: "row" },
});
