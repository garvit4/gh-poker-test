import * as React from 'react'
import {FunctionComponent, useState} from 'react'
import {GestureResponderEvent, Platform, SafeAreaView, StatusBar, View} from 'react-native'
import {LobbyGamesHeader} from '../../components/lobby-games-header'
import {LobbyCashGamesList} from '../../components/lobby-cash-games-list'
import {LobbyCashGamesFilter} from '../../components/lobby-cash-games-filter'
import styles from './styles'

export interface LobbyCashGamesProps {}

const data = require('./mock-data.json')

const lowerSmallBlind = 5
const lowerBigBlind = 10
const midUpperSmallBlind = 100
const midLowerSmallBlind = 10
const midLowerBigBlind = 20
const midUpperBigBlind = 200
const highSmallBlind = 200
const highBigBlind = 400

const LobbyCashGames: FunctionComponent<LobbyCashGamesProps> = (_props) => {
  const [filteredList, setFilteredList] = useState(data)
  let headerHeight = Platform.OS === 'ios' ? 50 : 70

  const filters = ['Texas', 'PLO', 'Low', 'Mid', 'High']

  const handleItemTap = (_e: GestureResponderEvent, _item: any) => {}

  const getBlindsFilteredResult = (filteredArray, titlesArr) => {
    if (!titlesArr.includes('low') && !titlesArr.includes('mid') && !titlesArr.includes('high')) {
      return data
    }
    return filteredArray.filter(
      (val) =>
        (titlesArr.includes('low') && val.smallBlind <= lowerSmallBlind && val.bigBlind <= lowerBigBlind) ||
        (titlesArr.includes('mid') &&
          val.smallBlind >= midLowerSmallBlind &&
          val.smallBlind <= midUpperSmallBlind &&
          val.bigBlind <= midUpperBigBlind &&
          val.bigBlind >= midLowerBigBlind) ||
        (titlesArr.includes('high') && val.smallBlind >= highSmallBlind && val.bigBlind >= highBigBlind),
    )
  }

  const getGameTypeFilteredResult = (titlesArr) => {
    if (!titlesArr.includes('texas') && !titlesArr.includes('plo')) {
      return data
    }
    return data.filter((val) => {
      return (
        (val.gameVariant === "hold'em" && titlesArr.includes('texas')) ||
        (val.gameVariant === 'plo' && titlesArr.includes('plo')) ||
        (!(val.gameVariant === 'plo') && !(val.gameVariant === "hold'em"))
      )
    })
  }

  const getAnimatedTypeList = (gameTypeFilteredResult) => {
    let nextList = JSON.parse(JSON.stringify(gameTypeFilteredResult))
    let currentList = JSON.parse(JSON.stringify(filteredList))
    if (JSON.stringify(currentList) === JSON.stringify(nextList)) {
      return currentList
    } else {
      nextList.forEach((nextListItem) => {
        nextListItem.animate = 'right'
        currentList.forEach((currentListItem) => {
          if (!currentListItem.hasOwnProperty('found')) {
            currentListItem.animate = 'left'
          }
          if (nextListItem.id === currentListItem.id) {
            nextListItem.found = true
            currentListItem.found = true
            currentListItem.animate = 'none'
          }
        })
      })
      if (nextList.length) {
        nextList.forEach((item) => {
          if (!item.hasOwnProperty('found')) {
            currentList.push(item)
          }
        })
      }
      return currentList
    }
  }

  const onFilterPress = (filter) => {
    const titlesArr = filter.map((item) => item.title.toLowerCase())
    const gameTypeFilteredResult = getGameTypeFilteredResult(titlesArr)
    setFilteredList(getAnimatedTypeList(gameTypeFilteredResult))
    if (titlesArr.includes('low') || titlesArr.includes('mid') || titlesArr.includes('high')) {
      const blindsFilteredResult = getBlindsFilteredResult(gameTypeFilteredResult, titlesArr)
      setFilteredList(getAnimatedTypeList(blindsFilteredResult))
    }
  }

  const checkAnimationStatus = (bool) => {
    if (bool) {
      filteredList.forEach((item, index) => {
        if (item.animate === 'left') {
          filteredList.splice(index, 1)
        } else {
          delete item.animatable
          delete item.found
        }
      })
    }
  }

  return (
    <SafeAreaView style={styles.SafeArea}>
      <View style={styles.Root}>
        <StatusBar barStyle="light-content" translucent={true} backgroundColor={'transparent'} />

        <LobbyGamesHeader
          style={[
            styles.LobbyHeader,
            {
              height: headerHeight,
              paddingTop: headerHeight - 40,
              paddingHorizontal: 10,
              zIndex: 2,
            },
          ]}
          preset={'cash-games'}
        />
        <View style={styles.PanelContainer}>
          <LobbyCashGamesFilter filters={filters} onFilterPress={onFilterPress} />
        </View>

        <View style={styles.ListContainer}>
          <LobbyCashGamesList
            checkAnimation={checkAnimationStatus}
            list={filteredList}
            loading={false}
            onTap={handleItemTap}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default LobbyCashGames
