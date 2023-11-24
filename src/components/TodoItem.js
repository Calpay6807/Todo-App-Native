import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../themes/Colors';
import CostumeButton from './CostumeButton';

export default function TodoItem({data}) {
  return (
    <View style={styles.container}>
      <View style={styles.itemHeader}>
        <Text>{data?.userName?.toUpperCase()}</Text>
      </View>
      <Text>TodoItem</Text>
      <View style={{flexDirection: 'row'}}>
        <View
          style={[
            styles.statusContainer,
            {
              backgroundColor:
                data?.status === ('open' || 'progress') ? '#CAF6CB' : '#FECCB1',
            },
          ]}>
          <Text
            style={[
              styles.statusContainer,
              {
                color:
                  data?.status === ('open' || 'progress')
                    ? '#72966f'
                    : '#d6825c',
              },
            ]}>
            {data?.status}
          </Text>
        </View>
        <CostumeButton label={'Add Task'} />
        {/* <CostumeButton label={"Del Task"} /> */}
      </View>
      <Text style={styles.footerContainer}>{data?.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  itemHeader: {},
  statusContainer: {},
  footerContainer: {},
});
