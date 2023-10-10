import { Routes,Route } from "react-router-dom";
import Landing from "./pages/Landing";
import MyPage from "pages/MyPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/my" element={<MyPage/>}/>
    </Routes>
  );
}

export default App;
