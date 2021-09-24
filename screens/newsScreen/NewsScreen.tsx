import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import Loading from '../../components/loading/Loading'

import axiosClient from '../../api/axiosClient'
import { FlatList } from 'react-native-gesture-handler'

const NewsScreen = (props: any) => {
  const [newsData, setNewsData] = useState(null)

  useEffect(() => {
    axiosClient.get(`/top-headlines?sources=${props.route.name}`)
      .then(response => {
        console.log(response, 'response')
        setNewsData(response.data.articles)
      })
  }, [])

  return (!newsData ?
    <Loading /> :
    <View>
      <FlatList
        data={newsData}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  )
}
export default NewsScreen