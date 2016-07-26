import Session from './models/Session'
import Cards from './collections/Cards'
import Users from './collections/Users'
import UserCards from './collections/userCards'

let store = {
  session: new Session(),
  cards: new Cards(),
  userCards: new UserCards(),
  users: new Users(),
  settings: {
    appKey: 'kid_H1bf3MH_',
    appSecret: 'a79a471a21764a58801874b836f7797d',
    basicAuth: btoa('kid_H1bf3MH_:a79a471a21764a58801874b836f7797d')
  }
}

export default store
