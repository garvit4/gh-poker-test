import {TextStyle, ViewStyle} from 'react-native'

export const lobbyCashGamesFilterStyles = {
  Wrapper: {
    backgroundColor: '#F2F2F2',
    paddingHorizontal: 16,
    paddingTop: 16,
    width: '100%',
  } as ViewStyle,

  ScrollViewContainer: {
    flexDirection: 'row',
  } as ViewStyle,

  ButtonContainer: {
    marginRight: 16,
  } as ViewStyle,

  OverlayFilterButtonContainer: {
    borderWidth: 1,
    borderRadius: 6.35,
    borderColor: '#9E9E9E',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 7,
    justifyContent: 'center',
    marginRight: 16,
  } as ViewStyle,

  FilterPanelContentContainerStyle: {
    justifyContent: 'flex-start',
    paddingRight: 0,
    marginRight: 0,
  } as ViewStyle,

  ButtonBackground: {
    borderRadius: 6,
    overflow: 'hidden',
    backgroundColor: 'transparent',
  } as ViewStyle,

  ButtonBackgroundChecked: {
    backgroundColor: '#2F96F7',
  } as ViewStyle,

  ButtonBorder: {
    borderWidth: 1,
    borderRadius: 6.35,
    borderColor: '#9E9E9E',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 7,
  } as ViewStyle,

  ButtonBorderChecked: {
    borderColor: '#041B67',
  } as ViewStyle,

  ButtonTitle: {
    color: '#9E9E9E',
    lineHeight: 17,
    fontSize: 12,
    marginVertical: 5,
  } as TextStyle,

  ButtonTitleChecked: {
    color: '#041B67',
  } as TextStyle,

  IconContainer: {
    width: 12 + 4,
    marginRight: 4,
  } as ViewStyle,

  FilterOverlayIconContainer: {
    width: 12 + 4,
  } as ViewStyle,

  NumberOfFiltersContainer: {
    backgroundColor: '#041B67',
    width: 12,
    height: 12,
    borderRadius: 100,
    marginRight: 4,
  } as ViewStyle,

  NumberOfFiltersText: {
    color: '#FFFFFF',
    lineHeight: 14,
    fontSize: 8,
    alignSelf: 'center',
    marginTop: -1,
  } as TextStyle,

  FilterOverlayIcon: {
    marginRight: 6,
  } as ViewStyle,

  Icon: {
    marginLeft: 8,
  } as ViewStyle,
}
