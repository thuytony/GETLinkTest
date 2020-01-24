import React, { PureComponent } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { styles } from './styles';

import Button from './Button';
import Constants from '../../constants/constants';

//redux
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

class Screen extends PureComponent {
  constructor(props) {
    super(props);
  }

  onPressButton = char => {
    switch (typeof char) {
      //number -> add input
      case 'number':
        this.props.onHandleInput({
          previousInput: char,
          textInput: this.props.calculatorReducer.textInput + `${char}`,
        });
        break;
      default:
        //not allow click operation double time
        if (this.props.calculatorReducer.previousInput === char) return;

        this.handleOperator(char);
        break;
    }
  };

  handleOperator(char) {
    let { previousInput, textInput } = this.props.calculatorReducer;

    switch (char) {
      case '+':
      case '-':
      case '*':
      case '/':
        //before that is expressions -> replace expressions
        if (
          previousInput === '+' ||
          previousInput === '-' ||
          previousInput === '*' ||
          previousInput === '/'
        )
          textInput = textInput.substring(0, textInput.length - 1);
        this.props.onHandleInput({
          previousInput: char,
          textInput: textInput + `${char}`,
        });
        break;
      case 'C':
        this.props.onHandleInput({
          previousInput: char,
          textInput: '',
        });
        break;
      case '.':
        //if before not a expressions => add 0.
        if (
          previousInput === '+' ||
          previousInput === '-' ||
          previousInput === '*' ||
          previousInput === '/'
        ) {
          textInput = textInput + `0${char}`;
        } else {
          textInput = textInput + `${char}`;
        }
        this.props.onHandleInput({
          previousInput: char,
          textInput: textInput,
        });
        break;
      case '=':
        try {
          let result = eval(textInput);
          this.props.onHandleInput({
            previousInput: char,
            textInput: result,
          });
        } catch (ex) {
          alert('Some thing went wrong');
        }
        break;
    }
  }

  render() {
    const { textInput } = this.props.calculatorReducer;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.display}>
            <Text style={styles.textDisplay}>{`${textInput}`}</Text>
          </View>
          <View style={styles.button}>
            <View style={styles.wrapNumber}>
              {Constants.numbers.map((item, index) => (
                <View key={index} style={styles.row}>
                  {item.map(char => (
                    <Button key={char} char={char} onPressBtn={this.onPressButton} />
                  ))}
                </View>
              ))}
            </View>
            <View style={styles.wrapOpration}>
              {Constants.operations.map(char => (
                <Button key={char} char={char} onPressBtn={this.onPressButton} />
              ))}
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    calculatorReducer: state.calculatorReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onHandleInput: params => {
      dispatch(actions.handleInput(params));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Screen);
