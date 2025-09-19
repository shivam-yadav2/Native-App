import MyButton from "@/components/MyButton";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Button,
  FlatList,
} from "react-native";
// import { Image } from 'expo-image';

export default function Tab() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <FlatList
        numColumns={2}
          contentContainerStyle={{
            flex: 1,
            justifyContent: "center",
          }}
          
          data={[
            1, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 1, 2, 12,
            1, 2, 1, 2, 1, 2, 1,
          ]}
          renderItem={(e) => {
            console.log(e);
            return (
              <View
                style={{
                  width: 101,
                  height: 45,
                  backgroundColor: "red",
                  margin: 5,
                  justifyContent:'center',
                  alignItems:'center'
                }}
              >
                <Text>{e.item}</Text>
              </View>
            );
          }}
        />
        <Image
          source={require("../../assets/images/login.jpg")}
          style={{ width: 400, height: 300 }}
        />
        {/* <Image
          source={{
            uri: "https://static.vecteezy.com/system/resources/previews/001/991/652/original/sign-in-page-flat-design-concept-illustration-icon-account-login-user-login-abstract-metaphor-can-use-for-landing-page-mobile-app-ui-posters-banners-free-vector.jpg",
          }}
          style={{ width: 400, height: 300 }}
        /> */}
        <View>
          <TextInput
            placeholder="Enter your name"
            style={{
              height: 40,
              margin: 12,
              borderWidth: 1,
              padding: 10,

              borderRadius: 10,
              width: 350,
            }}
          />
          <TextInput
            placeholder="Enter your email"
            style={{
              height: 40,
              margin: 12,
              borderWidth: 1,
              padding: 10,

              borderRadius: 10,
              width: 350,
            }}
          />

          <Button title="Login Now Here" />
          <MyButton title="Login Now" />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
