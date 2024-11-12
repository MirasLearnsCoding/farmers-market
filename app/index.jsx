import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import "../global.css";

export default function HomeScreen() {
  return (
    <View className="flex min-h-full flex-1 flex-col px-6 py-12 lg:px-8">
      <Text className="m-10 text-center text-4xl font-bold tracking-tight text-gray-400">Hello world</Text>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     flex: 1,
//     justifyContent: 'center',
//   }
// })