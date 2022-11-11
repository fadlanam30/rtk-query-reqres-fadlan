import React, { useEffect, useState } from 'react'
import { Alert, View } from 'react-native'
import { ActivityIndicator, Appbar, Button, TextInput, useTheme } from 'react-native-paper'
import { useSelector } from 'react-redux'
import { useLoginMutation } from '../../services/authApi'

const LoginScreen = ({ navigation }) => {

  const theme = useTheme()

  const token = useSelector((state) => state.auth.token)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (token != null) {
      navigation.replace('HomeScreen')
    }
  }, [token])

  const [login, { isLoading }] = useLoginMutation()
  const onLoginClick = () => {
    login({ email, password })
      .unwrap()
      .then((response) => {
        console.log('response', response)
        navigation.replace('HomeScreen')
      })
      .catch((err) => {
        console.log('error', err)
        Alert.alert('Error', err.data.error)
      })
  }

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header
        style={{ backgroundColor: theme.colors.primaryContainer }}
      >
        <Appbar.Content
          title="Login"
        />
      </Appbar.Header>

      <View style={{ paddingHorizontal: 24, paddingTop: 32, }}>
        <TextInput
          mode="outlined"
          label="Email"
          value={email}
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType='email-address'
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          mode="outlined"
          label="Password"
          value={password}
          secureTextEntry
          onChangeText={text => setPassword(text)}
        />
        {isLoading
          ? <ActivityIndicator
            animating
          />
          : <Button
            mode="contained-tonal"
            onPress={onLoginClick}
          >
            Login
          </Button>
        }

      </View>

    </View>
  )
}

export default LoginScreen