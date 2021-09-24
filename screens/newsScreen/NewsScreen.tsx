import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/core'

import Loading from '../../components/loading/Loading'
import axiosClient from '../../api/axiosClient'
import { FlatList } from 'react-native-gesture-handler'
import NewsItem from '../../components/newsItem/NewsItem'

const NewsScreen = (props: any) => {
  const [newsData, setNewsData] = useState(null)
  const navigation = useNavigation()

  useEffect(() => {
    axiosClient.get(`/top-headlines?sources=${props.route.name}`)
      .then(response => {
        setNewsData(response.data.articles)
      })
  }, [])

  return (!newsData ?
    <Loading /> :
    <View>
      <FlatList
        data={newsData}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <NewsItem item={item} onPress={() =>
          navigation.navigate('Details' as never, { descriptionUrl: item.url } as never)} />
        }
      />
    </View>
  )
}
export default NewsScreen