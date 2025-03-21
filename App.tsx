import {
  Alert,
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';

const App = () => {
  const theme = useColorScheme();

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta neque
        asperiores dolore, adipisci tempora magni nesciunt necessitatibus.
        Itaque, ad rerum!sdsxx
      </Text>
      <Image
        style={styles.img}
        source={{
          uri: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
        }}
      />
      <Pressable onPress={() => Alert.alert('Hello W')} style={styles.btn}>
        <Text>Click me nows</Text>
      </Pressable>
      <Text>{theme}</Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
  },
  img: {width: 200, height: 200},
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
