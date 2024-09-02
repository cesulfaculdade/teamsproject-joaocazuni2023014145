import { Teams } from "@screens/Teams";
import { ThemeProvider } from "styled-components";
import theme from "@theme/index";
import { useFonts } from "expo-font";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { StatusBar } from "react-native";
import { Loading } from "@components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar />
      {!fontsLoaded ? <Teams /> : <Loading />}
    </ThemeProvider>
  );
}
