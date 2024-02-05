import Main from "./components/mainbox/Main"
import Sidebar from "./components/sidebar/Sidebar"
function App() {

  return (
    <>
      <div className="flex">
        <Sidebar/>
        <Main/>
       </div>
    </>
  )
}

export default App
