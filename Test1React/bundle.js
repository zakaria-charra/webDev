'use strict';

var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;

var content = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Hey'
    ),
    React.createElement(
        'ul',
        null,
        React.createElement(
            'li',
            null,
            'UN'
        ),
        React.createElement(
            'li',
            null,
            'DEUX'
        ),
        React.createElement(
            'li',
            null,
            'TROIS'
        )
    )
);
render(content, document.getElementById('root'));
