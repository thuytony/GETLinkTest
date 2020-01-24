import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1
    },
    display: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        padding: 16
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 8,
        paddingBottom: 8
    },
    textDisplay: {
        fontSize: 60,
        color: 'black',
        margin: 0,
        padding: 0
    },
    wrapNumber: {
        flex: 3
    },
    wrapOpration: {
        flex: 1
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
        margin: 6,
        borderRadius: 8,
        backgroundColor: '#DDDDDD'
    },
    textButton: {
        color: 'black',
        fontSize: 24
    }
});