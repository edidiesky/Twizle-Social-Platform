import React, { useState, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import {
  Auth,
  Home,
  LayoutIndex,
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
          {/* login route */}
          <Route path="i/flow/login" element={<Suspense fallback={<Preloader/>}>
            <Auth />
          </Suspense>
          }
          />
        </Route>
      </Routes>
    </div>
  );
}
