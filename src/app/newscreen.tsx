import { View, Text, Button } from 'react-native';
import { useQuery, useUser } from '@realm/react';
import { Task } from '../models/Task';
import Geti from '../components/Geti';

export default function newscreen(task:Task) {
  const user = useUser();


  return (
    <View>
        <Geti/>
    </View>
  );
}

//  <Text style={{ color: 'blue' }}>{user.id}</Text>
