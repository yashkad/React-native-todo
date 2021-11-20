import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

const TodoItem = ({item, toggleTodo, deleteTodo}) => {
  return (
    <View
      style={[
        styles.itemContainer,
        {
          backgroundColor: item.isDone ? '#dfe6e9' : '#f5f6fa',
          marginLeft: item.isDone ? 10 : 0,
        },
      ]}>
      <TouchableOpacity
        onPress={() => {
          toggleTodo(item.id);
        }}>
        <View
          style={[
            styles.done,
            {
              backgroundColor: item.isDone ? '#A3CB38' : '#dcdde1',
            },
          ]}></View>
      </TouchableOpacity>
      <Text
        style={[
          styles.listText,
          {
            textDecorationLine: item.isDone ? 'line-through' : 'none',
          },
        ]}>
        {item.todoText}
      </Text>
    </View>
  );
};

export default TodoItem;
