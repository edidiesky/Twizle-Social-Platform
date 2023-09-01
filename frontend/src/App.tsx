import React, { useState, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import {
  Auth,
  Home,
  LayoutIndex,
} from "./screens";

export default function App() {
  const [height, setHeight] = useState(0);
  return (
    <div className="based" style={{ height }}>
      <Routes>
        <Route path={"/"} element={<LayoutIndex />}>
          <Route index element={<Suspense fallback={< >Hi</>}>
            <Home />
          </Suspense>
          }
          />
          <Route path="register" element={<Suspense fallback={< >Hi</>}>
            <Auth />
          </Suspense>
          }
          />
        </Route>
      </Routes>
    </div>
  );
}
