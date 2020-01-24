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

        this.state = {
            textInput: "",
            previousInput: "",
            isShowResult: false
        }

    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        
    }

    onPressButton = (char) => {
        switch(typeof char) {
            //number -> add input
            case 'number':
                this.setState({
                    previousInput: char,
                    textInput: this.state.textInput + `${char}`,
                    isShowResult: false
                });
                break;
            default:
                //not allow click operation double time
                if(this.state.previousInput===char) return;

                this.handleOperator(char);
                break;
        }
    }

    handleOperator(char) {

        let { previousInput, textInput } = this.state;

        switch(char) {
            case "+":
            case "-":
            case "*":
            case "/":
                //before that is expressions -> replace expressions
                if(previousInput=="+" || previousInput=="-" || previousInput=="*" || previousInput=="/") {
                    previousInput.substring(0, previousInput.length - 1);
                }

                this.setState({
                    previousInput: char,
                    textInput: textInput + `${char}`,
                    isShowResult: false
                });
                break;
            case "C":
                this.setState({
                    previousInput: char,
                    textInput: "",
                    isShowResult: false
                });
                break;
            case ".":
                //need fix

                //if before not a number => add 0.
                if(typeof(previousInput)==="number") {
                    textInput = textInput + `${char}`;
                } else {
                    textInput = textInput + `0${char}`;
                }
                this.setState({
                    previousInput: char,
                    textInput: textInput,
                    isShowResult: false
                });
                break;
            case "=":
                let fixedOperation = textInput.split(',').join('.')
                let result = eval(fixedOperation);
                this.props.onUpdateResult(result);
                this.setState({
                    previousInput: char,
                    textInput: "",
                    isShowResult: true
                });
                break;
        }
    }

    render() {

        const { textInput, isShowResult } = this.state;
        const { result } = this.props.calculatorReducer;

        return (
            <SafeAreaView style={ styles.container }>
                <View style={ styles.content }>
                    <View style={ styles.display }>
                        {
                            isShowResult ? 
                                <Text style={ styles.textDisplay }>{`${result}`}</Text>
                            :
                                <Text style={ styles.textDisplay }>{`${textInput}`}</Text>
                        }
                    </View>
                    <View style={ styles.button }>
                        <View style={ styles.wrapNumber }>
                            {
                                Constants.numbers.map((item, index) =>
                                    <View key={index} style={ styles.row }>
                                        {
                                            item.map(char =>
                                                <Button key={char} char={char} onPressBtn={this.onPressButton} />    
                                            )
                                        }
                                    </View>
                                )
                            }
                        </View>
                        <View style={ styles.wrapOpration }>
                            {
                                Constants.operations.map(char =>
                                    <Button key={char} char={char} onPressBtn={this.onPressButton} /> 
                                )
                            }
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        calculatorReducer: state.calculatorReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateResult: (params) => {
            dispatch(actions.updateResult(params));
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Screen);;