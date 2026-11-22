import { View, TouchableOpacity, Text } from "react-native";

import { styles } from "./style";

export default function BuyButton() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Compre este !!</Text>
      </TouchableOpacity>
    </View>
  );
}