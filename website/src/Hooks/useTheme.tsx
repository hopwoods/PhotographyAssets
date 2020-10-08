import { useStateContext } from "../GlobalState";

export interface IThemeColors {
  text: string;
  textInverse: string;
  primary: string;
  primaryShades: string;
  lightShades: string;
  lightAccent: string;
  darkShades: string;
  darkAccent: string;
  bodyBackground: string;
  Grey1: string;
  Grey2: string;
  Grey3: string;
  labelColour: string;
  disabledColour: string;
  toggleColour: string;
  white: string;
  green: string;
}

const DarkTheme: IThemeColors = {
  text: "#E4E4E4",
  textInverse: "#3e3e3e",
  primary: "#B55C53",
  primaryShades: "#a74c43",
  lightShades: "#F3F7FA",
  lightAccent: "#E07851",
  darkShades: "#3E4148",
  darkAccent: "#AF9EA8",
  bodyBackground: "rgb(20, 20, 24)",
  Grey1: "#dedede",
  Grey2: "rgba(255, 255, 255, 0.7)",
  Grey3: "#1C1D20",
  labelColour: "#bbb",
  disabledColour: "#ddd",
  toggleColour: "#2F855A",
  white: "#fff",
  green: "#387D4D",
};

const LightTheme: IThemeColors = {
  text: "#2e2e2e",
  textInverse: "#1e1e1e",
  primary: "#B55C53",
  primaryShades: "#a74c43",
  lightShades: "#F3F7FA",
  lightAccent: "#AFB1B0",
  darkShades: "#C3C3C3",
  darkAccent: "#A99A83",
  bodyBackground: "#FEFEFE",
  Grey1: "#dedede",
  Grey2: "#1e1e1e",
  Grey3: "#D7D7D7",
  labelColour: "#bbb",
  disabledColour: "#ddd",
  toggleColour: "#2F855A",
  white: "#fff",
  green: "#387D4D",
};

export default function useTheme(): IThemeColors {
  const { globalState: state } = useStateContext();
  const { darkMode } = state;

  const theme = darkMode ? DarkTheme : LightTheme;

  return theme;
}
