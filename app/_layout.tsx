import { Stack } from "expo-router";
import { Drawer } from 'expo-router/drawer';
export default function RootLayout() {
  return <>
  {/* <Stack screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
   
  </Stack> */}
  <Drawer>
      <Drawer.Screen
        name="index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Home',
          title: 'overview',
        }}
      />
      <Drawer.Screen
        name="about" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'About',
          title: 'overview',
        }}
      />
      <Drawer.Screen
        name="profile" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Profile',
          title: 'overview',
        }}
      />
    </Drawer>
  </>
}
