import { combineReducers } from 'redux';

import getPosts from './getPosts';
import createPosts from './createPosts';
import getBooks from './getBooks';

export const reducers = combineReducers({ getPosts:getPosts ,createPosts:createPosts, getBooks:getBooks});
