import {Action} from 'typesafe-actions';

// Actions Types -> Disparados pelo componente e ouvido pelo Redux Saga que vai realizar a função
export enum RepositoriesTypes {
  ADD_REQUEST = '@repositories/ADD_REQUEST',
  ADD_SUCCESS = '@repositories/ADD_SUCCESS',
  ADD_FAILURE = '@repositories/ADD_FAILURE',
}

// Data Types -> Informação que vai estar dentro do reducer

export interface Repository {
  id: number;
  name: string;
}

export interface AddRequest {
  user: string;
  repositoryName: string;
}

// State Types -> Formato do estado imutavel armazenado pelo reducer

export interface RepositoriesState {
  readonly data: Repository[];
  readonly loading: boolean;
  readonly error: boolean;
}

// Actions
export interface AppAction extends Action {
  payload?: any;
}
