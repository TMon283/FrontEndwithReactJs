import React, { Component } from 'react'
import FormInput from './components/PTIT_CNTT4_IT104_Session15_Bai01/FormInput'
import ColorInput from './components/PTIT_CNTT4_IT104_Session15_Bai02/ColorInput'
import GetDate from './components/PTIT_CNTT4_IT104_Session15_Bai03/GetDate'
import GetRange from './components/PTIT_CNTT4_IT104_Session15_Bai04/GetRange'
import ListPost from './components/PTIT_CNTT4_IT104_Session15_Bai06/ListPost'
import GetTime from './components/PTIT_CNTT4_IT104_Session15_Bai07/GetTime'
import CountNumber from './components/PTIT_CNTT4_IT104_Session15_Bai08/CountNumber'
import TodoApp from './components/PTIT_CNTT4_IT104_Session15_Bai09/TodoApp'

export default class App extends Component {
  render() {
    return (
      <div>
        <FormInput></FormInput>
        <ColorInput></ColorInput>
        <GetDate></GetDate>
        <GetRange></GetRange>
        <ListPost></ListPost>
        <GetTime></GetTime>
        <CountNumber></CountNumber>
        <TodoApp></TodoApp>
      </div>
    )
  }
}
