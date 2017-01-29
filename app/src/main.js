'use strict';

import 'semantic-ui/semantic.min.css!';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './comment/commentBox';

ReactDOM.render(
    <CommentBox url="../comments.json"/>,
    document.getElementById('app')
);
