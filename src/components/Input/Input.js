import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';

//iconFontNames
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

//style
import styles from './Input.style';

const Input = ({ placeholder, value, onChangeText, errors, isSecure, iconName }) => {
    const [showPassword, setShowPassword] = useState(isSecure || false)
    
    const onChangeShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <View style={styles.container}>
            <View style={styles.inner_container}>
                <Icon style={styles.icon} name={iconName} size={25} color='gray' />
                <TextInput
                    style={styles.text}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    value={value}
                    secureTextEntry={showPassword}
                />

                {isSecure &&
                    <TouchableOpacity style={styles.touch} onPress={onChangeShowPassword} >
                        <Icon2
                            style={styles.icon}
                            name={!showPassword ? 'visibility' : 'visibility-off'}
                            size={25}
                            color='gray'
                        />
                    </TouchableOpacity>
                }
            </View>
            {errors ? (
                <Text style={styles.error}>{errors}</Text>
            ) : null}
        </View>
    );


};

export default Input;