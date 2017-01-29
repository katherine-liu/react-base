'use strict';
import React, { Component } from 'react';

class CommentForm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <form className="ui reply form">
                <div className="field">
                    <input type="text" placeholder="Name"></input>
                </div>
                <div className="field">
                    <textarea placeholder="Leave comments"></textarea>
                </div>
                <button className="ui blue button" type="submit">
                    Add Comment
                </button>
            </form>
        );
    }
}

export { CommentForm as default };
