import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>

      {/* taches du jour */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Taches du jour</Text>
        <View style={styles.items}>
        <Task text={'Tache 1'}/>
        <Task text={'Tache 2'}/>
        <Task text={'Tache 3'}/>
        <Task text={'Tache 4'}/>
        <Task text={'Tache 5'}/>
        </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A4D68',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight:'bold'
  },
  items: {
    marginTop:40,
  },

});
