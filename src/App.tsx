import { Routes, Route } from "react-router-dom";
import Layout from "layout";
// hospital
import Landing from "./pages/Landing";
import MyPage from "pages/MyPage";
import Feed from "pages/Feed";
import FeedList from "pages/FeedList";
import Appointment from "pages/Appointment";
import AppointmentDetail from "pages/AppointmentDetail";
import FeedWrite from "pages/FeedWrite";

// admin

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route element={<Layout />}>
        <Route path="/hospital">
          {/* 병원 관계자 url  */}
          <Route path="" element={<Appointment />} />
          <Route path=":date" element={<AppointmentDetail />} />
          <Route path="my" element={<MyPage />} />
          <Route path="rec" element={<MyPage />} />
          <Route path="feed/write" element={<FeedWrite />} />
          <Route path="feed" element={<FeedList />} />
          <Route path="feed/:id" element={<Feed />} />
        </Route>
        <Route path="/admin">
          {/* 관리자 url  */}
          <Route path="" element={<></>} />
          <Route path="feed" element={<FeedList />} />
          <Route path="feed/write" element={<FeedWrite />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
