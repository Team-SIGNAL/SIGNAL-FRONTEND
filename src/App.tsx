import { Routes, Route } from "react-router-dom";
import Layout from "layout";
//common
import Landing from "./pages/common/Landing";
import MyPage from "pages/common/MyPage";
import Feed from "pages/common/Feed";
import FeedList from "pages/common/FeedList";
import FeedWrite from "pages/common/FeedWrite";

// hospital
import Appointment from "pages/hospital/Appointment";
import AppointmentDetail from "pages/hospital/AppointmentDetail";
import ProctedRoute from "Routes/ProctedRoute";
import Certified from "pages/hospital/Certified";

// admin
import ApprovalList from "pages/admin/ApprovalList";
import ApprovalDetail from "pages/admin/ApprovalDetail";
import Recommend from "pages/hospital/Recommend";

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
            <Route path="rec" element={<Recommend/>} />
          </Route>
        </Route>
        <Route path="/admin">
          {/* 관리자 url  */}
          <Route path="" element={<ApprovalList />} />
          <Route path=":id" element={<ApprovalDetail />} />
          <Route path="feed" element={<FeedList />} />
          <Route path="feed/:id" element={<Feed />} />
          <Route path="feed/write" element={<FeedWrite />} />
        </Route>
      </Route>
      <Route path="*" element={<p>404</p>} />
    </Routes>
  );
}

export default App;
