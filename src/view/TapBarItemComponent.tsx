import React from 'react';
import {Text, TouchableHighlight, StyleSheet} from 'react-native';
import {TodoTypes} from '../models/TodoTypes';

interface Props {
  currentSelectedType: TodoTypes;
  type: TodoTypes;
  setType: (type: TodoTypes) => void;
  selected?: boolean;
  border?: boolean;
}

const TapBarItemComponent: React.FC<Props> = ({
  currentSelectedType,
  type,
  setType,
  selected,
  border,
}) => (
  <TouchableHighlight
    underlayColor="#efefef"
    style={[
      styles.item,
      selected ? styles.selected : null,
      border ? styles.border : null,
      currentSelectedType === type ? styles.selected : null,
    ]}
    onPress={() => setType(type)}>
    <Text
      style={[
        styles.itemText,
        currentSelectedType === type ? styles.bold : null,
      ]}>
      {type}
    </Text>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  border: {
    borderLeftWidth: 1,
    borderLeftColor: '#dddddd',
  },
  itemText: {
    color: '#777777',
    fontSize: 16,
  },
  selected: {backgroundColor: '#ffffff'},
  bold: {fontWeight: 'bold'},
});
export default TapBarItemComponent;
