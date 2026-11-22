import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingTop: 8,
    paddingBottom: 12,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 110,
  },
  imageLogo: {
    width: "60%",
    height: 68,
  },
  headerSubtitle: {
    color: "#01A6B3",
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 2,
    marginTop: 4,
  },
  detailsBox: {
    alignItems: "center",
    marginBottom: 8,
  },
  rankText: {
    color: "#01A6B3",
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 2,
  },
  consoleBrand: {
    color: "#CCCCCC",
    fontWeight: "400",
    fontSize: 15,
    fontStyle: "italic",
  },
  consoleName: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 2,
  },
  consolePhotoWrapper: {
    flex: 1,
    width: "100%",
    backgroundColor: "#2A2A2E",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 4,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  priceLabelContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 36,
    alignItems: "center",
    marginTop: 8,
  },
  priceLabel: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
});