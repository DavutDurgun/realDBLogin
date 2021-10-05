import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../../assets/styles/colors';

export default StyleSheet.create({
    container: {
        margin: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: colors.darkGreen,

        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,

    },
    inner_container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    user: {
        color: 'white',
        fontSize: 11,
    },
    date: {
        color: 'white',
        fontSize: 11,
    },
    title: {
        color: 'white',
        fontWeight: '700',
        marginTop: 5
    },

    footer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    dislike_container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 3,
        paddingHorizontal: 10,
        marginVertical: 5,
        borderRadius: 50,
    },
    dislike_text: {
        padding:3,
        fontSize: 11,
        fontWeight: '700',
        color: colors.darkGreen,
    },
    dislike_count_container: {
        padding:3,
        marginRight: 5,
        backgroundColor: colors.darkGreen,
        borderRadius: 50,
    },
    dislike_count_text: {
        fontSize: 11,
        fontWeight: '700',
        color: "white",
    }
})