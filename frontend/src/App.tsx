import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  LayoutIndex,
  Auth,
  Home,
  Profile,
  Bookmarks,
  QuoteIndex,
  MessageIndex,
  MessageContent,
  Followers,
  Followings,
  TweetDetailIndex,
  Search,
  LogoutIndex,
  AffilateLayoutIndex,
} from "./screens";
import ProtectRoute from "./utils/ProtectRoute";
import Preloader from "./components/loaders/preloader";
import LoaderIndex from "./components/loaders";

export default function App() {
  return (
    <div className="based w-100 h-100">
      <Routes>
        <Route path="/" element={<LayoutIndex />}>
          <Route index element={<ProtectRoute><Home /></ProtectRoute>} />
          <Route path="i/flow/signup" element={<Auth />} />
          <Route path="i/bookmarks" element={<ProtectRoute><Bookmarks /></ProtectRoute>} />
          <Route path="i/quote/:id" element={<ProtectRoute><QuoteIndex /></ProtectRoute>} />
          <Route path="i/flow/login" element={<Auth />} />
          <Route path=":name" element={<ProtectRoute><Profile /></ProtectRoute>} />
        </Route>

        <Route path="/messages" element={<MessageIndex />}>
          <Route index element={<ProtectRoute><MessageContent /></ProtectRoute>} />
          <Route path=":id" element={<MessageContent />} />
        </Route>

        <Route path="/:name" element={<AffilateLayoutIndex />}>
          <Route path="followers" element={<ProtectRoute><Followers /></ProtectRoute>} />
          <Route path="following" element={<ProtectRoute><Followings /></ProtectRoute>} />
        </Route>

        <Route path=":name/status/:id" element={<ProtectRoute><TweetDetailIndex /></ProtectRoute>} />

        <Route path="/search" element={<ProtectRoute><Search /></ProtectRoute>} />

        <Route path="logout" element={<ProtectRoute><LogoutIndex /></ProtectRoute>} />
      </Routes>
    </div>
  );
}
