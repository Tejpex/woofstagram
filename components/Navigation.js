import * as React from "react"
import { StyleSheet, View, Text, Image } from "react-native"
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

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require("../assets/favicon.png")}
    />
  )
}

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
      <Text style={styles.title}>Welcome to Woofstagram!</Text>
      <Button onPress={() => navigation.navigate("SignUp", {name: "Awesome!"})}>Sign In</Button>
    </View>
  )
}

// --- App ---
const MainNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false}}>
    <Tab.Screen
      name="Feed"
      component={FeedScreen}
      options={({ route }) => ({
        title: route.params.name,
      })}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
    />
  </Tab.Navigator>
)

export const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
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
