import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useRouter } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const prepare = async () => {
      // Tahan splash selama 5 detik
      await new Promise(resolve => setTimeout(resolve, 5000));
      await SplashScreen.hideAsync();

      // Setelah splash → arahkan ke SignIn
      router.replace("/signIn");
    };

    prepare();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo-edutest.png")}
        style={styles.logo}
      />
      <Text style={styles.text}>EduTest</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    resizeMode: "contain",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
});
