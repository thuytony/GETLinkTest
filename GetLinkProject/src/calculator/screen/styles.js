import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1
    },
    display: {
        flex: 2,
        backgroundColor: 'red',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    button: {
        flex: 3,
        flexDirection: 'row',
        backgroundColor: 'green',
        padding: 4
    },
    textDisplay: {
        fontSize: 18,
        color: 'black'
    },
    wrapNumber: {
        flex: 3,
        backgroundColor: 'blue'
    },
    wrapOpration: {
        flex: 1,
        backgroundColor: 'white'
    },
    row: {
        flex: 1,
        flexDirection: 'row'
    },

    //for button component
    itemBtn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 4,
        borderRadius: 8,
        backgroundColor: 'red'
    },
    textButton: {
        color: 'black',
        fontSize: 32,
        fontWeight: 'bold'
    }
});