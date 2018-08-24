import React, { Component } from 'react';
import ReactTable from 'react-table';

import 'react-table/react-table.css';

import { generateColor } from '../../../helpers/colors';

import PoolTableButtons from './PoolTableButtonsContainer';
import NewPoolButton from './NewPoolButtonContainer';
import JoinModal from './JoinModalContainer';
import CreateModal from './CreateModalContainer';

export default class PoolTable extends Component {

	componentDidMount() {
		this.props.fetchPools();
	}

	render() {
		return (
      <div>
      <JoinModal />
      <CreateModal />
			<ReactTable
				data={this.props.pools}
				columns={[
          {
            Header: 'Name',
            id: 'name',
            accessor: d => d.name,
            filterable: false,
          },
          {
            Header: 'Entry',
            id: 'entry',
            accessor: d => d.entry,
            Cell: row => (
          		<div style={{color: generateColor(row.value)}}>
				      	<strong>{row.value}</strong>
				      </div>
			      ),
            filterMethod: (filter, row, column) => parseInt(filter.value) === row.entry,
          },
          {
            Header: '# People',
            id: 'people',
            accessor: d => `${d.participants.length}/100`,
            filterable: false,
          },
          {
            Header: 'Pot',
            id: 'pot',
            accessor: d => d.entry * d.participants.length,
            filterable: false,
          },
          {
            Header: () => <NewPoolButton />,
            id: 'action',
            filterable: false,
            sortable: false,
            Cell: row => <PoolTableButtons pool={row.original} />,
          }
        ]}
        filterable={true}
        defaultPageSize={10}
        className='-striped -highlight'
        loadingText='Finding Open Lobbies...'
        noDataText={this.props.errorFetchingPools ? 'There was a problem loading lobbies': 'No Open Lobbies'}
				id='maintable'
			/>
      </div>
		);
	}
}
