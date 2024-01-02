import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import HorizontalCarousal from "./src/components/HorizontalCarousal";

const data = [
  {
    id: 0,
    title: "Lady with a Teddy",
    image: "https://images.pexels.com/photos/3348748/pexels-photo-3348748.jpeg",
  },
  {
    id: 1,
    title: "Girl with camera",
    image: "https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg",
  },
  {
    id: 2,
    title: "Beautiful Girl with Glasses",
    image: "https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg",
  },
  {
    id: 3,
    title: "Redhead with frackles",
    image: "https://images.pexels.com/photos/3228213/pexels-photo-3228213.jpeg",
  },
  {
    id: 4,
    title: "Girl in black dress",
    image: "https://images.pexels.com/photos/1385472/pexels-photo-1385472.jpeg",
  },
  {
    id: 5,
    title: "Girl Sitting on Chair",
    image: "https://images.pexels.com/photos/4725133/pexels-photo-4725133.jpeg",
  },
  {
    id: 6,
    title: "Girl Sitting on Chair",
    image: "https://images.pexels.com/photos/4725133/pexels-photo-4725133.jpeg",
  },
];

export const galleryData = [
  {
    id: 1,
    image: require("./assets/img1.png"),
  },
  {
    id: 2,
    image: require("./assets/img1.png"),
  },
  {
    id: 3,
    image: require("./assets/img1.png"),
  },
  {
    id: 4,
    image: require("./assets/img1.png"),
  },
];
export default function App() {
  return (
    <SafeAreaView>
      <HorizontalCarousal data={galleryData} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
