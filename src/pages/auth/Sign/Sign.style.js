import { StyleSheet, Dimensions, } from 'react-native';
import colors from '../../../assets/styles/colors';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        color: colors.darkGreen,
        fontSize: 90,
        margin: 5,
    },
    body_container: {
    },
});