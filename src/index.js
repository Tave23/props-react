import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import MyPage from './App'

function PrintMyPage() {
  return(
    <MyPage/>
  )
}

ReactDOM.render(<PrintMyPage/>, document.getElementById("root"))