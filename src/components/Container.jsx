import React from 'react';
import uuid from 'uuid';
import './Container.less';


export function makeUser(name) {
  return {
    id: uuid(),
    name,
  };
}

export default function Container() {
  return (
    <div className='container-hello-world'>
      Hello, World
    </div>
  );
}
