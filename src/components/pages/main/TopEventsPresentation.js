import React from 'react';

export default class TopEvents extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <ul id="eventsRightNow">
          // Pull upcoming pools/trades and present them as list items
          <li>
            <span class="eventName">
              // Event Name
            </span>
            <div class="eventFooter">
              <span>
                // Time until event starts
              </span>
              <span>
                // Current Pot (Traded Volume in the Event)
              </span>
            </div>
          </li>
          <li></li>
        </ul>
      </div>
    )
  }
}
