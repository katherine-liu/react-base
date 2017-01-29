'use strict';

import React, { Component } from 'react';

class Comment extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="comment">
                <div className="content">
                    <span className="author">{this.props.author}</span>
                    <div className="metadata">
                        <span className="">{this.props.date}</span>
                    </div>
                    <div className="text">{this.props.children}</div>
                </div>
            </div>
        );
    };
}

export { Comment as default };
