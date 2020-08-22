import {ViewStyle} from 'react-native'

export default {
  Full: {flex: 1} as ViewStyle,

  SafeArea: {
    backgroundColor: '#041B67',
    flex: 1,
    height: '100%',
  },

  Root: {
    backgroundColor: '#F2F2F2',
    flex: 1,
    height: '100%',
  } as ViewStyle,

  LinearGradient: {
    height: 25,
  } as ViewStyle,

  LobbyTinyCarousel: {
    // height: 142
  } as ViewStyle,

  LobbyHeader: {} as ViewStyle,

  LobbyFooter: {
    bottom: 0,
    left: 0,
    right: 0,
  } as ViewStyle,

  SafeAreaViewFooter: {
    backgroundColor: '#FFFFFF',
  } as ViewStyle,

  PanelContainer: {
    marginBottom: 10,
    paddingBottom: 10,
    zIndex: 1,
  } as ViewStyle,

  ListContainer: {
    flex: 1,
  } as ViewStyle,
}
