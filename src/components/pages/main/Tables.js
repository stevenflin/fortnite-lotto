import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import PoolTable from './PoolTable';
import YourTable from './YourTable';

export default class Tables extends Component {
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