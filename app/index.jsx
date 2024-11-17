import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import "../global.css";
import { StatusBar } from 'react-native-web';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from "../components/CustomButton";
import { Redirect, router } from "expo-router";


export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-primary h-full">
        <View className="w-full flex justify-center items-center h-full px-4">
            <Image
              source={images.logo}
              className="w-[130px] h-[84px]"
              resizeMode="contain"
            />
            <Text className="m-10 text-center text-3xl font-bold tracking-tight text-gray-400">The best products from local farms!</Text>
            <StatusBar style="auto"/>
            <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
            />
        </View>
    </SafeAreaView>
    
  );
}