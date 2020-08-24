import * as React from 'react'
import {useRef, useState} from 'react'
import {Animated, FlatList, GestureResponderEvent, View} from 'react-native'
import {lobbyCashGamesListStyles as styles} from './lobby-cash-games-list.styles'
import {LobbyCashGamesListItem} from '../lobby-cash-games-list-item'

export interface LobbyCashGamesListProps {
  list: Array<any>
  loading: boolean
  onTap?: (e: GestureResponderEvent, item: any) => void
}

export const LobbyCashGamesList: React.FunctionComponent<LobbyCashGamesListProps> = (props) => {
  const {list, loading, onTap} = props
  const [refresh] = useState(false)
  const flatListRef = useRef(null)

  const [opacity] = useState(new Animated.Value(0))

  const handleScroll = (event) => {
    const offset = event.nativeEvent.contentOffset.y

    if (offset <= 0) {
      opacity.setValue(-1)
    } else if (offset > 0 && offset <= 50) {
      opacity.setValue(offset / 50)
    } else {
      opacity.setValue(1)
    }
  }
  const checkAnimationDone = (bool) => {
    props.checkAnimation(bool)
  }

  const _renderListItem = ({item}) => {
    return (
      <Animated.View>
        <LobbyCashGamesListItem
          animationEnd={checkAnimationDone}
          item={item}
          loading={loading}
          onTap={(e) => !loading && onTap && onTap(e, item)}
        />
      </Animated.View>
    )
  }

  return (
    <View style={styles.Wrapper}>
      <FlatList
        ref={flatListRef}
        onScroll={handleScroll}
        contentContainerStyle={styles.FlatList}
        data={list}
        initialNumToRender={10}
        bounces={true}
        overScrollMode={'always'}
        scrollEnabled={!loading}
        renderItem={_renderListItem}
        keyExtractor={(item) => item.id}
        refreshing={refresh}
      />
    </View>
  )
}
