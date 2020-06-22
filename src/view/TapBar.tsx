import React from 'react';
import {View, StyleSheet} from 'react-native';
import TapBarItemComponent from './TapBarItemComponent';
import {TodoTypes} from '../models/TodoTypes';

interface Props {
  type: TodoTypes;
  setType: (type: TodoTypes) => void;
}

const TapBar: React.FC<Props> = ({type, setType}) => (
  <View style={styles.container}>
    <TapBarItemComponent
      type={type}
      title="All"
      setType={() => {
        console.log('TapBarItemComponent type: ' + 'All');
        setType('All');
      }}
    />
    <TapBarItemComponent
      type={type}
      border
      title="Active"
      setType={() => {
        console.log('TapBarItemComponent type: ' + 'Active');
        setType('Active');
      }}
    />
    <TapBarItemComponent
      type={type}
      border
      title="Complete"
      setType={() => {
        console.log('TapBarItemComponent type: ' + 'Complete');
        setType('Complete');
      }}
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
