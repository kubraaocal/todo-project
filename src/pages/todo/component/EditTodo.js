import React, {useState, useLayoutEffect} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {deleteTodoStart, updateTodoStart} from '../../../redux/actions';
import {COLOR} from '../../../Default';
import {launchImageLibrary} from 'react-native-image-picker';

const EditTodo = props => {
  const dispatch = useDispatch();
  const [text, setText] = useState(props.route.params.item.todo);
  const [todo, setTodo] = useState({
    titleId: '',
    todo: '',
    uri: '',
    checked: '',
  });
  const [document, setDocument] = useState(props.route.params.item.uri);

  const id = props.route.params.item.id;

  const library = () => {
    launchImageLibrary({mediaType: 'photo', includeBase64: true}, image => {
      setDocument(`data:image/jpeg;base64,${image.assets[0].base64}`);
    });
  };

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: props.route.params.item.todo,
      headerRight: () => (
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() =>
              Alert.alert('Sil', 'Silmek istediğine emin misin?', [
                {
                  text: 'Evet',
                  onPress: () => {
                    setTimeout(() => {
                      dispatch(deleteTodoStart(props.route.params.item.id));
                      props.route.params.navigation.navigate('Todo', {
                        title: props.route.params.title,
                        navigation: props.route.params.navigation,
                      });
                    }, 500);
                  },
                },
                {text: 'Hayır'},
              ])
            }>
            <Image
              source={require('../../../assets/delete.png')}
              style={{tintColor: COLOR.title, height: 30, width: 30}}
            />
          </TouchableOpacity>
          {!props.route.params.item.checked && (
            <TouchableOpacity
              style={{marginLeft: 10}}
              onPress={() => {
                todo.titleId = props.route.params.title.id;
                todo.todo = text;
                todo.uri = document;
                todo.checked = true;
                dispatch(updateTodoStart({id, todo}));
                setTimeout(
                  () =>
                    props.navigation.navigate('Todo', {
                      title: props.route.params.title,
                      navigation: props.route.params.navigation,
                    }),
                  1000,
                );
              }}>
              <Image
                source={require('../../../assets/tick.png')}
                style={{tintColor: COLOR.title, height: 30, width: 30}}
              />
            </TouchableOpacity>
          )}
        </View>
      ),
    });
  });

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
      {!props.route.params.item.checked && (
        <TextInput
          placeholder="Başlık Ekle"
          multiline={true}
          textAlignVertical="top"
          style={styles.input}
          onChangeText={text => setText(text)}>
          {props.route.params.item.todo}
        </TextInput>
      )}
      {props.route.params.item.checked && (
        <Text>{props.route.params.item.todo}</Text>
      )}
      {!props.route.params.item.checked && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (text != null || document != null) {
              todo.titleId = props.route.params.title.id;
              todo.todo = text;
              todo.uri = document;
              dispatch(updateTodoStart({id, todo}));
              setTimeout(
                () =>
                  props.navigation.navigate('Todo', {
                    title: props.route.params.title,
                    navigation: props.navigation,
                  }),
                1000,
              );
            }
          }}>
          <Text style={styles.text}>Kaydet</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default EditTodo;

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
