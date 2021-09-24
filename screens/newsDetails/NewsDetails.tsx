import React from 'react'

import { WebView } from 'react-native-webview';

const NewsDetails = (props: any) => (
  <WebView
    style={{ flex: 1 }}
    source={{ uri: props?.route?.params?.descriptionUrl }}
  />
)



export default NewsDetails