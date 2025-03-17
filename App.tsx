import React from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';

const App = () => {
  return (
    <View>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta neque
        asperiores dolore, adipisci tempora magni nesciunt necessitatibus.
        Itaque, ad rerum!sds
      </Text>
      <Image
        style={{width: 200, height: 200}}
        source={{
          uri: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
        }}
      />
      <TouchableOpacity
        onPress={() => Alert.alert('Hello')}
        style={{backgroundColor: 'red', padding: 10, borderRadius: 5}}>
        <Text>Click me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
