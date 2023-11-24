import {
  Alert,
  Dimensions,
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
import CostumeTextInput from '../components/CostumeTextInput';
import SearchIcon from '../assets/images/SearchIcon.png';
import colors from '../themes/Colors';
import CostumeButton from '../components/CostumeButton';
import TodoItem from '../components/TodoItem';
import {useNavigation} from '@react-navigation/native';
import ScreenName from '../constant/ScreenName';
import {Icon} from '@';

export default function TaskListScreen() {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [task, setTask] = useState([
    {
      userName: 'alpayß',
      status: 'open',
      description: 'sss',
      id: 1,
    },
  ]);
  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Task</Text>
      </View>
    );
  };
  const renderEmpty = () => {
    return (
      <View style={styles.emptyContainer}>
        <Icon />
        <Text style={styles.emptyText}>Empt Task</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.mainContentContainer}>
        <SafeAreaView style={styles.container}>
          <CostumeTextInput
            onChangeText={setSearch}
            style={{marginHorizontal: 0}}
            value={search}
            imageSource={SearchIcon}
          />

          <FlatList
            data={[]}
            keyExtractor={item => item.id?.toString()}
            ListHeaderComponent={renderHeader}
            ListEmptyComponent={renderEmpty}
            renderItem={({item}) => <TodoItem data={item} />}
          />

          <CostumeButton
            onPress={() => navigation.navigate(ScreenName.addTask)}
            label={'Add Task'}
          />
        </SafeAreaView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background.primary,
    // alignItems: 'center',
  },
  headerText: {fontSize: 24, fontWeight: 'bold', marginBottom: 20},
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  mainContentContainer: {
    height: '100%',
    width: Dimensions.get('screen').width,
    position: 'absolute',
    padding: 20,
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    padding: 12,
    borderRadius: 10,
    borderColor: 'gray',
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
  headerContainer: {
    marginVertical: 40,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.text.primary,
  },
  emptyContainer: {
    marginVertical: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 15,
    fontWeight: '400',
    color: 'gray',
  },
});
