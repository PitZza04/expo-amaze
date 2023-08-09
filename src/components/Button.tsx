import { Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";

import FontAwesome from "@expo/vector-icons/FontAwesome";
type ButtonProps = {
  label: string;
  theme?: "primary" | "secondary" | "danger";
  onPress: () => void;
};
export default function Button({ label, theme, onPress }: ButtonProps) {
  if (theme === "primary") {
    return (
      <View
        style={[
          styles.container,
          { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 },
        ]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: "#fff" }]}
          onPress={onPress}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => alert("you just pressed the button")}
      >
        <FontAwesome
          name="picture-o"
          size={18}
          color="#25292e"
          style={styles.buttonIcon}
        />
        <Text style={[styles.buttonLabel]}>{label}</Text>
      </Pressable>
    </View>
  );
}
const flexCenter: ViewStyle = {
  alignItems: "center",
  justifyContent: "center",
};
const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    padding: 3,
    ...flexCenter,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    flexDirection: "row",
    ...flexCenter,
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    fontSize: 16,
    color: "#fff",
  },
});
