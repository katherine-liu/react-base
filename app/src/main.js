'use strict';

import 'semantic-ui/semantic.min.css!';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, browserHistory, Link, IndexRoute, Redirect } from 'react-router';
import CommentBox from './comment/commentBox';

class App extends Component {
    componentDidMount() {
        console.log('App2 did mount');
    }
    componentWillReceiveProps() {
        console.log('App2 will receive props');
    }
    componentDidUpdate() {
        console.log('App2 did update');
    }
    render() {
        return (
            <div>
                <div className="ui secondary pointing menu">
                    <Link className="item" to="/home">Home</Link>
                    <Link className="item" to="/about">About</Link>
                    <Link className="item" to="/contact">Contact</Link>
                </div>
                {this.props.children}
            </div>
        );
    }
}
class Home extends Component {
    componentDidMount() {
        console.log('Home did mount');
    }
    componentWillUnmount() {
        console.log('Home will unmount');
    }
    render() {
        return (
            <h1>Home...</h1>
        );
    }
}
class About extends Component {
    componentDidMount() {
        console.log('About did mount');
    }
    render() {
        return (
            <h1>Anout...</h1>
        );
    }
}
class Contact extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="ui info message">
                    Contact contents {this.props.params.id}
                </div>
            </div>
        );
    }
}
class Comment extends Component {
    render () {
        return (
            <CommentBox />
        );
    }
}

ReactDOM.render(
    (
        <Router history={ hashHistory }>
            <Route path="/" component={App}>
                <IndexRoute component={Home}></IndexRoute>
                <Route path="home" component={Home}></Route>
                <Route path="about" component={About}></Route>
                <Route path="contact" component={Contact}>
                    <Route path="/shows/:id" component={Comment}></Route>
                    <Redirect from="shows/:id" to="/shows/:id"></Redirect>
                </Route>
            </Route>
        </Router>
    ),
    document.getElementById('app')
);
