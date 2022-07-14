import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableWithoutFeedback, 
  TouchableOpacity, 
  TouchableHighlight, 
  TouchableNativeFeedback, 
  Image, 
  SafeAreaView } from 'react-native';

export default function App() {
  const handlePress = () => console.log("Text pressed");
  
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello React Native - A really really long text. Now even longer and see what happens!
        </Text>
        <TouchableNativeFeedback onPress={() => console.log("Image tapped")}>
          <Image 
            blurRadius={10}
            fadeDuration={1000}
            source={{
              height: 300,
              width: 300,
              uri: "https://picsum.photos/200/300",
            }}/>
          </TouchableNativeFeedback>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
