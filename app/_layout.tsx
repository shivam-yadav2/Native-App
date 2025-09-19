import { Stack } from "expo-router";
import { Drawer } from "expo-router/drawer";
import "../global.css";
export default function RootLayout() {
  return (
    <>
      <Drawer>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Home",
            title: "overview",
          }}
        />
        <Drawer.Screen
          name="about" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "About",
            title: "overview",
          }}
        />
        <Drawer.Screen
          name="profile" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Profile",
            title: "overview",
          }}
        />
      </Drawer>
    </>
  );
}
