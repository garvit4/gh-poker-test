const MyTickets = require('./assets/my-tickets.svg').default as string
const RegisteredTourneys = require('./assets/registered-tourneys.svg').default as string
const LeaderBoards = require('./assets/leader-boards.svg').default as string
const QuestionIcon = require('./assets/question-icon.svg').default as string
const WalletIcon = require('./assets/wallet-icon.svg').default as string
const Ellipsis = require('./assets/ellipsis.svg').default as string
const BackIcon = require('./assets/back-icon.svg').default as string

export default {
  'cash-games': {
    title: 'Cash Games',
    arrowImg: BackIcon,
    headerIcon1: QuestionIcon,
    headerIcon2: WalletIcon,
    headerIcon3: Ellipsis,
    dropDownIcon1: MyTickets,
    dropDownIcon2: RegisteredTourneys,
    dropDownIcon3: LeaderBoards,
    dropDownIcon4: LeaderBoards,
    dropDownIcon5: LeaderBoards,
    dropDownText1: 'Item1',
    dropDownText2: 'Item2',
    dropDownText3: 'Item3',
    dropDownText4: 'Item4',
    dropDownText5: 'Item5',
    dropDownHeight: 209,
    dropDownWidth: 213,
  },
}
