import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';
import {todoActions} from '../../myStore/todo-store/action';
import TodoItem from '../todo-tile';
import {SwipeListView} from 'react-native-swipe-list-view';

const Todo = props => {
  const [todo, setTodo] = useState('');

  const onSubmit = () => {
    props.addTodo(todo);
    setTodo('');
  };

  const renderItem = data => {
    return (
      <TodoItem
        key={data.item.id}
        item={data.item}
        toggleTodo={props.toggleTodo}
        deleteTodo={props.deleteTodo}
      />
    );
  };

  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={[styles.actionButton, styles.deleteBtn]}
        onPress={() => deleteItem(rowMap, data.item.id)}>
        <Text style={styles.btnText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  const deleteItem = (rowMap, rowKey) => {
    props.deleteTodo(rowKey);
    console.log('data ', rowKey);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={'Write a new task'}
          style={styles.textInputBottom}
          onSubmitEditing={onSubmit}
          value={todo}
          onChangeText={text => setTodo(text)}
        />
      </View>
      {props.list.length > 0 ? (
        <SwipeListView
          data={[...props.list]}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          leftOpenValue={0}
          rightOpenValue={-80}
          previewRowKey={'0'}
          previewOpenValue={-40}
          previewOpenDelay={3000}
          friction={2}
          stopLeftSwipe={20}
          stopRightSwipe={-100}
          ListFooterComponent={() => {
            return <View style={{height: 100}}></View>;
          }}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Text style={styles.noTask}>Add task</Text>
      )}
    </View>
  );
};

const mapStateToProps = state => ({
  list: state,
});

const mapDispatchToProps = dispatch => ({
  addTodo: todoText => dispatch(todoActions.AddTodo(todoText)),
  toggleTodo: id => dispatch(todoActions.ToggleTodo(id)),
  deleteTodo: id => dispatch(todoActions.DeleteTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
