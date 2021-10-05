import React from 'react';
import { View, TextInput } from 'react-native';
import Modal from 'react-native-modal';

//style
import styles from './ContentInputModal.style';

//component
import Button from '../../Button'


const ContentInputModal = ({ visible, onClose, onSend }) => {
    const [text, setText] = React.useState(null);
    const handleSend = () => {
        if (!text) {
            return;
        }
        onSend(text);
        setText(null);
    }
    return (
        <Modal
            animationInTiming={500}//animasyon giriş süresi
            animationOutTiming={500}//animasyon çıkış süresi
            style={styles.modal}
            isVisible={visible}
            onSwipeComplete={onClose}//tutup aşağı kaydırma
            onBackdropPress={onClose}//kutu dışında bir yere tıklandığında
            onBackButtonPress={onClose}//geri tuşuna basıldığında
            swipeDirection="down"//kadırma yönü
            animationIn="fadeInUp"//slayt türü
            animationOut="fadeOutDown"
            backdropTransitionOutTiming={0}//Modal, kapanırken garip bir şekilde yanıp sönmesini engeller

        >
            <View style={styles.container} >
                <View style={styles.input_container}>
                    <TextInput
                        placeholder="Darla hadi milleti.."
                        onChangeText={setText}
                        multiline
                    />
                </View>

                <Button
                    text="Gönder"
                    onPress={handleSend}

                />
            </View>
        </Modal>
    )
}

export default ContentInputModal;
