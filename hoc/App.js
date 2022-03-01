import React,{Component} from 'react';
import './App.css';
import ClickCounter from './components/click';
import HoverCounter from './components/HoverCounter';

class App extends Component
{
  render()
  {
    return(
      <div className='App'>
        <ClickCounter/>
        <HoverCounter/>
      </div>
    )
  }
}
export default App;
