import React, { useState, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import {
  Home,
  LayoutIndex,
  Auth,
  Profile,
  TweetDetailIndex,
  Bookmarks,
  QuoteIndex,
  LogoutIndex,
  MessageIndex,
  MessageList,
  MessageContent,
  AffilateLayoutIndex,
  Followers,
  Followings,
  Verified,
  Search
} from "./screens";
import ProtectRoute from "./utils/ProtectRoute";
import LoaderIndex from "./components/loaders/index";

export default function App() {
  const [height, setHeight] = useState(0);
  return (
    <div className="based" style={{ height }}>
      <Routes>
        <Route path={"/"} element={<LayoutIndex />}>
          <Route index element={<Suspense fallback={<LoaderIndex />}>
            <ProtectRoute>
              <Home />
            </ProtectRoute>
          </Suspense>
          }
          />
          {/* quotes */}
          <Route path="i/quote/:id" element={<Suspense fallback={<LoaderIndex />}>
            <ProtectRoute>
              <QuoteIndex />
            </ProtectRoute>
          </Suspense>
          }
          />
          <Route path="i/bookmarks" element={<Suspense fallback={<LoaderIndex />}>
            <ProtectRoute>
              <Bookmarks />
            </ProtectRoute>
          </Suspense>
          }
          />
          <Route path="i/flow/signup" element={<Suspense fallback={<LoaderIndex />}>
            <Auth />
          </Suspense>
          }
          />
          {/* serach */}
          <Route path="search" element={<Suspense fallback={<LoaderIndex />}>
            <Search />
          </Suspense>
          }
          />
          {/* logout */}
          <Route path="logout" element={
            <ProtectRoute>
              <LogoutIndex />
            </ProtectRoute>
          }
          />
          {/* login route */}
          <Route path="i/flow/login" element={<Suspense fallback={<LoaderIndex />}>
            <Auth />
          </Suspense>
          }
          />

          {/* user profile route */}
          <Route path=":name" element={<Suspense fallback={<LoaderIndex />}>
            <Profile />
          </Suspense>
          }

          />
        </Route>
        {/* affilate */}
        <Route path={"/:name"} element={<AffilateLayoutIndex />}>
          <Route path="followers" element={<Suspense fallback={<LoaderIndex />}>
            <Followers />
          </Suspense>
          }
          />
          <Route path="following" element={<Suspense fallback={<LoaderIndex />}>
            <Followings />
          </Suspense>
          }
          />
        </Route>
        {/* message */}
        <Route path={"/messages"} element={<MessageIndex />}>
          <Route path="" element={<Suspense fallback={<LoaderIndex />}>
            <MessageList />
          </Suspense>
          }
          />
          <Route path=":name" element={<Suspense fallback={<LoaderIndex />}>
            <MessageContent />
          </Suspense>
          }
          />
        </Route>

        {/* tweet detail  route */}
        <Route path=":name/status/:id" element={<Suspense fallback={<LoaderIndex />}>
          <TweetDetailIndex />
        </Suspense>
        }
        />

      </Routes>
    </div>
  );
}
