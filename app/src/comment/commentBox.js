'use strict';

mport React, { Component } from 'react';

class CommentBox extends Component {
    constructor() {

    }
    render() {
        return(
            <div className="ui comments">
                <div>Comments</div>
                <div className="ui divider"></div>
            </div>
        );
    };
}

export { CommentBox as defalt };
