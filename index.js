import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Main from './Component/Module1';
import './index.css';



 let root = document.querySelector('#root')
 ReactDom.render(<Main/>, root)