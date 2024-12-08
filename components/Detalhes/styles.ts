import { Button, StyleSheet } from "react-native";
import theme from "../../style/Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  map: {
    height: 200,
    width: "100%",
  },
  navigateButton: {
    position: "absolute",
    top: 115,
    left: "0%",
    right: "10%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    elevation: 5,
    width: 350,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: "bold",
    top: 10,
  },
  buttonSubtitle: {
    fontSize: 12,
    color: "gray",
    top: 10,
  },
  horarios: {
    marginTop: 50,
    paddingHorizontal: 20,
    textAlign: "left",
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  contactLink: {
    fontSize: 16,
    color: theme.colors.darkGray,
    fontWeight: "bold",
    textDecorationLine: "none",
    margin: -160,
    left: "75%",
  },
  whatsappIcon: {
    width: 20,
    height: 20,
    margin: 138,
    marginLeft: 200,
  },
  funcionamento: {
    marginTop: 20,
  },
  dia: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  horas: {
    fontWeight: "bold",
  },
  container_horarios: {
    padding: 20,
  },
  strong: {
    fontWeight: "bold", // Estilo para o equivalente ao <strong>
    fontSize: 16,
  },
  span: {
    fontWeight: "normal", // Estilo para o equivalente ao <span>
    fontSize: 14,
    color: "gray", // Personalize conforme necessário
  },
  infocontato: {
    marginBottom: 20,
    top: 10,
    left: "10%",
  },
  gps: {
    left: "110%",
    top: "-25%",
  },
  divisoria: {
    position: "absolute",
    height: 82, // Altura da barra
    backgroundColor: theme.colors.darkGray, // Cor da barra
    width: 1, // Largura da barra
    marginVertical: 0, // Espaçamento acima e abaixo da barra
    left: "105%",
    top: "-15%",
  },
  bar_1: {
    position: "absolute",
    height: 1, // Altura da barra
    backgroundColor: theme.colors.gray, // Cor da barra
    width: 300, // Largura da barra
    marginVertical: -2, // Espaçamento acima e abaixo da barra
    top: -165,
  },
  bar_2: {
    top: -130,
    height: 1, // Altura da barra
    backgroundColor: theme.colors.gray, // Cor da barra
    width: 300, // Largura da barra
    marginVertical: 0, // Espaçamento acima e abaixo da barra
  },
});
