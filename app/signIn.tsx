import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const [secure, setSecure] = useState(true);

   const handleSubmit = () => {
    let email_ = 'hefri.juanto@gmail.com';
    let password_ = '12345';

    if(email == email_ && password==password_ ){
      onLogin();
    }else{
      alert("Email atau Password salah");
    }
  };

  const onForgetPassword = () => {
    router.push("/forgotPassword");
  };

  const onLogin = () => {
    // nanti bisa tambahkan validasi login di sini
    router.replace("/(tabs)"); // ✅ tidak perlu slash depan
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.subtitle}>
        Welcome to Edutest, sign in to continue!
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
        style={styles.inputEmail}
        placeholder="Email"
        placeholderTextColor="#999"
        keyboardType="email-address"
        autoCapitalize="none"
        // defaultValue="alphainvent@gmail.com"
        onChangeText={(text) => setEmail(text)} 
      />

      <View
        style={[
          styles.inputPasswordWrapper,
          { borderColor: secure ? "#A0A0F0" : "#3461FD" },
        ]}
      >
        <TextInput
          style={styles.inputPassword}
          placeholder="Password"
          secureTextEntry={secure}
          placeholderTextColor="#A0A0F0"
          autoCapitalize="none"
          // defaultValue="password"
          onChangeText={(text) => setPassword(text)} 
        />
        <TouchableOpacity onPress={() => setSecure(!secure)}>
          <Ionicons
            name={secure ? "eye-off-outline" : "eye-outline"}
            size={22}
            color="#666"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.forgetWrapper} onPress={onForgetPassword}>
        <Text style={styles.forgetText}>Forget Password?</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.btn} onPress={onLogin}> */}
      <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
        <Text style={styles.btnText}>Log In</Text>
      </TouchableOpacity>

      <Text style={styles.bottomText}>
        Don’t have an account?{" "}
        <Text style={styles.link} onPress={() => router.push("/signUp")}>
          Sign Up
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
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2A4ECA",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#7a7a91",
    textAlign: "center",
    marginBottom: 25,
    lineHeight: 20,
    width: "80%",
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
    backgroundColor: "#F4F7FF",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 12,
  },
  socialText: {
    marginLeft: 8,
    color: "#3f3d56",
    fontWeight: "600",
    fontSize: 15,
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
    backgroundColor: "#E0E0E0",
  },
  orText: {
    marginHorizontal: 10,
    color: "#9e9e9e",
    fontWeight: "400",
    fontSize: 14,
  },

  inputEmail: {
    width: "90%",
    backgroundColor: "#f4f8ff",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#3461FD",
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 16,
    marginBottom: 15,
    color: "#000",
  },
  inputPasswordWrapper: {
    width: "90%",
    flexDirection: "row",
    backgroundColor: "#f4f8ff",
    borderColor: "#3461FD",
    borderWidth: 1.5,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 4,
    marginBottom: 8,
    alignItems: "center",
  },
  inputPassword: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },

  forgetWrapper: {
    width: "90%",
    alignItems: "flex-end",
    marginBottom: 20,
  },
  forgetText: {
    color: "#6d758d",
    fontSize: 13,
  },

  btn: {
    width: "90%",
    backgroundColor: "#3461FD",
    alignItems: "center",
    paddingVertical: 16,
    borderRadius: 12,
    shadowColor: "#3461FD",
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
    color: "#5a5a70",
  },
  link: {
    color: "#3455ff",
    fontWeight: "600",
  },
});
