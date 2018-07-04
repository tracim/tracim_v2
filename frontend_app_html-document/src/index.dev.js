import React from 'react'
import ReactDOM from 'react-dom'
import HtmlDocument from './container/HtmlDocument.jsx'
// import PopupCreateHtmlDocument from './container/PopupCreateHtmlDocument.jsx'

require('./css/index.styl')

ReactDOM.render(
  <HtmlDocument data={undefined} />
  , document.getElementById('content')
)

// ReactDOM.render(
//   <PopupCreateHtmlDocument />
//   , document.getElementById('content')
// )
