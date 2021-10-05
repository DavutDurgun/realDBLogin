import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

import styles from './Button.style';

const Button = ({ text, onPress, loading, theme = 'primary' }) => {

    return (
        <TouchableOpacity
            style={styles[theme].container}
            onPress={onPress}
            disabled={loading}
        >
            {loading ?
                <ActivityIndicator color='white' style={styles[[theme]].loading} />
                :
                <Text style={styles[[theme]].title}>
                    {text}
                </Text>
            }
        </TouchableOpacity>
    );


};

export default Button;