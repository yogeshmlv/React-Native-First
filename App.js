import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Task from "./components/Task";
export default function App() {
  return (
    <View style={styles.container}>
      {/* Today Task */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
     

        <View style={styles.items}>
          {/* This is Where the task will go ! */}
          <Task text={'React Native'}/>
        <Task text={'Raect Js'}/>
        <Task text ={'JavaScript'}/>
        <Task text ={'Dealing With Task '}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#E8EAED",
    backgroundColor:"pink"
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
  },
  items: {
    marginTop:50,
  },
});
