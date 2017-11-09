import React from 'react';
import Header from './Header';
import HeaderProjectName from './HeaderProjectName';
import ContestPreview from './ContestPreview';

class App extends React.Component {
    state = {
        projectInfo: 'Hi, I am Ali Roshanbin and this application is my first application using Node, MongoDB and React',
        pageHeader: 'Naming Contests',
        contests: this.props.initialContests
    };
    componentDidMount() {

    }
    componentWillUnmount() {

    }
    render() {
        return (
            <div className="App">
                <br />
                <Header message={this.state.projectInfo} />
                <br />
                <HeaderProjectName message={this.state.pageHeader} />
                <div>
                    {this.state.contests.map(contest =>
                        <ContestPreview key={contest.id} {...contest} />
                    )}
                </div>
            </div>
        );
    }
}

export default App;