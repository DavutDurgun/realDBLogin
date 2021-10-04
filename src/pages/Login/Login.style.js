import { StyleSheet, Dimensions, } from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#64b5f6',
    },
    logo: {
        width: deviceSize.width,
        height: deviceSize.height / 4,
        resizeMode: 'contain',
        alignSelf: 'center',//kendini ortaya al
        tintColor: 'white',
        marginHorizontal: 10,
        paddingHorizontal: 10,
    },
    text_logo: {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 20,
    },
    logo_container: {
        flex: 1,
        justifyContent: 'center'
    },
    body_container: {
        flex: 1,
    },
});