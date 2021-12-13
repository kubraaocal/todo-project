import React, {useState, useEffect, useLayoutEffect} from 'react';
import {
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {COLOR} from '../../Default';
import {useDispatch, useSelector} from 'react-redux';
import {deleteTitleStart, loadTodoStart} from '../../redux/actions';
import {useIsFocused} from '@react-navigation/native';

const Todo = props => {
  useEffect(() => {
    dispatch(loadTodoStart());
  }, [useIsFocused()]);

  const dispatch = useDispatch();
  const todos = useSelector(
    state =>
      state.data.todos.filter(s => s.titleId === props.route.params.title.id),
    //title dedğişim şey gelen title değerleri
  );

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: props.route.params.title.title,
      headerRight: () => (
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() =>
              Alert.alert('Sil', 'Silmek istediğine emin misin?', [
                {
                  text: 'Evet',
                  onPress: () => {
                    setTimeout(() => {
                      dispatch(deleteTitleStart(props.route.params.title.id));
                      props.route.params.navigation.navigate('Title');
                    }, 500);
                  },
                },
                {text: 'Hayır'},
              ])
            }>
            <Image
              source={require('../../assets/delete.png')}
              style={{tintColor: COLOR.title, height: 30, width: 30}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginLeft: 10, marginRight: 10}}
            onPress={() => {
              props.route.params.navigation.navigate('EditTitle', {
                item: props.route.params.title,
              });
            }}>
            <Image
              source={require('../../assets/edit.png')}
              style={{tintColor: COLOR.title, height: 30, width: 30}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              props.route.params.navigation.navigate('AddTodo', {
                title: props.route.params.title,
              })
            }>
            <Image
              source={require('../../assets/add_plus.png')}
              style={{tintColor: COLOR.title}}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  });

  const renderItemTitle = ({item}) => (
    <View
      style={{
        padding: 10,
        backgroundColor: item.checked == false ? COLOR.checked : 'grey',
        margin: 5,
        borderRadius: 10,
      }}>
      <TouchableOpacity
        onPress={() =>
          props.route.params.navigation.navigate('EditTodo', {
            title: props.route.params.title,
            item: item,
            navigation: props.route.params.navigation,
          })
        }>
        <View>
          {item.uri != null && (
            <Image
              style={{height: 200, backgroundColor: 'white'}}
              resizeMode="contain"
              source={{
                uri: item.uri,
              }}
            />
          )}
          {item.todo != null && (
            <Text style={{color: 'white', fontSize: 18}}>{item.todo}</Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={todos}
        renderItem={renderItemTitle}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLOR.backgorund,
    padding: 10,
  },
});
