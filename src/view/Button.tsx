import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';

const Button: React.FC<{submitTodo: () => void}> = ({submitTodo}) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableHighlight
        underlayColor="#efefef"
        style={styles.button}
        onPress={() => submitTodo()}>
        <Text style={styles.submit}>Submit</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'flex-end',
  },
  button: {
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#ffffff',
    width: 200,
    marginRight: 20,
    marginTop: 15,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(0,0,0,1)',
  },
  submit: {
    color: '#666666',
    fontWeight: '600',
  },
});
export default Button;
