import React from 'react';
import isEmpty from 'lodash/isEmpty';
import './MainView.css';

import Card from 'components/Card';
import { getActionsByIds } from 'lib/selectors';

export const MainView = ({ resource, actions }) => {
  const actionsToDisplay = resource && getActionsByIds(actions, resource.actionIds);
  return (
    <div className="mainview">
      {
        isEmpty(resource)
          ? <div>No resource selected</div>
          : <Card
            resource={resource}
            actions={actionsToDisplay}
          />
      }
    </div>
  );
};

export default MainView;
