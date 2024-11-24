import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Define the types for the context state
interface GlobalContextType {
  theme: Theme;
  setTheme: (value: Theme) => void;
  house: House;
  setHouse: (value: House) => void;
  name: string;
  setName: (value: string) => void;
  sorting: {
    by: string;
    order: boolean;
  };
  setSorting: (value: any) => void;
  filters: { filter: string; value: string }[];
  setFilters: (value: any) => void;
  search: string;
  setSearch: (value: string) => void;
}
export type House = "gryffindor" | "hufflepuff" | "ravenclaw" | "slytherin";
export type Theme = "light" | "dark";

// Create the context with a default value of `undefined`
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// Define the props for the provider
interface GlobalProviderProps {
  children: ReactNode;
}

// Create the provider component
export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>();
  const [name, setName] = useState<string>("");
  const [house, setHouse] = useState<House>("gryffindor");
  const [sorting, setSorting] = useState({ by: "name", order: true });
  const [filters, setFilters] = useState([{ filter: "", value: "" }]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadData = async () => {
      const storedTheme = await AsyncStorage.getItem("theme");
      const storedName = await AsyncStorage.getItem("name");
      const storedHouse = await AsyncStorage.getItem("house");

      if (storedTheme) setTheme(storedTheme as Theme);
      if (storedName) setName(storedName);
      if (storedHouse) setHouse(storedHouse as House);
    };

    loadData();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("theme", theme || "");
  }, [theme]);

  useEffect(() => {
    AsyncStorage.setItem("name", name);
  }, [name]);

  useEffect(() => {
    AsyncStorage.setItem("house", house || "");
  }, [house]);

  return (
    <GlobalContext.Provider
      value={{
        theme: theme || "light",
        setTheme: setTheme,
        name: name,
        setName: setName,
        house: house!,
        setHouse: setHouse,
        sorting: sorting,
        setSorting: setSorting,
        filters: filters,
        setFilters: setFilters,
        search: search,
        setSearch: setSearch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook for consuming the context
export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};

// What api is user using
// https://hp-api.herokuapp.com/api
// https://potterapi-fedeperin.vercel.app/en
// https://api.potterdb.com/v1/
// https://wizard-world-api.herokuapp.com/
// It might be everything

// Color theme
// Language (for specific api)
//
