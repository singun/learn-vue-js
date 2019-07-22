import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];

    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "" && localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }

    return arr;
  }
}

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch()
  },
  getters: {
    storedTodoItems(state) {
      return state.todoItems;
    }
  },
  mutations: {
    addOneItem(state, newTodoItem) {      
      const obj = {
        completed: false,
        item: newTodoItem
      };
      
      localStorage.setItem(newTodoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeOneItem(state, payload) {
      let {
        todoItem, index
      } = payload;
      
      localStorage.removeItem(todoItem.item);
      state.todoItems.splice(index,1);
    },
    toggleOneItem(state, payload) {
      let {
        todoItem, index
      } = payload;
      
      state.todoItems[index].completed = !state.todoItems[index].completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems(state) {
      localStorage.clear();
      state.todoItems = []
    }
  }
});