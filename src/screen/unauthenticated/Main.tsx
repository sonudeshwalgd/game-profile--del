import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../../core/components/button/Button';
import RadioButton from '../../core/components/radio/radio';
import TextInput from '../../core/components/input/input';

export default function Main() {
  const [radioOne, setRadioOne] = useState<boolean>(false);
  const [radioTwo, setRadioTwo] = useState<boolean>(false);
  return (
    <LinearGradient
      colors={['#fac85f', '#f25d66']}
      className=" h-[100%] flex-1">
      <ScrollView className="  h-full">
        <Text className="bg-[#cf11ff] py-1 text-white text-center">
          Loreolupta tem, porro nostrum dolores tempora dolorem!
        </Text>
        <View className="flex-row justify-between items-center py-1">
          <Image
            className=""
            source={require('./../../assets/images/logo.png')}
          />
          <TouchableOpacity>
            <Image
              className=""
              source={require('./../../assets/images/lang.png')}
            />
          </TouchableOpacity>
        </View>
        <Image
          className="w-full"
          source={require('./../../assets/images/cro.png')}
        />
        <View className="p-2 px-4 gap-6">
          <Text className="text-white text-center">
            Loreolupta tem, porro nostrum dolores tempora dolorem! Lorem ipsum
            dolor, sit amet consectetur adipisicin
          </Text>

          <View className="flex-row  items-center">
            <Text className="p-4 text-white bg-[#c67b4e] px-8  rounded-xl text-xl  mr-1">
              +966
            </Text>
            <TextInput
              onChangeText={() => {}}
              testID=""
              outerClassName="bg-[#c67b4e]"
            />
          </View>

          <View className="flex-row ">
            <RadioButton
              classname="mr-12 "
              title="2.0 sf sdf sdfs jkj jkjj"
              selected={radioOne}
              setSelected={setRadioOne}
            />
            <RadioButton
              title="2.0 sf sdf sdfs"
              selected={radioTwo}
              setSelected={setRadioTwo}
            />
          </View>

          <View className="flex-row justify-between">
            <Button
              textStyle=" text-xl"
              containerStyle="px-8 bg-[#c30a76] "
              title="Increment"
              onPress={() => {}}
            />
            <Button
              textStyle="text-black text-xl"
              containerStyle="px-8 bg-white "
              title="Decrement"
              onPress={() => {}}
            />
          </View>

          <Text className="text-center">
            Loreolupta tem, porro{' '}
            <Text className="text-white">Lorem, ipsum</Text> te dolor, sit amet
            cons
            <Text className="text-white"> Lorem, ipsum dolor. </Text>
          </Text>
        </View>
        <FooterList />
      </ScrollView>
    </LinearGradient>
  );
}

const FooterList = () => {
  return (
    <>
      <View className="h-[1px] mt-4   rounded-[4px] bg-white" />
      <Text className="text-white px-4 pt-4">Lorem ipsum dolor sit amet.</Text>
      {FooterData.map(ele => (
        <View key={ele} className="flex-row px-4 gap-x-2 items-center ">
          <View className="h-[10px] w-[10px] bg-white rounded-full" />
          <Text className="text-white">{ele}</Text>
        </View>
      ))}
      <View className="mb-4" />
    </>
  );
};

const FooterData = [
  'Lorem ipsum  sit amet.',
  'Lorem ipsum dolor sit amet.FooterData',
  'Lorem  amet.or sit amet',
  'Lorem ipsum dolor sit amet. ipsum dolor sit',
  'Lorem ipsum dol.',
  'Lorem ipsum dolor sit amet.',
];
