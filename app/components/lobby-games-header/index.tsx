import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import {lobbyGamesHeaderStyles as styles} from './lobby-games-header.styles'
import {LobbyGamesHeaderProps} from './lobby-games-header.props'
import Presets from './lobby-games-header.presets'

export const LobbyGamesHeader: React.FunctionComponent<LobbyGamesHeaderProps> = (props) => {
  const {preset = 'cashGames'} = props
  const customProps = Presets[preset]

  return (
    <View style={[styles.Wrapper, props.style]}>
      <View style={styles.HeaderContainer}>
        <View style={styles.TitleContainer}>
          <View style={{justifyContent: 'center'}}>
            <Text style={styles.TitleText}>{customProps.title}</Text>
          </View>
        </View>
        <View style={styles.ActionsContainer}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.IconStyle}
            hitSlop={{top: 4, bottom: 4, left: 4, right: 4}}>
            <customProps.headerIcon3 />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
