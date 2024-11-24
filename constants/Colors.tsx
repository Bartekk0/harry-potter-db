/**
 * An object representing the color schemes for the four Hogwarts houses in both light and dark themes.
 * Each house has a set of colors for different UI elements such as primary, secondary, tertiary, quaternary, quinary, background, and text.
 **/
const Colors = {
  gryffindor: {
    light: {
      primary: "#D6A7A1", // lighter red
      secondary: "#F3CFBA", // lighter gold
      tertiary: "#EAE0DA", // complementary light beige
      quaternary: "#FFE0B2", // soft warm tone
      quinary: "#FFF4E3", // pale yellow highlight
      bg: "#FFF8E7", // light background
      text: "#993333", // warm red for text
    },
    dark: {
      primary: "#9C1C00", // deep crimson red
      secondary: "#D4AF37", // rich gold
      tertiary: "#B66D4C", // muted brownish-red
      quaternary: "#735F3F", // darker complementary tone
      quinary: "#493E2B", // accent tone
      bg: "#2A1F1A", // dark brownish background
      text: "#FFFFFF", // white text for contrast
    },
  },
  hufflepuff: {
    light: {
      primary: "#FFF4B2", // pale yellow
      secondary: "#F3E8D8", // creamy beige
      tertiary: "#E3D9AA", // light golden
      quaternary: "#DAD5C0", // soft complementary gray
      quinary: "#F8F3E5", // subtle yellow highlight
      bg: "#FDFBE5", // warm background
      text: "#997A00", // warm brown text
    },
    dark: {
      primary: "#FFBF00", // bold yellow
      secondary: "#8C7B66", // muted brown
      tertiary: "#B08D57", // golden brown
      quaternary: "#7B6747", // darker complementary tone
      quinary: "#4A402F", // deep accent tone
      bg: "#201F1C", // very dark background
      text: "#FFFFFF", // white text for contrast
    },
  },
  ravenclaw: {
    light: {
      primary: "#AAC4E6", // pale blue
      secondary: "#C4C4C4", // light silver
      tertiary: "#D9EBF2", // very light blue
      quaternary: "#BCC4D4", // soft grayish blue
      quinary: "#F3F8FA", // pale highlight
      bg: "#F0F5FA", // light background
      text: "#004080", // muted navy
    },
    dark: {
      primary: "#0E1A40", // dark navy
      secondary: "#606B82", // muted steel gray
      tertiary: "#2E3C54", // darker blue-gray
      quaternary: "#1A2433", // deep complementary tone
      quinary: "#101822", // accent tone
      bg: "#0A0E14", // very dark background
      text: "#FFFFFF", // white text for contrast
    },
  },
  slytherin: {
    light: {
      primary: "#A8C2B7", // pale green
      secondary: "#C8D4C3", // muted light green-gray
      tertiary: "#E5F2E5", // light mint
      quaternary: "#D4E2D1", // muted complementary tone
      quinary: "#F2F8F2", // pale green highlight
      bg: "#EAF7EA", // light background
      text: "#006633", // dark green
    },
    dark: {
      primary: "#115740", // deep green
      secondary: "#4A6056", // dark muted green-gray
      tertiary: "#283F37", // dark forest green
      quaternary: "#1E2F27", // deep complementary tone
      quinary: "#0C1E18", // accent tone
      bg: "#081210", // very dark background
      text: "#FFFFFF", // white text for contrast
    },
    "": {},
  },
};

export type ColorType =
  | "text"
  | "primary"
  | "secondary"
  | "tertiary"
  | "quinary"
  | "quaternary"
  | "text"
  | "bg";

export default Colors;
