import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {COLOR} from '../../../Default';
import {updateTitleStart, updateTodoStart} from '../../../redux/actions';

const EditTitle = props => {
  const dispatch = useDispatch();
  const [text, setText] = useState(null);
  const [title, setTitle] = useState({id: '', title: ''});

  const id = props.route.params.item.id;

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Başlık Ekle"
        multiline={true}
        textAlignVertical="top"
        style={styles.input}
        onChangeText={text => setText(text)}>
        {props.route.params.item.title}
      </TextInput>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (text != null) {
            console.log('Girdi');
            title.title = text;
            title.id = id;
            dispatch(updateTitleStart({id, title}));
            setTimeout(
              () =>
                props.navigation.navigate('Todo', {
                  title: title,
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

export default EditTitle;

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
  text: {
    textAlign: 'center',
    color: COLOR.backgorund,
    fontWeight: 'bold',
    fontSize: 20,
  },
  button: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    width: '90%',
    backgroundColor: COLOR.title,
  },
});
