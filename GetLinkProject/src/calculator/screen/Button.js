import React, { PureComponent, Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { styles } from './styles';

const Button = React.memo(function Button(props) {
  return (
    <TouchableHighlight style={styles.itemBtn} onPress={() => props.onPressBtn(props.char)}>
      <Text style={styles.textButton}>{props.char}</Text>
    </TouchableHighlight>
  );
});

export default Button;
