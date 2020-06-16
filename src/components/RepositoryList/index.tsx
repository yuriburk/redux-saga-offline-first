import React from 'react';
import {Text, Button, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';

import {ApplicationState} from '../../store';
import {Repository} from '../../store/ducks/repositories/types';
import * as RepositoriesActions from '../../store/ducks/repositories/actions';

// Mapeia as informações que vem do mapStateToProps
interface StateProps {
  repositories: Repository[];
}

// Mapeia as informações que vem do mapDispatchToProps
interface DispatchProps {
  addRequest({name, repositoryName}: any): void;
}

// Mapeia as informações que vem do componente pai
// interface OwnProps {}

type Props = StateProps & DispatchProps;

const RepositoryList: React.FC<Props> = ({repositories, addRequest}) => {
  console.log(repositories);

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        backgroundColor: '#7159c1',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {repositories.map((repository) => (
        <Text>{repository.name}</Text>
      ))}

      <Button
        title="Adicionar"
        onPress={() => addRequest({user: 'facebook', repositoryName: 'react'})}
      />
    </ScrollView>
  );
};

const mapStateToProps = ({repositories}: ApplicationState) => ({
  repositories: repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);
