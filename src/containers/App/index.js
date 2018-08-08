import React from 'react';
import { getResources, getActions } from 'lib/mockApi';
import './Container.css';

import Header from 'components/Header';
import SideBar from 'components/SideBar';
import MainView from 'components/MainView';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleResourceClick = this.handleResourceClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = {
      resources: [],
      actions: [],
      selectedResource: null,
      isLoading: false,
      filterValue: ''
    };
  }

  async componentDidMount() {
    this.setState({isLoading: true});
    const resources = await getResources();
    const selectedResource = resources[0];
    const actions = await getActions();
    this.setState({
      resources,
      actions,
      selectedResource,
      isLoading: false
    });
  }

  handleResourceClick(item) {
    this.setState({ selectedResource: item });
  }

  handleKeyPress(value) {
    this.setState({ filterValue: value }, async () => {
      const resources = await getResources(value);
      this.setState({ resources, selectedResource: null });
    });
  }

  render() {
    const { resources, actions, selectedResource, isLoading, filterValue } = this.state;
    return (
      isLoading
        ? null
        : <div>
          <Header />
          <div className="container">
            <SideBar
              data={resources}
              selectedResourceId={selectedResource && selectedResource.id}
              onClickItemHandler={this.handleResourceClick}
              filterValue={filterValue}
              onKeyPressHandler={this.handleKeyPress}
            />
            <MainView
              resource={selectedResource}
              actions={actions}
            />
          </div>
        </div>
    );
  }
}

export default App;
