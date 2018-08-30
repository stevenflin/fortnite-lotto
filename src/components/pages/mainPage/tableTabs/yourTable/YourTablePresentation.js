import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

import { generateColor } from '../../../../../helpers/colors';


export default class YourTable extends Component {

	componentDidMount() {
		this.props.fetchActiveUserPools(this.props.userId);
	}

	render() {
		return (
			<ReactTable
				data={this.props.activeUserPools}
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
					},
					{
						Header: 'People Remaining',
						id: 'people',
						accessor: d => `${d.participants}/100`,
					},
					{
						Header: 'Pot',
						id: 'pot',
						accessor: d => d.entry * 100,
					},
					{
						Header: 'Possible Winnings',
						id: 'winnings',
						accessor: d => Math.floor((d.entry * 100) / d.participants),
					}
				]}
				defaultPageSize={10}
				className='-striped -highlight'
				loadingText='Loading Your Lobbies...'
				noDataText='You Have No Lobbies...'
			/>
		);
	}
}
