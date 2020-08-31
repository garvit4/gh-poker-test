import React, {useState, useEffect} from 'react'
import {Image, Text, View, Animated, Easing, Dimensions} from 'react-native'
import {lobbyCashGamesListItemStyles as styles} from './lobby-cash-games-list-item.styles'
import Presets from './lobby-cash-games-list-item.presets'
import {LobbyCashGamesListItemProps} from './lobby-cash-games-list-item.props'
import CardView from 'react-native-cardview'
import Ripple from 'react-native-material-ripple'
const {width} = Dimensions.get('window')

export const LobbyCashGamesListItem: React.FunctionComponent<LobbyCashGamesListItemProps> = (props) => {
  const {item, onTap} = props
  const leftXValue = new Animated.Value(0)
  const rightXValue = new Animated.Value(width)
  const animationDuration = 500
  const [animateType, setAnimateType] = useState({})

  const _animation = (xValue, xWidth) => {
    console.log(xWidth, 'x Widtyhhh>>>')
    Animated.timing(xValue, {
      toValue: xWidth,
      duration: animationDuration,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start()
  }
  useEffect(() => {
    if (item.animate === 'left') {
      setAnimateType({transform: [{translateX: leftXValue}]})
      _animation(leftXValue, -width)
    } else if (item.animate === 'right') {
      setAnimateType({transform: [{translateX: rightXValue}]})
      _animation(rightXValue, 0)
    }
  }, [item.animate])

  return (
    <Animated.View onAnimationEnd={props.animationEnd(true)} style={[styles.Wrapper, animateType]}>
      <CardView
        style={{marginHorizontal: 16, marginVertical: 12}}
        cornerOverlap={true}
        cornerRadius={8}
        cardElevation={20}
        cardMaxElevation={20}>
        <Ripple
          style={{borderRadius: 8, overflow: 'hidden'}}
          onPress={(e) => {
            onTap(e)
          }}>
          <View style={styles.ContentContainer}>
            <View style={[styles.Content, {width: 100}]}>
              <Image style={styles.ContentIcon} source={require('./assets/cash-games-blinds-icon.png')} />
              <Text style={styles.ContentValue}>
                {item && item.smallBlind}/{item && item.bigBlind}
              </Text>
              <Text style={styles.ContentText}>Blinds</Text>
              {/* <Placeholder height={16} width={90} style={{ marginTop: 8 }} visible={loading}/> */}
              {/* <Placeholder height={12} width={50} style={{ marginTop: 32 }} visible={loading}/> */}
            </View>
            <View style={[styles.Content, {width: 60}]}>
              <Image style={styles.ContentIcon} source={require('./assets/cash-games-players-icon.png')} />
              <Text style={styles.ContentValue}>
                {item && item.playersCount}
                {item && item.playersCount > 0 && '+'}
              </Text>
              <Text style={styles.ContentText}>Playing</Text>
              {/* <Placeholder height={16} width={60} style={{ marginTop: 8 }} visible={loading}/> */}
              {/* <Placeholder height={12} width={40} style={{ marginTop: 32 }} visible={loading}/> */}
            </View>
            <View style={[styles.Content, {width: 80}]}>
              <Image style={styles.ContentIcon} source={require('./assets/cash-games-buy-in-icon.png')} />
              <Text style={styles.ContentValue}>{item && item.minBuyIn}K</Text>
              <Text style={styles.ContentText}>Min Buy-in</Text>
              {/* <Placeholder height={16} width={80} style={{ marginTop: 8 }} visible={loading}/> */}
              {/* <Placeholder height={12} width={60} style={{ marginTop: 32 }} visible={loading}/> */}
            </View>
          </View>
        </Ripple>
      </CardView>
      <View style={[styles.GameTypeBadge, Presets[item.gameId]]}>
        <Text style={styles.GameTypeBadgeText}>{item && item.gameVariant.toUpperCase()}</Text>
      </View>
      {/* <Placeholder style={styles.GameTypeBadge} width={60} height={20} visible={loading}/> */}
    </Animated.View>
  )
}
