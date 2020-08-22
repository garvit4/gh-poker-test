import * as React from 'react'
import {useState} from 'react'
import {ScrollView, Text, TouchableOpacity, View} from 'react-native'
import {lobbyCashGamesFilterStyles as styles} from './lobby-cash-games-filter.styles'
import {LobbyCashGamesFilterProps} from './lobby-cash-games-filter-props'

const CrossIcon = require('./assets/cross-icon.svg').default as string

export const LobbyCashGamesFilter: React.FunctionComponent<LobbyCashGamesFilterProps> = (props) => {
  const {filters = []} = props

  const buttons = filters.map((item) => ({
    title: item,
    check: false,
  }))

  const [currentFilter, setCurrentFilter] = useState(buttons)

  const handleFilterButtonPress = (index, item) => {
    const copycurrentFilter = [...currentFilter]
    copycurrentFilter[index].check = !item.check
    setCurrentFilter(copycurrentFilter)
    const selectedItems = currentFilter.filter((val) => val.check)
    props.onFilterPress(selectedItems)
  }

  return (
    <View style={styles.Wrapper}>
      <ScrollView
        style={styles.ScrollViewContainer}
        contentContainerStyle={styles.FilterPanelContentContainerStyle}
        horizontal={true}
        bounces={false}
        overScrollMode={'always'}
        showsHorizontalScrollIndicator={false}>
        {currentFilter.map((item, index) => {
          const titleColor = item.check ? styles.ButtonTitleChecked.color : styles.ButtonTitle.color
          const borderColor = item.check ? styles.ButtonBorderChecked.borderColor : styles.ButtonBorder.borderColor

          return (
            <TouchableOpacity
              key={'button-' + index}
              style={styles.ButtonContainer}
              activeOpacity={0.75}
              onPress={() => {
                handleFilterButtonPress(index, item)
              }}>
              <View style={[styles.ButtonBorder, {borderColor}]}>
                <Text style={[styles.ButtonTitle, {color: titleColor}]}>{item.title}</Text>
                {item.check && (
                  <View style={styles.IconContainer}>
                    <CrossIcon height={12} width={12} style={styles.Icon} />
                  </View>
                )}
              </View>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </View>
  )
}
