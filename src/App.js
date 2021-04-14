import './App.css';
import ScrollWindow from './components/ScrollWindow'

function App() {

  let boxes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  console.log(boxes, "App")
  return (
    <div className="App">
      <h1>Embedded Scroll Window</h1>
      <ScrollWindow boxes={boxes}/>
    </div>
  );
}

export default App;
