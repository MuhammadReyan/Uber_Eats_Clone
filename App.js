import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import RestaurantDetail from './screens/RestaurantDetail';
import RootNavigation from './navigation/navigation';


export default function App() {
  // return (

  //   <View style={styles.container}>
  //     {/* <RestaurantDetail /> */}
  //     <Home />
  //   </View>






  // );


  return <RootNavigation  />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
