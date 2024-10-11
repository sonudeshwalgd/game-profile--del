import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export default function RadioButton({
  setSelected,
  selected,
  title,
  classname,
}: any) {
  return (
    <TouchableOpacity
      onPress={() => setSelected((cur: any) => !cur)}
      className={`flex-row gap-x-2 ${classname} `}>
      <View className="h-[26px] w-[26px]  border-black border-2 justify-center items-center rounded-full">
        <View
          className={`h-[18px] w-[18px] ${
            selected && 'bg-black'
          } rounded-full `}
        />
      </View>
      <Text className="text-white">{title}</Text>
    </TouchableOpacity>
  );
}
