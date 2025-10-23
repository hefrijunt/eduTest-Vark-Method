import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable, GestureResponderEvent } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function SignUp() {
  const router = useRouter();
  const [secure, setSecure] = useState(true);
  const [agree, setAgree] = useState(false);

  const toggleAgree = () => setAgree(!agree);

  const onCreateAccount = (event: GestureResponderEvent) => {
    // Placeholder action
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subtitle}>
        Create an account to get started!
      </Text>

      <View style={styles.socialWrapper}>
        <Pressable style={styles.socialBtn}>
          <Ionicons name="logo-facebook" size={22} color="#1877F2" />
          <Text style={styles.socialText}>Facebook</Text>
        </Pressable>

        <Pressable style={styles.socialBtn}>
          <Ionicons name="logo-google" size={22} color="#DB4437" />
          <Text style={styles.socialText}>Google</Text>
        </Pressable>
      </View>

      <View style={styles.orWrapper}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or</Text>
        <View style={styles.line} />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#A0A0A0"
      />
      <TextInput
        style={styles.input}
        placeholder="Email/Phone Number"
        placeholderTextColor="#A0A0A0"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <View style={[styles.inputPasswordWrapper, { borderColor: secure ? "#A0A0F0" : "#3455FF" }]}>
        <TextInput
          style={styles.inputPassword}
          placeholder="Password"
          placeholderTextColor="#A0A0A0"
          secureTextEntry={secure}
          autoCapitalize="none"
        />
        <TouchableOpacity onPress={() => setSecure(!secure)}>
          <Ionicons
            name={secure ? "eye-off-outline" : "eye-outline"}
            size={22}
            color="#666"
          />
        </TouchableOpacity>
      </View>


      <View style={styles.agreeWrapper}>
        <TouchableOpacity style={styles.checkbox} onPress={toggleAgree}>
          {agree && <View style={styles.checked} />}
        </TouchableOpacity>
        <Text style={styles.agreeText}>
          I’m agree to The{" "}
          <Text style={styles.link}>Terms of Service</Text> and{" "}
          <Text style={styles.link}>Privacy Policy</Text>
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.btn, !agree && { backgroundColor: "#999" }]}
        disabled={!agree}
        onPress={onCreateAccount}
      >
        <Text style={styles.btnText}>Creat Account</Text>
      </TouchableOpacity>

      <Text style={styles.bottomText}>
        Do you have account?{" "}
        <Text style={styles.link} onPress={() => router.push("/signIn")}>
          Sign In
        </Text>
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  title: { 
    fontSize: 28, 
    fontWeight: "bold", 
    color: "#2A4ECA", 
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#6c6c7d",
    textAlign: "center",
    marginBottom: 25,
    lineHeight: 20,
    width: "90%",
  },

  socialWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginBottom: 20,
  },
  socialBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F4F8FF",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 12,
  },
  socialText: {
    marginLeft: 8,
    color: "#4a4a6a",
    fontWeight: "600",
    fontSize: 16
  },

  orWrapper: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    marginBottom: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#E2E2E8",
  },
  orText: {
    marginHorizontal: 10,
    color: "#49495f",
    fontWeight: "400",
    fontSize: 15,
  },

  input: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#5978FF",
    borderRadius: 15,
    paddingVertical: 14,
    paddingHorizontal: 20,
    fontSize: 16,
    marginBottom: 12,
    color: "#5f5f7c",
    backgroundColor: "#f7f9ff"
  },
  inputPasswordWrapper: {
    width: "90%",
    flexDirection: "row",
    borderRadius: 15,
    borderWidth: 1.5,
    paddingHorizontal: 20,
    paddingVertical: 4,
    marginBottom: 12,
    alignItems: "center",
    backgroundColor: "#f7f9ff",
  },
  inputPassword: {
    flex: 1,
    fontSize: 16,
    color: "#5f5f7c",
  },

  agreeWrapper: {
    flexDirection: "row",
    width: "90%",
    marginBottom: 25,
    alignItems: "center",
  },
  checkbox: {
    height: 22,
    width: 22,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: "#5978FF",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  checked: {
    height: 14,
    width: 14,
    backgroundColor: "#5978FF",
    borderRadius: 3,
  },
  agreeText: {
    color: "#5a5a90",
    fontSize: 12,
    flexShrink: 1
  },
  link: {
    color: "#3455FF",
    fontWeight: "600",
  },

  btn: {
    width: "90%",
    backgroundColor: "#3455FF",
    alignItems: "center",
    paddingVertical: 16,
    borderRadius: 12,
    shadowColor: "#3455FF",
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.3,
    shadowRadius: 17,
    elevation: 8,
    marginBottom: 20,
  },
  btnText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 17,
  },

  bottomText: {
    fontSize: 14,
    color: "#5a5a7a",
  },
});