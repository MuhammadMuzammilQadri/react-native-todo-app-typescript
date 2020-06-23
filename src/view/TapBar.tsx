import React from 'react';
import {View, StyleSheet} from 'react-native';
import TapBarItemComponent from './TapBarItemComponent';
import {TodoTypes} from '../models/TodoTypes';

interface Props {
  currentlySelectedType: TodoTypes;
  setType: (type: TodoTypes) => void;
}

const TapBar = (props: Props) => (
  <View style={styles.container}>
    <TapBarItemComponent
      currentSelectedType={props.currentlySelectedType}
      type="All"
      setType={props.setType}
    />
    <TapBarItemComponent
      currentSelectedType={props.currentlySelectedType}
      border
      type="Active"
      setType={props.setType}
    />
    <TapBarItemComponent
      currentSelectedType={props.currentlySelectedType}
      border
      type="Complete"
      setType={props.setType}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#dddddd',
  },
});
export default TapBar;
