import React, {useEffect, useLayoutEffect} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLOR} from '../../Default';
import {useDispatch, useSelector} from 'react-redux';
import {loadStart} from '../../redux/actions';
import {useIsFocused} from '@react-navigation/native';

const Title = ({navigation}) => {
  useEffect(() => {
    dispatch(loadStart());
  }, [useIsFocused()]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('AddTitle', {titleDifrent: 'null'})
            }>
            <Image source={require('../../assets/add_plus.png')} style={{tintColor:COLOR.title}}/>
          </TouchableOpacity>
        </View>
      ),
    });
  });

  const dispatch = useDispatch();
  const titles = useSelector(state => state.data.titles);
  const renderItemTitle = ({item}) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Todo', {
          title: item,
          navigation: navigation,
        })
      }>
      <View style={{padding: 10}}>
        <Text style={styles.text}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={titles}
        renderItem={renderItemTitle}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={()=><View style={{height:1,backgroundColor:"grey"}}/>}
      />
    </SafeAreaView>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLOR.backgorund,padding:5},
  text: {color: COLOR.title, fontWeight: 'bold', fontSize: 22},
});
