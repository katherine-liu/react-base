'use strict';
import React, { Component } from 'react';

class CommentForm extends Component {
    constructor(props) {
        super(props);
    }
    handleSubmit(event) {
        event.preventDefault();
        let author = this.refs.author.value,
        text = this.refs.text.value,
        date = new Date().toDateString();
        this.props.onCommentSubmit({author, text, date});
    }
    render() {
        return (
            <form className="ui reply form" onSubmit={this.handleSubmit.bind(this)}>
                <div className="field">
                    <input type="text" placeholder="Name" ref="author"></input>
                </div>
                <div className="field">
                    <textarea placeholder="Leave comments" ref="text"></textarea>
                </div>
                <button className="ui blue button" type="submit">
                    Add Comment
                </button>
            </form>
        );
    }
}

export { CommentForm as default };
