import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {createTitleStart, createTodoStart} from '../../redux/actions';
import DocumentPicker from 'react-native-document-picker';
import {COLOR} from '../../Default';

const AddTitle = props => {
  const valueTitle = props.route.params.titleDifrent;
  //  console.log('gelen veriler ', valueTitle);

  const [text, setText] = useState(null);
  const [title, setTitle] = useState({title: ''});
  const [todo, setTodo] = useState({title: '', todo: '', uri: ''});
  const [document, setDocument] = useState(null);
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Başlık Ekle"
        multiline={true}
        textAlignVertical="top"
        style={styles.input}
        onChangeText={text => setText(text)}></TextInput>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (text != null) {
            console.log('Girdi');
            title.title = text;
            dispatch(createTitleStart(title));
            setTimeout(() => props.navigation.navigate('Title'), 1000);
          }
        }}>
        <Text style={styles.text}>Kaydet</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AddTitle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.backgorund,
  },
  button: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    width: '90%',
    backgroundColor: COLOR.title,
  },
  input: {
    borderWidth: 1,
    width: '90%',
    margin: 10,
    height: 200,
    borderRadius: 10,
    padding: 10,
  },
  text: {
    textAlign: 'center',
    color: COLOR.backgorund,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
