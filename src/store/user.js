const state = {
  id: '',
  name: '',
  email: '',
  avatar: '',
  notifications: {
    order: 1,
    quote: 3,
    inProgress: 2,
    completed: 4
  },
  settings: {
    notifications: {
      newOrder: {
        name: 'Novo Pedido',
        value: true
      },
      orderStatus: {
        name: 'Pedido Recusado/Aceito',
        value: true
      },
      newQuote: {
        name: 'Novo Orçamento',
        value: true
      },
      quoteStatus: {
        name: 'Orçamento Recusado/Aceito',
        value: true
      },
      newComments: {
        name: 'Novas Ressalvas',
        value: true
      }
    },
    other: {

    }
  }
}

const getters = {

}

const mutations = {

}

const actions = {

}

export default {
  state,
  getters,
  mutations,
  actions
}
