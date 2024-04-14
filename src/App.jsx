
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <div className="App">
      <Card date={5} title={"Post Two"} reads={42} views={1002} comments={78} img={"https://downloadwap.com/thumbs2/wallpapers/p2/18/places/qwpLEPqP.jpg"} />
      <Card date={8} title={"Post Two"} reads={3} views={120} comments={21} img={"https://www.dekoros.com/wp-content/uploads/2023/04/YD-00730.jpg"} />
      <Card date={12} title={"Post Three"} reads={128} views={13855} comments={94} img={"https://e0.pxfuel.com/wallpapers/621/116/desktop-wallpaper-purple-scenery-pink-scenery.jpg"} />
    </div>
  )
}

export default App
