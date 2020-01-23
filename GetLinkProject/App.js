import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// redux
import { Provider } from 'react-redux';
import { store } from './redux/store';


import Screen from './src/calculator/screen/Screen';

export default function App() {
    return (
        <Provider store={ store }>
            <View style={ styles.container }>
                <Screen />
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
