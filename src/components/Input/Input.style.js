import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        margin: 10,
    },
    inner_container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 10
    },
    text: {
        flex: 1,
        borderRadius: 5,
    }, 
    error: {
        color: '#FF214E',
        width: '100%',
        fontWeight: '500',
        marginLeft: 10,
    }

});
