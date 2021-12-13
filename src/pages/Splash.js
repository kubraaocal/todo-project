import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {CommonActions} from '@react-navigation/native';

import Api from '../redux/api';
import {useDispatch, useSelector} from 'react-redux';
import {User} from '../redux/actions';

const Splash = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getUser();
    setTimeout(function () {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Title'}],
        }),
      );
    }, 1000);
  });

  const getUser = async () => {
    let res = await Api.instance.login();
    if (res.status == 'success') {
      dispatch(User(res.user));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hoşgeldiniz</Text>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
  },
});
