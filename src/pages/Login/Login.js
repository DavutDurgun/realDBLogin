//https://fakestoreapi.com/auth/login
import React from 'react'
import { SafeAreaView, View, Text, Image, Alert } from 'react-native';
import { Formik, Form } from 'formik';//form işlemleri için
import * as Yup from 'yup';//validate işlemleri için

//style
import styles from './Login.style';

//components
import Input from '../../components/Input';
import Button from '../../components/Button';



const Login = () => {
    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .min(2, 'En az 2 karakter olmalı!')
            .max(50, 'En fazla 50 karakter olmalı!')
            .required('Zorunlu!'),
        password: Yup.string()
            .min(8, 'En az 8 karakter olmalı!')
            .max(100, 'En fazla 100 karakter olmalı!')
            .matches(/(?=.*\d)[A-Za-z\d@$!%*?&]/, 'Parolanız en az 1 rakam karakter içermeli!')
            .matches(/^(?=.*[a-z])(?=.*[A-Z])/, 'Parolanız en az 1 büyük karakter içermeli!')
            .matches(/(?=.*[@$!%*?&])/, 'Parolanız en az 1 özel karakter içermeli!')
            .required('Zorunlu!'),
    });

    const handleLogin = (forms) => {


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
            <View style={styles.logo_container}>
                <Text style={styles.text_logo}>DÜKKAN</Text>
                <Image style={styles.logo} source={require('../../assets/login_logo.png')} />
            </View>

            <Formik
                initialValues={{
                    username: '',
                    password: '',
                }}
                onSubmit={handleLogin}
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
                            placeholder='Kullanıcı adını giriniz..'
                            value={values.username}
                            onChangeText={handleChange('username')}
                            errors={errors.username}
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
                        //loading={loading}
                        />
                    </View>

                )}
            </Formik>
        </SafeAreaView>
    );
}


export default Login;



const user = {
    "address": {
        "geolocation": {
            "lat": "-37.3159",
            "long": "81.1496"
        },
        "city": "kilcoole",
        "street": "new road",
        "number": 7682,
        "zipcode": "12926-3874"
    },
    "id": 1,
    "email": "john@gmail.com",
    "username": "johnd",
    "password": "m38rmF$",
    "name": {
        "firstname": "john",
        "lastname": "doe"
    },
    "phone": "1-570-236-7033",
    __v: 0
}