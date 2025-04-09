import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "#333",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  errorText: {
    color: "red",
    marginBottom: 15,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  calculateButton: {
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
  },
  resetButton: {
    backgroundColor: "#95a5a6",
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginLeft: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  resultContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
    alignItems: "center",
    borderWidth: 2,
  },
  resultTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  imcValue: {
    fontSize: 18,
    marginVertical: 5,
  },
  classification: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 5,
  },
  infoContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  infoRow: {
    flexDirection: "row",
    marginBottom: 8,
  },
  infoKey: {
    flex: 1,
    fontWeight: "500",
    color: "#444",
  },
  infoValue: {
    flex: 1,
    color: "#666",
  },
});
