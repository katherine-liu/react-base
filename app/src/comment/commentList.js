'use strict';

import React, { Component } from 'react';
import Comment from './comment';

class CommentList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let commentNodes = this.props.data.map(comment => {
            return (
                <div>
                    <Comment author={comment.author} date={comment.date}>
                        {comment.text}
                    </Comment>
                </div>
            );
        });
        return (
            <div>
                {commentNodes}
            </div>
        )
    };
}

export { CommentList as default };
