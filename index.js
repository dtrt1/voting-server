/**
 * Created by DTRT on 26.02.2017.
 */
import makeStore from './src/store';
import {startServer} from './src/server';

export const store = makeStore();
startServer(store);
