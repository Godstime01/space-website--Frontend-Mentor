import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import { Home, Destination, Crew, Technology } from "./pages"
import TechDetails from "./pages/Technology/TechDetails";
import data from "./data.json";
import CrewDetails from "./pages/Crew/CrewDetails";


function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/destination" element={<Destination />} />

        <Route path="/crew" element={<Crew />} >
          <Route index element={<CrewDetails data = {data.crew[0]} />} />
          
          <Route to="01" element={<CrewDetails data = {data.crew[0]} />} />
          <Route to="02" element={<CrewDetails data = {data.crew[1]} />} />
          <Route to="03" element={<CrewDetails data = {data.crew[2]} />} />
          <Route to="04" element={<CrewDetails data = {data.crew[3]} />} />
        </Route>

        <Route path="/technology" element={<Technology />}>
          <Route index element={<TechDetails data = {data.technology[0]} />} />
          <Route path="01" element={<TechDetails data = {data.technology[0]} />} />
          <Route path="02" element={<TechDetails data = {data.technology[1]} />} />
          <Route path="03" element={<TechDetails data = {data.technology[2]} />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
