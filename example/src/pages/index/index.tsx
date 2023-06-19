import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'
import './index.css'

export default class Index extends Component<PropsWithChildren> {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text className='text-lg text-blue-500 hover:text-red-500'>Hello world!</Text>
      </View>
    )
  }
}
