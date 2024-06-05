import { Stack } from 'expo-router';
import TaskBoard from '../components/TaskBoard';

import { Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Project Board' }} />
      <TaskBoard />
    </>
  );
}
