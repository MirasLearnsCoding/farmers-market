import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import "../global.css";
import {Link} from 'expo-router'
import { StatusBar } from 'react-native-web';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-primary h-full">
        <View className="flex min-h-full flex-1 flex-col px-6 py-12 lg:px-8">
            <Text className="m-10 text-center text-4xl font-bold tracking-tight text-gray-400">Hello world</Text>
            <StatusBar style="auto"/>
            <Link href="/profile" style={{color: 'blue'}}>go to profile</Link>
        </View>
    </SafeAreaView>
    
  );
}