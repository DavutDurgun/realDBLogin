import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        margin: 10,
    },
    inner_container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2b2b2b22',
        paddingHorizontal: 10
    },
    text: {
        flex: 1,
        padding:3,
    }, 
    error: {
        color: '#FF214E',
        width: '100%',
        fontWeight: '500',
        marginLeft: 10,
    }

});
