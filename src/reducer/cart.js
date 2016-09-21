import {handleActions} from 'redux-actions';
import {CLEAR_ITEMS, ADD_ITEM, REMOVE_ITEM, SET_QUANTITY} from '../action/action-types';

export default handleActions({
  [CLEAR_ITEMS]: () => ({
    items: [],
  }),
  [ADD_ITEM]: (state, {payload: id}) => ({
    ...state,
    items: [
      ...state.items,
      {id, quantity: 1},
    ],
  }),
  [REMOVE_ITEM]: (state, {payload: id}) => ({
    ...state,
    items: state.items.slice(0).map((item) => {
      return (item.id === id) || item;
    }).filter((val) => val.constructor === Object),
  }),
  [SET_QUANTITY]: (state, {payload: {id: target, quantity}}) => ({
    ...state,
    items: state.items.map(({id, ...rest}) => (
      target === id ? {id, ...rest, quantity} : {id, ...rest}
    )),
  }),
}, {
  items: [],
});
