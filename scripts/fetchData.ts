// import * as FileSystem from "expo-file-system";

export default async function fetchData(url: string): Promise<any> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error(`Error fetching data from URL: ${url}`, error);
    return null; // Return null or a default value to prevent the application from stopping
  }
}

// export async function writeDataToFile(
//   data: any,
//   filePath: string
// ): Promise<void> {
//   const path = `${FileSystem.documentDirectory}${filePath}`;
//   try {
//     await Film eSystem.writeAsStringAsync(path, JSON.stringify(data, null, 2), {
//       encoding: FileSystem.EncodingType.UTF8,
//     });
//   } catch (error) {
//     console.error(`Error writing file to path: ${filePath}`, error);
//     throw error;
//   }
// }

// export async function readDataFromFile(filePath: string): Promise<any> {
//   const path = `${FileSystem.documentDirectory}${filePath}`;
//   try {
//     const data = await FileSystem.readAsStringAsync(path, {
//       encoding: FileSystem.EncodingType.UTF8,
//     });
//     return JSON.parse(data);
//   } catch (error) {
//     console.error(`Error reading file from path: ${filePath}`, error);
//     return null; // Return null or a default value to prevent the application from stopping
//   }
// }

// export default async function fetchDataAndWriteToFile(
//   url: string,
//   filePath: string
// ): Promise<void> {
//   try {
//     const data = await fetchData(url);
//     if (data) {
//       await writeDataToFile(data, filePath);
//     }
//   } catch (error) {
//     console.error(`Error fetching data and writing to file: ${filePath}`, error);
//     throw error;
//   }
// }

// Example usage:
// fetchDataAndWriteToFile("https://api.potterdb.com/v1/characters", "characters.json");
