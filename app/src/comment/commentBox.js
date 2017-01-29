'use strict';

import React, { Component } from 'react';
import CommentList from './commentList';
import CommentForm from './commentForm';

class CommentBox extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="ui comments">
                <div>Comments</div>
                <div className="ui divider"></div>
                <CommentList data={his.props.data}/>
                <CommentForm />
            </div>
        );
    };
}

export { CommentBox as default };
