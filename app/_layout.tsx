import { Stack } from "expo-router";
import { useEffect } from "react";
import { activateKeepAwakeAsync, deactivateKeepAwake } from "expo-keep-awake";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";

export default function Layout() {
  useEffect(() => {
    activateKeepAwakeAsync();
    return () => {
      deactivateKeepAwake();
    };
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <Stack screenOptions={{ headerShown: false }}>
        {/* Root-level screens */}
        <Stack.Screen name="splashScreen" />
        <Stack.Screen name="signIn" />
        <Stack.Screen name="signUp" />
        <Stack.Screen name="prior-knowledge" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
