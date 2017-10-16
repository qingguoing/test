/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React from 'react';

function AppView(props) {
  return (
    <div>
        <AddTodo {...props} />
      <Main {...props} />
    </div>
  );
}

function AddTodo(props) {
    const {onAdd, todos} = props;
    return (
        <input type="text" onBlur={() => props.onAdd('test')}/>
    );
}

function Main(props) {
  if (props.todos.size === 0) {
    return null;
  }
  return (
    <ul>
        {props.todos.map((text, i) => (
            <li
                key={i}
                onClick={(e) => props.onDelete(i)}
            >{text}</li>
        ))}
    </ul>
  );
}

const ENTER_KEY_CODE = 13;


export default AppView;
