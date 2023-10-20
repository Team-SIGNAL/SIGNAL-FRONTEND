import { Routes, Route } from "react-router-dom";
import Layout from "layout";
// hospitla
import Landing from "./pages/Landing";
import MyPage from "pages/MyPage";
import FeedList from "pages/FeedList";
// admin

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route element={<Layout />}>
        <Route path="/hospital">
          {/* 병원 관계자 url  */}
          <Route path="my" element={<MyPage />} />
          <Route path="feed" element={<FeedList />} />
        </Route>
        <Route path="/admin">{/* 관리자 url  */}</Route>
      </Route>
    </Routes>
  );
}

export default App;
