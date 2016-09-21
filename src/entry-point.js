/* eslint-env browser */
import React from 'react';
import {render} from 'react-dom';

import Main from './component/main';
import { createStore } from 'redux';
import beginningState from './store/items';
import reducer from './reducer/index';

import '../styles/global.css';

const store = createStore(reducer, beginningState);

render(<Main store={store}/>, document.getElementById('mount'));
