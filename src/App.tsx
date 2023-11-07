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
import ProctedRoute from "Routes/ProctedRoute";
import Certified from "pages/Certified";

// admin

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/certified" element={<Certified />} />
      <Route element={<Layout />}>
        <Route path="/hospital">
          {/* 병원 관계자 url  */}
          <Route element={<ProctedRoute />}>
            <Route path="" element={<Appointment />} />
            <Route path=":date" element={<AppointmentDetail />} />
            <Route path="my" element={<MyPage />} />
            <Route path="feed" element={<FeedList />} />
            <Route path="feed/:id" element={<Feed />} />
            <Route path="feed/write" element={<FeedWrite />} />
            <Route path="rec" element={<>추천</>} />
          </Route>
        </Route>
        <Route path="/admin">
          {/* 관리자 url  */}
          <Route path="" element={<></>} />
          <Route path="feed" element={<FeedList />} />
          <Route path="feed/write" element={<FeedWrite />} />
        </Route>
      </Route>
      <Route path="*" element={<p>404</p>} />
    </Routes>
  );
}

export default App;
