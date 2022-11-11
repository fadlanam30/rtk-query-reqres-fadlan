import { View, Alert, FlatList, Text } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { Appbar, useTheme } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAction } from '../../redux/actions/AuthAction'
import { useGetListUsersQuery } from '../../services/userApi'
import ItemUser from '../../components/ItemUser'

const HomeScreen = ({ navigation }) => {

  const theme = useTheme()
  const listUser = useGetListUsersQuery().data?.data || []
  console.log('data',  useGetListUsersQuery().data)
  
  // const listUser = useSelector((state) => state.user.users)

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
      <FlatList
        data={listUser || []}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => (
          <View style={{ flex: 1, padding: 32, alignItems: 'center' }}>
            <Text>Data is Empty</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <ItemUser
            user={item}
          />
        )}
      />

    </View>
  )
}

export default HomeScreen