import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

export default class YourTable extends Component {
	render() {
		return (
			<ReactTable
				data={[{
					name: 'My Lobby 1',
					entry: 10,
					people: 34,
				},{
					name: 'My Lobby 2',
					entry: 100,
					people: 53,
				},{
					name: 'My Lobby 3',
					entry: 100,
					people: 100,
				},{
					name: 'My Lobby 4',
					entry: 1000,
					people: 89,
				}]}
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
            },
            {
              Header: 'People Remaining',
              id: 'people',
              accessor: d => `${d.people}/100`,
            },
            {
              Header: 'Pot',
              id: 'pot',
              accessor: d => d.entry * 100,
            },
            {
              Header: 'Possible Winnings',
              id: 'winnings',
              accessor: d => Math.floor((d.entry * 100) / d.people),
            }
          ]}
          defaultPageSize={10}
          className='-striped -highlight'
          loadingText='Finding Open Lobbies...'
          noDataText='No Open Lobbies'
			/>
		);
	}
}
