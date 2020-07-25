import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectAll,
  fetchUserById
} from './draftSlice';

export function Draft() {
  console.log(useSelector(selectAll));
  const dispatch = useDispatch();

  return (
    <div>
      <input id="gistUrl" defaultValue="https://gist.github.com/jedfoster/042cb0490b63da3ae2c8.json" />

      <button onClick={() => dispatch(fetchUserById(document.getElementById('gistUrl').value))}>Load Gist</button>



      
    </div>
  );
}
