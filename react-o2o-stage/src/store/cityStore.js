import { createStore } from 'redux'
import rootCity from "../reducers"

export default function cityStore(initialState){
  const store = createStore(rootCity,initialState,
   // 触发 redux-devtools
   window.devToolsExtension ? window.devToolsExtension() : undefined
  );
  return store;
}
