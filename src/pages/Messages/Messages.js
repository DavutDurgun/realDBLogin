import React from 'react'
import { SafeAreaView, View, Text, Image, Alert } from 'react-native';

//style
import styles from './Messages.style';

//components
import FloatingButton from '../../components/FloatingButton';
import ContentInputModal from '../../components/modal/ContentInputModal';


const Messages = () => {
    const [inputModalVisible, setInputModalVisible] = React.useState(false)

    const handleInputModalClose = () => {
        setInputModalVisible(false);
    }

    const handleInputModalOpen = () => {
        setInputModalVisible(true);
    }

    const handleSendContent = (content) => {
        console.log(content);
        handleInputModalClose();
    }

    return (
        <SafeAreaView style={styles.container}>
            <FloatingButton icon="plus" onPress={handleInputModalOpen} />

            <ContentInputModal
                visible={inputModalVisible}
                onClose={handleInputModalClose}
                onSend={handleSendContent}
            />
        </SafeAreaView>
    );
}


export default Messages;
