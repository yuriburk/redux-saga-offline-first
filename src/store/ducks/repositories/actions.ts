// Funções que disparam os types
import {action} from 'typesafe-actions';
import {RepositoriesTypes, Repository, AddRequest} from './types';

export const addRequest = (data: AddRequest) =>
  action(RepositoriesTypes.ADD_REQUEST, {data});

export const addSuccess = (data: Repository[]) =>
  action(RepositoriesTypes.ADD_SUCCESS, {data});

export const addFailure = () => action(RepositoriesTypes.ADD_FAILURE);
