import React, { useState } from 'react'
import { SafeAreaView, View, Text, Image, Alert } from 'react-native';
import { Formik, } from 'formik';//form işlemleri için
import * as Yup from 'yup';//validate işlemleri için
import auth from '@react-native-firebase/auth'; //db işlemleri
import { showMessage } from "react-native-flash-message";//toast message

//style
import styles from './Sign.style';

//components
import Input from '../../../components/Input';
import Button from '../../../components/Button';


//error
import authErrorMessageParser from '../../../utils/authErrorMessageParser';



const Sign = ({ navigation }) => {
    const [loading, setLoading] = useState(false);

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .min(2, 'En az 2 karakter olmalı!')
            .max(50, 'En fazla 50 karakter olmalı!')
            .email(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'e posta adresi yanlış')
            .required('Zorunlu!'),
        password: Yup.string()
            .min(8, 'En az 8 karakter olmalı!')
            .max(100, 'En fazla 100 karakter olmalı!')
            .matches(/(?=.*\d)[A-Za-z\d@$!%*?&]/, 'Parolanız en az 1 rakam karakter içermeli!')
            .matches(/^(?=.*[a-z])(?=.*[A-Z])/, 'Parolanız en az 1 büyük karakter içermeli!')
            .matches(/(?=.*[@$!%*?&])/, 'Parolanız en az 1 özel karakter içermeli!')
            .required('Zorunlu!'),
    });

    const handleFormSubmit = async (form) => {
        try {
            setLoading(true);
            if (form.password !== form.rePassWord) {
                showMessage({
                    message: "Şifreler uyuşmuyor!",
                    type: "danger",
                });
            } else {
                await auth()
                    .createUserWithEmailAndPassword(
                        form.email,
                        form.password
                    );

                showMessage({
                    message: "Kullanıcı oluşturuldu!",
                    type: "success",

                });
                navigation.navigate("LoginPage");
            }

        } catch (error) {
            console.log(error)
            showMessage({
                message: authErrorMessageParser(error.code),
                type: "danger",
            });
        }
        setLoading(false);
    };

    const handleLogin = () => {
        navigation.goBack();
    };

    /*  if (error) {
         Alert.alert('Dükkan', 'hata var!');
     }
 
     if (data) {
         if (data.status === 'Error') {
             Alert.alert('Dükkan', data.msg);
         }  
     } */



    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Derdini Söyle ?</Text>

            <Formik
                style={styles.form}
                initialValues={{
                    email: '',
                    password: '',
                    rePassWord: '',
                }}
                onSubmit={handleFormSubmit}
            //validationSchema={validationSchema}
            >
                {({
                    handleSubmit,
                    handleChange,
                    values,
                    errors,
                }) => (
                    <View style={styles.body_container}>
                        <Input
                            placeholder='e-postanızı giriniz..'
                            value={values.email}
                            onChangeText={handleChange('email')}
                            errors={errors.email}
                            iconName='account'
                        />
                        <Input
                            placeholder='şifrenizi giriniz..'
                            value={values.password}
                            onChangeText={handleChange('password')}
                            errors={errors.password}
                            iconName='key'
                            isSecure
                        />
                        <Input
                            placeholder='şifrenizi tekrar giriniz..'
                            value={values.rePassWord}
                            onChangeText={handleChange('rePassWord')}
                            errors={errors.rePassWord}
                            iconName='key'
                            isSecure
                        />

                        <Button
                            text='Kayıt Ol'
                            onPress={handleSubmit}
                            theme="primary"
                            loading={loading}
                        />
                    </View>
                )}
            </Formik>

            <Button
                text='Geri'
                onPress={handleLogin}
                theme="secondary"
            //loading={loading}
            />

        </SafeAreaView>
    );
}


export default Sign;
