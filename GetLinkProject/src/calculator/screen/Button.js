// import React, { PureComponent, Component } from 'react';
// import { View, Text, TouchableHighlight } from 'react-native';
// import { styles } from './styles';

// class Button extends PureComponent {

    
//     constructor(props) {
//         super(props);

//         this.state = {

//         }

//     }

//     render() {

//         const { char } = this.props;
//         console.log("re render button");

//         return (
//             <TouchableHighlight
//                 style={ styles.itemBtn }
//                 onPress = { () => this.props.onPressBtn(char) }
//             >
//                 <Text>{char}</Text>
//             </TouchableHighlight>
//         );
//     }

// }

// export default Button;

import React, { PureComponent, Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { styles } from './styles';

const Button = React.memo(function Button(props) {
    console.log("re render");
    return (
        <TouchableHighlight
            style={ styles.itemBtn }
            onPress = { () => props.onPressBtn(props.char) }
        >
            
            <Text>{props.char}</Text>
        </TouchableHighlight>
    );
});

export default Button;