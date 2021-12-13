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
import {COLOR} from '../../Default';
import {launchImageLibrary} from 'react-native-image-picker';

const AddTodo = props => {
  const valueTitle = props.route.params.title;
  console.log('gelen title ', valueTitle);

  const library = () => {
    launchImageLibrary({mediaType: 'photo', includeBase64: true}, image => {
      setDocument(`data:image/jpeg;base64,${image.assets[0].base64}`);
    });
  };

  const [text, setText] = useState(null);
  const [todo, setTodo] = useState({
    titleId: '',
    todo: '',
    uri: '',
    checked: '',
  });
  const [document, setDocument] = useState(null);
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={{borderWidth: 1, borderRadius: 10, padding: 10}}
        onPress={library}>
        <Image
          style={{height: 200, width: 250, backgroundColor: 'white'}}
          resizeMode="contain"
          source={{
            uri:
              document != null
                ? document
                : 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
          }}
        />
      </TouchableOpacity>
      <TextInput
        placeholder="Başlık Ekle"
        multiline={true}
        textAlignVertical="top"
        style={styles.input}
        onChangeText={text => setText(text)}></TextInput>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (text != null || document != null) {
            todo.titleId = valueTitle.id;
            todo.todo = text;
            todo.uri = document;
            todo.checked = false;
            dispatch(createTodoStart(todo));
            setTimeout(
              () =>
                props.navigation.navigate('Todo', {
                  title: valueTitle,
                  navigation: props.navigation,
                }),
              1000,
            );
          }
        }}>
        <Text style={styles.text}>Kaydet</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.backgorund,
  },
  input: {
    borderWidth: 1,
    width: '90%',
    margin: 10,
    height: 200,
    borderRadius: 10,
    padding: 10,
  },
  button: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    width: '90%',
    backgroundColor: COLOR.title,
  },
  text: {
    textAlign: 'center',
    color: COLOR.backgorund,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
