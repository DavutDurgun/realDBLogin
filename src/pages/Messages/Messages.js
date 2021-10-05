import React from 'react'
import { SafeAreaView, FlatList, View, Text, Image, Alert } from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';


//style
import styles from './Messages.style';

//components
import FloatingButton from '../../components/FloatingButton';
import ContentInputModal from '../../components/modal/ContentInputModal';
import MessageCard from '../../components/card/MessageCard';

//parserData
import contentDataParser from '../../utils/contentDataParser';

const Messages = () => {
    const [inputModalVisible, setInputModalVisible] = React.useState(false)
    const [contentList, setContentList] = React.useState([]);

    React.useEffect(() => {
        database()
            .ref('/messages/')
            .on("value", snapshot => {
                const contentData = snapshot.val();
                const parsedData = contentDataParser(contentData || []);
                setContentList(parsedData)
            });
    }, [])

    const handleInputModalClose = () => {
        setInputModalVisible(false);
    }

    const handleInputModalOpen = () => {
        setInputModalVisible(true);
    }

    const handleSendContent = (content) => {
        sendContent(content);
        handleInputModalClose();
    }

    const sendContent = (content) => {
        const userMail = auth().currentUser.email;
        const contentObject = {
            text: content,
            username: userMail.split('@')[0],
            date: (new Date()).toISOString(),
        }

        database().ref('/messages/').push(contentObject);
    }

    const handleBanane = (item) => {
        database()
            .ref(`messages/${item.id}`)
            .update({ dislike: (item.dislike || 0) + 1 });
    }

    const renderContent = ({ item }) => <MessageCard message={item} onBanane={() => handleBanane(item)} />;

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={contentList}
                renderItem={renderContent}
            />

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
