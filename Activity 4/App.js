import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TextInputExample = () => {
  const [text, onChangeText] = React.useState('Name: ');
  const [number, onChangeNumber] = React.useState('');
  const [text1, onChangeText1] = React.useState('Address: ');
  const [text2, onChangeText2] = React.useState('School: ');
  const [text3, onChangeText3] = React.useState('Course: ');
  const [text4, onChangeText4] = React.useState('Email: ');
  const [text5, onChangeText5] = React.useState('Contact No: ');
  const [value, onChangeText6] = React.useState('About Me: ');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.inputContainer}>
          <Icon name="person" size={24} color="green" style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Name"
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="check" size={24} color="yellow" style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="AGE"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="circle" size={24} color="violet" style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText1}
            value={text1}
            placeholder="Address"
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="straight" size={24} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText2}
            value={text2}
            placeholder="School"
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="message" size={24} color="blue" style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText3}
            value={text3}
            placeholder="Course"
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="email" size={24} color="pink" style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText4}
            value={text4}
            placeholder="Email"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="person" size={24} color="brown" style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText5}
            value={text5}
            placeholder="Contact No"
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="circle" size={24} color="orange" style={styles.icon} />
          <TextInput
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
            onChangeText={text => onChangeText6(text)}
            value={value}
           style={[styles.textInput, {margin: 1, borderWidth: 4, padding: 10, borderColor: 'yellow'}]}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  icon: {
    marginRight: 12,
  },
  input: {
    height: 40,
    borderWidth: 3,
    padding: 10,
    flex: 2,
  },
  textInput: {
    height: 100,
    borderWidth: 8,
    padding: 10,
    flex: 1,
  },
});

export default TextInputExample;