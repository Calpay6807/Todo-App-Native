import {
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const saveTodos = async saveTodos => {
    try {
      AsyncStorage.setItem('todos', JSON.stringify(saveTodos));
    } catch (e) {
      console.error('error message:', e);
    }
  };
  const deletedTodo = id => {
    const updatedTodo = todos?.filter(x => x.id !== id);
    setTodos(updatedTodo);
    saveTodos(updatedTodo);
  };
  const addTodo = () => {
    if (todo) {
      const updatedTodo = [...todos, {id: Date.now(), text: todo}];
      setTodos(updatedTodo);
      saveTodos(updatedTodo);
    }
  };
  const loadTodos = async () => {
    try {
      const storedData = await AsyncStorage.getItem('todos');
      if (storedData) {
        setTodos(JSON.parse(storedData));
      }
    } catch (err) {
      console.error('error message:', err);
    }
  };
  const updatedTodos = id => {
    const existingTodo = todos?.find(x => x.id === id);
    if (!existingTodo) {
      return;
    }
    Alert.prompt(
      'Edit Todo',
      'update',
      newUpdateText => {
        if (newUpdateText) {
          const updatedTodos = todos.map(item =>
            item?.id === id ? {...item, text: newUpdateText} : item,
          );
          setTodos(updatedTodos);
          saveTodos(updatedTodos);
        }
      },
      'plain-text',
      existingTodo.text,
    );
  };
  useEffect(() => {
    loadTodos();
  }, []);
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerText}>React Native AsyncStorage</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{borderWidth: 1, padding: 10, flex: 1}}
            placeholder="Lütfen Doldurunuz"
            value={todo}
            onChangeText={text => setTodo(text)}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.addButton]}
              onPress={addTodo}>
              <Text style={styles.textColor}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          data={todos}
          keyExtractor={item => item.id?.toString()}
          renderItem={({item}) => (
            <View style={styles.todoItem}>
              <Text>{item?.text}</Text>

              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => deletedTodo(item?.id)}>
                  <Text style={styles.textColor}>Delete</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[styles.button, styles.updatedButton]}
                  onPress={() => updatedTodos(item.id)}>
                  <Text style={styles.textColor}>Update</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerText: {fontSize: 24, fontWeight: 'bold'},
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  todoItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    marginLeft: 10,
    padding: 5,
    backgroundColor: 'red',
    color: 'white',
    borderRadius: 20,
  },
  addButton: {
    backgroundColor: 'purple',
  },
  textColor: {
    color: 'white',
  },
  updatedButton: {
    backgroundColor: 'green',
  },
});
