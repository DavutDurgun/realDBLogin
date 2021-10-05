import React, { useState } from 'react'
import { SafeAreaView, View, Text, Image, Alert } from 'react-native';
import { Formik, Form } from 'formik';//form işlemleri için
import * as Yup from 'yup';//validate işlemleri için
import auth from '@react-native-firebase/auth'; //db işlemleri
import { showMessage } from "react-native-flash-message";//toast message

//style
import styles from './Login.style';

//components
import Input from '../../../components/Input';
import Button from '../../../components/Button';


//error
import authErrorMessageParser from '../../../utils/authErrorMessageParser';



const Login = ({ navigation }) => {
    const [loading, setLoading] = useState(false);

    const validationSchema = Yup.object().shape({
        usermail: Yup.string()
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
            await auth()
                .signInWithEmailAndPassword(
                    form.usermail,
                    form.password
                )
                .then(res => { console.log(res) })
                .catch(err => { console.log(err) });

            showMessage({
                message: "Giriş yapıldı!",
                type: "success",

            });
            navigation.navigate("MessagesPage");
            
        } catch (error) {
            showMessage({
                message: authErrorMessageParser(error.code),
                type: "danger",

            });

        }
        setLoading(false);

    };

    const handleSignUp = () => {
        navigation.navigate("SignPage");
    };
 

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Derdini Söyle ?</Text>

            <Formik
                style={styles.form}
                initialValues={{
                    usermail: '',
                    password: '',
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
                            placeholder='Kullanıcı e-postanızı giriniz..'
                            value={values.usermail}
                            onChangeText={handleChange('usermail')}
                            errors={errors.usermail}
                            iconName='account'
                        />
                        <Input
                            placeholder='Kullanıcı şifrenizi giriniz..'
                            value={values.password}
                            onChangeText={handleChange('password')}
                            errors={errors.password}
                            iconName='key'
                            isSecure
                        />
                        <Button
                            text='Giriş Yap'
                            onPress={handleSubmit}
                            theme="primary"
                            loading={loading}
                        />
                    </View>

                )}
            </Formik>

            <Button
                text='Kayıt Ol'
                onPress={handleSignUp}
                theme="secondary"
            //loading={loading}
            />

        </SafeAreaView>
    );
}


export default Login;
