import Profile from "./components/Profile";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="flex min-h-dvh">
      <Sidebar/>
      <Profile/>
    </div>
  )
}

export default App;