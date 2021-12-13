import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Splash from './Splash';
import Title from './title/Title';
import Todo from './todo/Todo';
import AddTitle from './title/AddTitle';
import EditTitle from './title/component/EditTitle';
import AddTodo from './todo/AddTodo';
import EditTodo from './todo/component/EditTodo';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShadowVisible:false,headerTitleAlign:"center"}}>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
        <Stack.Screen name="Title" component={Title} options={{title:"BAŞLIKLAR"}}/>
        <Stack.Screen name="AddTitle" component={AddTitle} options={{title:"BAŞLIK EKLE"}}/>
        <Stack.Screen name="Todo" component={Todo} options={{title:"NOTLAR"}}/>
        <Stack.Screen name="EditTitle" component={EditTitle} options={{title:"BAŞLIK DÜZENLE"}}/>
        <Stack.Screen name="EditTodo" component={EditTodo} options={{title:"NOT DÜZENLE"}}/>
        <Stack.Screen name="AddTodo" component={AddTodo} options={{title:"NOT EKLE"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
