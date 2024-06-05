import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const YourScreen = () => {
  return (
    <View className='items-center bg-blue-50 h-screen'>
    <Text className='navbar w-full file:text-left text-3xl font-bold m-8 file:ml-10'> Definicao de rotas </Text>
    
    <View className='flex flex-row m-6 justify-center rounded-lg'>
      <View className={`w-full bg-white p-4 rounded-lg shadow-md`}>
        <Text className={`text-2xl font-bold mb-8`}>Rotas</Text>
        <ScrollView className={`h-64`}>
          <View className={`p-2 border-b border-gray-200`}>
            <Text className={`text-lg`}> Av dos Estados</Text>
          </View>
          <View className={`p-2 border-b border-gray-200`}>
            <Text className={`text-lg`}> Quinta Avenida</Text>
          </View>
          <View className={`p-2 border-b border-gray-200`}>
            <Text className={`text-lg`}> Shopping BCS</Text>
          </View>
          <View className={`p-2 border-b border-gray-200`}>
            <Text className={`text-lg`}> Av Atlantica</Text>
          </View>
          <View className={`p-2 border-b border-gray-200`}>
            <Text className={`text-lg`}> Terceira Avenida</Text>
          </View>
        </ScrollView>
      </View>
    </View>
    </View>
  );
};

export default YourScreen;
