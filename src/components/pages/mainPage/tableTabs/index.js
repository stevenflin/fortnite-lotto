import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import PoolTable from './poolTable/PoolTableContainer';
import YourTable from './yourTable/YourTableContainer';

export default class TableTabs extends Component {
	render() {
		return (
		  <Tabs>
		    <TabList>
		      <Tab>Open Pools</Tab>
		      <Tab>Your Pools</Tab>
		    </TabList>

		    <TabPanel>
		      <PoolTable />
		    </TabPanel>
		    <TabPanel>
		      <YourTable />
		    </TabPanel>
		  </Tabs>
		);
	}
}