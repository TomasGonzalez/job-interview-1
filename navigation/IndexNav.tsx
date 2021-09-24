import React, { ReactElement, useContext, useEffect, useState } from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import { SourcesType } from '../types'
import axiosClient from '../api/axiosClient'
import Login from '../screens/login/Login'
import AuthContext from '../contexts/AuthContext'
import Loading from '../components/loading/Loading'
import NewsScreen from '../screens/newsScreen/NewsScreen'

const Drawer = createDrawerNavigator()

const IndexNav = (): ReactElement => {
  const [routes, setRoutes] = useState<[] | null>(null)
  const authContext = useContext(AuthContext)

  useEffect(() => {
    axiosClient.get('/sources')
      .then(response => setRoutes(response.data.sources))
      .catch(err => console.log(err, 'error'))
  }, [])

  const MainDrawer = () => {
    return (!routes ?
      <Loading /> :
      <NavigationContainer >
        <Drawer.Navigator initialRouteName="usa-today">
          {routes.map((routeInfo: SourcesType) =>
            <Drawer.Screen
              key={routeInfo.id}
              options={{ drawerLabel: routeInfo.name }}
              name={routeInfo.id}
              component={NewsScreen}
            />
          )}
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
  return (!authContext?.authKey ? <Login /> : <MainDrawer />)
}

export default IndexNav