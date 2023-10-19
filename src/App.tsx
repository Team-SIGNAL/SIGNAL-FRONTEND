import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import MyPage from "pages/MyPage";
import FeedList from "pages/FeedList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/hospital">
        {/* 병원 관계자 url  */}
        <Route path="my" element={<MyPage />} />
        <Route path="feed" element={<FeedList />} />
      </Route>
      <Route path="/admin">{/* 관리자 url  */}</Route>
    </Routes>
  );
}

export default App;
