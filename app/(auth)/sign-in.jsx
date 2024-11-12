import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants'
import FormField from '../../components/FormField'
import { useState } from 'react'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'


const SignIn = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
      });
  
    return (
    <SafeAreaView className="bg-primary h-full">
        <ScrollView>
            <View className="w-full justify-center h-full px-4 my-6">
                <Image source={images.logo} resizeMode='contain' style={{width:150, height:65}}/>
                <Text className="text-2xl font-semibold text-white mt-10 font-psemibold pl-5">
                    Log in
                </Text>
                <FormField 
                    title="Email"
                    value={form.email}
                    handleChangeText={(e) => setForm({ ...form, email: e })}
                    otherStyles="mt-7"
                    keyboardType="email-address"
                />

                <FormField
                    title="Password"
                    value={form.password}
                    handleChangeText={(e) => setForm({ ...form, password: e })}
                    otherStyles="mt-7"
                />

                <CustomButton
                    title="Sign In"
                    containerStyles="mt-7"
                />
                <Text className="text-2xl font-semibold text-white mt-10 font-psemibold pl-5">Don't have an account?
                    Sign up as: <Link className="text-2xl font-semibold text-blue-700 mt-10 font-psemibold pl-5" href={"/sign-up"}>
                    Farmer
                </Link>   or <Link className="text-2xl font-semibold text-blue-700 mt-10 font-psemibold pl-5" href={"/sign-up"}>
                    Buyer
                </Link>
                </Text>
                
                

            </View>
        </ScrollView>

    </SafeAreaView>
  )
}

export default SignIn