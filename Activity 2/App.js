import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [name, onChangeName] = React.useState('Name:');
  const [age, onChangeAge] = React.useState('');
const [address, onChangeAddress] = React.useState('Address:');
  const [school, onChangeSchool] = React.useState('');
const [course, onChangeCourse] = React.useState('Course:');
  const [email, onChangeEmail] = React.useState('');
  const [contact, onChangeContact] = React.useState('Contact No.:');
const [value, onChangeText] = React.useState('About Myself:');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={name}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAge}
          value={age}
          placeholder="Age:"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAddress}
          value={address}
          />
        <TextInput
          style={styles.input}
          onChangeText={onChangeSchool}
          value={school}
          placeholder="School:"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeCourse}
          value={course}
          />
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Email:"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeContact}
          value={contact}
          />
           <TextInput
          editable
          multiline={true}
          numberOfLines={2}
          maxLength={500}
          onChangeText={text => onChangeText(text)}
          value={value}
          style={styles.input, { borderWidth: 5, borderColor: 'yellow', borderRadius: 3, padding: 15, margin: 12}}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 45,
    margin: 12,
    borderWidth: 3,
    padding: 12,
  },
});

export default TextInputExample;
