import { useQuery, useRealm, useUser } from '@realm/react';
import { Task } from '../models/Task';
import { Pressable, Text, StyleSheet } from 'react-native';

export default function New() {
    const realm = useRealm()
    const tasks = useQuery(Task)


    const deleteTask = () => {
        realm.write(() => {
          realm.delete(tasks);
        });
      };

      return (
        <Pressable style={{ backgroundColor: 'silver' }}
            onPress={deleteTask}>
          <Text> Deletar </Text>
        </Pressable>
      )
}