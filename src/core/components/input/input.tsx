import {ReactNode, useEffect, useRef} from 'react';
import React from 'react';
import {
  View,
  TextInput as Input,
  Text,
  TouchableOpacity,
  TextInputProps,
  StyleProp,
  TextStyle,
} from 'react-native';

interface InputProps extends TextInputProps {
  onViewPress?: () => any | void;
  error?: string;
  inputValue?: any;
  icon?: ReactNode;
  onChangeText: (v: any) => void;
  iconRight?: boolean;
  iconLeft?: boolean;
  inputClassname?: string;
  outerClassName?: string;
  type?: string;
  options?: any;
  inputStyle?: StyleProp<TextStyle> | undefined;
  onSubmitEditing?: () => any;
  onBlur?: () => any | void;
  onFocus?: () => any | void;
  testID: string;
  blur?: boolean;
  label?: string;
}

const TextInput = ({
  value = '',
  placeholder = '',
  onViewPress = () => {},
  error = '',
  inputValue = '',
  icon = <View></View>,
  onChangeText = () => {},
  secureTextEntry = false,
  iconRight = false,
  iconLeft = false,
  editable = true,
  numberOfLines = 1,
  inputClassname = '',
  outerClassName = '',
  placeholderTextColor = '#000000',
  inputStyle = {},
  keyboardType = 'default',
  onSubmitEditing = () => {},
  onBlur = () => {},
  maxLength = undefined,
  onFocus = () => {},
  testID = '',
  blur = false,
  label = '',
  autoCapitalize = 'sentences',
}: InputProps) => {
  const viewRef: any = useRef(null);
  const onPress = () => {
    viewRef.current.focus();
  };

  useEffect(() => {
    viewRef.current.blur();
  }, [blur]);

  return (
    <View className="flex-1">
      {label && <Text className="mb-2">{label}</Text>}
      <TouchableOpacity
        onPress={() => {
          onPress();
          onViewPress();
        }}
        activeOpacity={1}
        className={
          'overflow-hidden border-BorderLight  rounded-2xl p-2 px-4 bg-white ' +
          ' ' +
          outerClassName
        }>
        {iconLeft && <View className="pr-1 ">{icon}</View>}
        <Input
          // ref={innerRef}
          textAlignVertical="center"
          testID={testID}
          ref={viewRef}
          onChangeText={onChangeText}
          defaultValue={value}
          placeholder={placeholder}
          value={inputValue}
          secureTextEntry={secureTextEntry}
          onBlur={onBlur}
          autoCapitalize={autoCapitalize}
          onFocus={onFocus}
          style={{color: '#000', fontSize: 18, ...inputStyle}}
          placeholderTextColor={placeholderTextColor}
          onSubmitEditing={onSubmitEditing}
          editable={editable}
          keyboardType={keyboardType}
          numberOfLines={numberOfLines}
          className={`flex overflow-hidden ${inputClassname}`}
          maxLength={maxLength}
        />
        {iconRight && <View className="pl-1 ">{icon}</View>}
      </TouchableOpacity>
      {error && <Text className="mt-1">{error}</Text>}
    </View>
  );
};

export default TextInput;
