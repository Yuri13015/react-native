import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      {/* taches du jour */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Taches du jour</Text>
        <View style={styles.items}>

        </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#874C62',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight:'bold'
  },
  items: {},

});
