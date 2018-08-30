import React, { Component } from 'react';
import ReactTable from 'react-table';

import 'react-table/react-table.css';

import { generateColor } from '../../../../../helpers/colors';

import PoolTableButtons from './poolTableButton/PoolTableButtonContainer';
import NewPoolButton from './newPoolButton/NewPoolButtonContainer';

export default class PoolTable extends Component {

	componentDidMount() {
		this.props.fetchPools();
	}

	render() {
		return (
      <div>
        <ReactTable
          data={this.props.pools}
          columns={[
            {
              Header: 'Name',
              id: 'name',
              accessor: d => d.name,
            },
            {
              Header: 'Entry',
              id: 'entry',
              accessor: d => d.entry,
              Cell: row => <div style={{color: generateColor(row.value)}}>{row.value}</div>,
              filterMethod: (filter, row, column) => parseInt(filter.value) === row.entry,
            },
            {
              Header: '# People',
              id: 'people',
              accessor: d => `${d.participants}/100`,
              filterable: false,
            },
            {
              Header: 'Pot',
              id: 'pot',
              accessor: d => d.entry * d.participants,
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
