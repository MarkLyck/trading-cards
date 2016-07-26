import Session from './models/Session'
import Cards from './collections/Cards'

let store = {
  session: new Session(),
  cards: new Cards(),
  settings: {
    appKey: 'kid_H1bf3MH_',
    appSecret: 'a79a471a21764a58801874b836f7797d',
    basicAuth: btoa('kid_H1bf3MH_:a79a471a21764a58801874b836f7797d')
  }
}

export default store
