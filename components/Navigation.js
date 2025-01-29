import * as React from "react"
import { StyleSheet, View, Text } from "react-native"
import { NavigationContainer, useNavigation } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Button } from "@react-navigation/elements"
import { Feed } from "./Feed"
import { SignUp } from "./SignUp"

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

// --- Main screens ---
const FeedScreen = () => (
  <Feed/>
)

const ProfileScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Profile</Text>
  </View>
)

// --- Onboarding screens ---
const SignInScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Sign In</Text>
      <Button onPress={() => navigation.navigate("SignUp")}>Sign In</Button>
    </View>
  )
}
const SignUpScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Sign Up</Text>
      <Button onPress={() => navigation.navigate("Main")}>Sign up</Button>
    </View>
  )
}

// --- App ---
const MainNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={FeedScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
)

export const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Main" component={MainNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
)

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
})
