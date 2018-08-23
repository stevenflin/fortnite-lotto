import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

export default class PoolTable extends Component {
	render() {
		return (
			<ReactTable
				data={[{
					name: 'First Lobby',
					entry: 10,
					people: 34,
				},{
					name: ':)',
					entry: 100,
					people: 53,
				},{
					name: 'Friends',
					entry: 100,
					people: 100,
				},{
					name: '$$$$$$$',
					entry: 1000,
					people: 89,
				},{
					name: 'Low Rollers',
					entry: 1,
					people: 5,
				},{
					name: 'First Lobby',
					entry: 10,
					people: 34,
				},{
					name: ':)',
					entry: 100,
					people: 53,
				},{
					name: 'Friends',
					entry: 100,
					people: 100,
				},{
					name: '$$$$$$$',
					entry: 1000,
					people: 89,
				},{
					name: 'Low Rollers',
					entry: 1,
					people: 5,
				},{
					name: 'First Lobby',
					entry: 10,
					people: 34,
				},{
					name: ':)',
					entry: 100,
					people: 53,
				},{
					name: 'Friends',
					entry: 100,
					people: 100,
				},{
					name: '$$$$$$$',
					entry: 1000,
					people: 89,
				},{
					name: 'Low Rollers',
					entry: 1,
					people: 5,
				}]}
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
              Cell: row => {
              	let color;
              	switch(row.value) {
              		case 1:
              			color = 'green';
              			break;
              		case 10:
              			color = 'blue';
              			break;
              		case 100:
              			color = 'purple';
              			break;
              		case 1000:
              			color = 'gold';
              			break;
									default:
										return;
              	}
              	return (
              		<div
						        style={{
						          width: '100%',
						          height: '100%',
						          color,
						        }}
						      >
						      	<strong>{row.value}</strong>
						      </div>
					      );
              },
              filterMethod: (filter, row, column) => parseInt(filter.value) === row.entry,
            },
            {
              Header: '# People',
              id: 'people',
              accessor: d => `${d.people}/100`,
              filterable: false,
            },
            {
              Header: 'Pot',
              id: 'pot',
              accessor: d => d.entry * d.people,
              filterable: false,
            }
          ]}
          filterable={true}
          defaultPageSize={10}
          className='-striped -highlight'
          loadingText='Finding Open Lobbies...'
          noDataText='No Open Lobbies'
					id="maintable"
			/>
		);
	}
}
