import React from 'react';
import {Text, TouchableHighlight, StyleSheet} from 'react-native';
import {TodoTypes} from '../models/TodoTypes';

interface Props {
  type: TodoTypes;
  title: TodoTypes;
  setType: () => void;
  selected?: boolean;
  border?: boolean;
}

const TapBarItemComponent: React.FC<Props> = ({
  type,
  title,
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
      type === title ? styles.selected : null,
    ]}
    onPress={setType}>
    <Text style={[styles.itemText, type === title ? styles.bold : null]}>
      {title}
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
