import React, { useState, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import {
  Auth,
  Home,
  LayoutIndex,
  Profile,
  TweetDetailIndex,
  Bookmarks
} from "./screens";
import ProtectRoute from "./utils/ProtectRoute";
import Preloader from "./components/loaders/preloader";

export default function App() {
  const [height, setHeight] = useState(0);
  return (
    <div className="based" style={{ height }}>
      <Routes>
        <Route path={"/"} element={<LayoutIndex />}>
          <Route index element={<Suspense fallback={<Preloader/>}>
            <ProtectRoute>
              <Home />
            </ProtectRoute>
          </Suspense>
          }
          />
          <Route path="i/flow/signup" element={<Suspense fallback={<Preloader/>}>
            <Auth />
          </Suspense>
          }
          />
          {/* bookmarks route */}
          <Route path="i/bookmarks" element={<Suspense fallback={<Preloader />}>
            <Bookmarks />
          </Suspense>
          }
          />
          {/* login route */}
          <Route path="i/flow/login" element={<Suspense fallback={<Preloader/>}>
            <Auth />
          </Suspense>
          }
          />

          {/* user profile route */}
          <Route path=":name" element={<Suspense fallback={<Preloader />}>
            <Profile />
          </Suspense>
          }
          
          />
        </Route>

        {/* tweet detail  route */}
        <Route path=":name/status/:id" element={<Suspense fallback={<Preloader />}>
          <TweetDetailIndex />
        </Suspense>
        }
        />

      </Routes>
    </div>
  );
}
