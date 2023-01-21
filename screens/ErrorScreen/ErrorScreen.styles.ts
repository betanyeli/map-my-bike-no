import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    justifyContent: "space-between",
    paddingBottom: 48,
    backgroundColor: Colors.light.backgroundApp,
  },
  centerView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    color: "#fff",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    margin: 16,
    color: "#fff",
  },
  lottie: {
    marginTop: 40,
  },
});
