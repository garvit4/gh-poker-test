import {ImageStyle, TextStyle, ViewStyle} from 'react-native'

export const lobbyGamesHeaderStyles = {
  Wrapper: {
    backgroundColor: '#041B67',
  } as ViewStyle,

  IconStyle: {
    height: 32,
    width: 32,
    marginHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
  } as ImageStyle,

  HeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  } as ViewStyle,

  ActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: -8,
  } as ViewStyle,

  TitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // flex: 1
  } as ViewStyle,

  BackButton: {
    height: 32,
    width: 32,
    justifyContent: 'center',
    alignItems: 'center',
  } as ImageStyle,

  TitleText: {
    fontSize: 16,
    lineHeight: 32,
    color: '#FFFFFF',
    paddingLeft: 4,
  } as TextStyle,

  Triangle: {
    borderWidth: 6,
    width: 10,
    marginLeft: 190,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#FFFFFF',
    borderLeftColor: 'transparent',
  } as ViewStyle,

  DropDownParentView: {
    width: 168,
    alignSelf: 'flex-end',
    backgroundColor: '#ffffff',
    borderRadius: 4,
    zIndex: 10000,
  } as ViewStyle,

  DropDownChildView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 25,
    paddingVertical: 12,
    alignItems: 'center',
  } as ViewStyle,

  DropDownText: {
    fontSize: 12,
    marginLeft: 10,
  } as TextStyle,

  DropDownIcon: {
    justifyContent: 'flex-start',
  } as ImageStyle,

  HeaderTextTriangle: {
    marginTop: 6,
    marginLeft: 3,
    borderWidth: 5,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: 'white',
  } as TextStyle,

  NavigationTextNormal: {
    fontSize: 16,
    color: 'white',
    marginVertical: 20,
  } as TextStyle,

  NavigationTextHighlighted: {
    fontSize: 20,
    color: 'white',
    marginVertical: 20,
  } as TextStyle,

  BlurStyle: {
    position: 'absolute',
    top: -30,
    left: -30,
    bottom: 0,
    right: 0,
  } as ViewStyle,

  CrossIconStyle: {
    bottom: 40,
    position: 'absolute',
    alignSelf: 'center',
  } as ImageStyle,

  FlatListView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 370,
  } as ViewStyle,

  FlatListItem: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  } as ViewStyle,

  DropDownParentTourneyDetailView: {
    alignSelf: 'flex-end',
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    justifyContent: 'center',
    marginTop: 6,
  } as ViewStyle,

  TriangleTourneyDetailView: {
    position: 'absolute',
    top: -6,
    right: 9,
    borderWidth: 6,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#FFFFFF',
    borderLeftColor: 'transparent',
  } as ViewStyle,

  TourneyDetailText: {
    color: '#4E4D4D',
    lineHeight: 14,
    fontSize: 12,
    marginHorizontal: 10,
    textAlign: 'center',
  } as TextStyle,
}
