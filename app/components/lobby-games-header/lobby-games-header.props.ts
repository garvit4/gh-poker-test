import React from 'react'
import {ViewStyle} from 'react-native'

export interface LobbyGamesHeaderProps {
  /**
   * Children components.
   */
  children?: React.ReactNode

  /**
   * Card preset.
   */
  preset: string

  /**
   * Container style.
   */
  style?: ViewStyle | Array<ViewStyle>
}
