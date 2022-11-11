import { View, Alert } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { Appbar, useTheme } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAction } from '../../redux/actions/AuthAction'

const HomeScreen = ({ navigation }) => {

  const theme = useTheme()

  const dispatch = useDispatch()

  function showAlert() {
    Alert.alert(
      'Hold up!!',
      'Did u want to log out this account ?',
      [
        { text: 'No', style: 'cancel' },
        {
          text: 'Yes',
          onPress: () => onLogout()
        }
      ]
    )
  }

  const onLogout = useCallback(
    () => {
      dispatch(logoutAction())
    },
    [],
  )

  const token = useSelector((state) => state.auth.token)
  useEffect(() => {
    if (!token) {
      navigation.replace('LoginScreen')


    }
  }, [token])

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header style={{ backgroundColor: theme.colors.primaryContainer }} >
        <Appbar.Content
          title="Home"
        />
        <Appbar.Action
          icon="logout"
          onPress={showAlert}
        />
      </Appbar.Header>
    </View>
  )
}

export default HomeScreen