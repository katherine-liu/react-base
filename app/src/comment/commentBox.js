'use strict';

import React, { Component } from 'react';
import $ from 'jquery';
import CommentList from './commentList';
import CommentForm from './commentForm';

class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.getComments();
        // setInterval(() => this.getComments(), 5000);
    }
    getComments() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: comments => {
                this.setState({data: comments});
            },
            error: (xhr, status, error) => {
                // console.log(error);
            }
        });
    }
    handleCommentSubmit(comment) {
        let comments = this.state.data,
        newComments = comments.concat(comment);
        this.setState({data: newComments});
    }
    render() {
        return(
            <div className="ui comments">
                <div>Comments</div>
                <div className="ui divider"></div>
                <CommentList data={this.state.data}/>
                <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)}/>
            </div>
        );
    };
}

export { CommentBox as default };
