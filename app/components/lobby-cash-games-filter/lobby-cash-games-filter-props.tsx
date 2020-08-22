export interface LobbyCashGamesFilterProps {
  /**
   * Title of the filter button
   */
  filters?: Array<string>

  /**
   * Change of filter 
   */
  onFilterPress?: Function

  /**
   * Whether to show icon or not
   */
  toggleIcon?: boolean
}
