import {GestureResponderEvent} from 'react-native'

// import { LobbyCashGamesItemInterface } from './../../models/lobby-cash-games-item'

export interface LobbyCashGamesListItemProps {
  /**
   * Tap event handler.
   */
  onTap?: (e: GestureResponderEvent) => void

  /**
   * Current card index
   */
  item?: {}

  /**
   * Whether card item should display placeholders.
   */
  loading: boolean
}
