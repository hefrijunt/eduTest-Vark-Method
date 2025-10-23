import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function ResetPassword() {
  const router = useRouter();
  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState<boolean>(false);
  const [isConfirmFocused, setIsConfirmFocused] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const isValid =
    password.length >= 8 && confirm.length >= 8 && password === confirm;

  const clearError = () => setError("");

  const handleSubmit = () => {
    if (!isValid || submitting) return;

    setSubmitting(true);
    setError("");

    // Simulate API call
    setTimeout(() => {
      if (Math.random() < 0.2) {
        // Simulated error
        setSubmitting(false);
        setError("Submission failed. Please try again.");
      } else {
        setSubmitting(false);
        router.push("/signIn");
      }
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header Back Arrow */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#007AFF" />
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.title}>Reset Password</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          Please reset your password to keep your account secure.
        </Text>

        {/* Password Requirements */}
        <Text style={styles.requirements}>
          Password should be at least 8 characters long.
        </Text>

        {/* Password Input */}
        <View style={[styles.inputWrapper, isPasswordFocused && styles.inputWrapperFocused]}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              clearError();
            }}
            editable={!submitting}
            placeholderTextColor="#999"
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(false)}
          />
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => setShowPassword(!showPassword)}
            disabled={submitting}
          >
            <Ionicons
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={24}
              color="#505050"
            />
          </TouchableOpacity>
        </View>

        {/* Confirm Password Input */}
        <View style={[styles.inputWrapper, isConfirmFocused && styles.inputWrapperFocused]}>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={!showConfirm}
            value={confirm}
            onChangeText={(text) => {
              setConfirm(text);
              clearError();
            }}
            editable={!submitting}
            placeholderTextColor="#999"
            onFocus={() => setIsConfirmFocused(true)}
            onBlur={() => setIsConfirmFocused(false)}
          />
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => setShowConfirm(!showConfirm)}
            disabled={submitting}
          >
            <Ionicons
              name={showConfirm ? "eye-off-outline" : "eye-outline"}
              size={24}
              color="#505050"
            />
          </TouchableOpacity>
        </View>

        {/* Error Message */}
        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        {/* Submit Button */}
        <TouchableOpacity
          style={[styles.button, (!isValid || submitting) && styles.buttonDisabled]}
          onPress={handleSubmit}
          disabled={!isValid || submitting}
          activeOpacity={0.8}
        >
          {submitting ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="small" color="#fff" style={{ marginRight: 8 }} />
              <Text style={styles.buttonText}>Submitting...</Text>
            </View>
          ) : (
            <Text style={styles.buttonText}>Submit</Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 50,
    backgroundColor: "#fff",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 18,
    padding: 8,
    zIndex: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#007AFF",
    textAlign: "center",
    marginTop: 50,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 15,
    color: "#7B8BB2",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 22,
    letterSpacing: 0.3,
  },
  requirements: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 20,
    marginBottom: 20,
    height: 48,
  },
  inputWrapperFocused: {
    backgroundColor: "#fff",
    borderColor: "#007AFF",
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 18,
    color: "#1B1B1B",
  },
  iconButton: {
    padding: 4,
  },
  button: {
    backgroundColor: "#007AFF",
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#007AFF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 5,
    marginTop: 0,
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
    shadowOpacity: 0,
    elevation: 0,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
  loadingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  },
});
