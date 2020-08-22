import {ImageStyle, TextStyle, ViewStyle} from 'react-native'

export const lobbyCashGamesListItemStyles = {
  Wrapper: {
    flex: 1,
    borderRadius: 8,
  } as ViewStyle,

  PlaceholderGameTypeBadge: {
    width: 75,
    height: 20,
    minWidth: 64,
    position: 'absolute',
    top: -9,
    left: 16,
    borderRadius: 2,
  } as ViewStyle,

  GameTypeBadgeBack: {
    position: 'absolute',
    width: 'auto',
    height: 'auto',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  } as ViewStyle,

  GameTypeBadge: {
    minWidth: 64,
    height: 20,
    position: 'absolute',
    top: 2,
    left: 28,
    borderRadius: 2,
    overflow: 'hidden',
    elevation: 1000,
  } as ViewStyle,

  ContentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',

    paddingTop: 23,
    paddingBottom: 17,
    paddingHorizontal: 16,

    height: 84,
    overflow: 'visible',
    borderRadius: 8,
  } as ViewStyle,

  Content: {} as ViewStyle,

  GameTypeBadgeText: {
    lineHeight: 19,
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 10,
  } as TextStyle,

  PlaceholderContent: {
    width: 50,
    height: 20,
  } as ViewStyle,

  ContentIcon: {
    position: 'absolute',
    top: 8,
    left: 0,
    opacity: 0.9,
    width: 16,
    height: 16,
  } as ImageStyle,

  ContentValue: {
    paddingLeft: 20,
    fontSize: 16,
    lineHeight: 32,
    opacity: 0.9,
    color: '#272933',
  } as TextStyle,

  ContentText: {
    fontSize: 10,
    color: '#9A9A9A',
  } as TextStyle,
}
