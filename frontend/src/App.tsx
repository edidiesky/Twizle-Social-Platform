import React, { useState, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import {
  Auth,
  Home,
  Profile,
  TweetDetailIndex,
  Bookmarks,
  LogoutIndex,
  QuoteIndex,
  LayoutIndex,
  MessageIndex,
  MessageList,
  MessageContent,
  Followers,
  Followings,
  Verified,
  AffilateLayoutIndex
} from "./screens";
import ProtectRoute from "./utils/ProtectRoute";
import Preloader from "./components/loaders/preloader";

export default function App() {
  const [height, setHeight] = useState(0);
  return (
    <div className="based w-100 h-100" style={{ height }}>
      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route path={"/"} element={<LayoutIndex />}>
            <Route index element={<Suspense fallback={<Preloader />}>
              <ProtectRoute>
                <Home />
              </ProtectRoute>
            </Suspense>
            }
            />
            <Route path="i/flow/signup" element={<Suspense fallback={<Preloader />}>

              <Auth />
            </Suspense>
            }
            />
            {/* bookmarks route */}
            <Route path="i/bookmarks" element={<Suspense fallback={<Preloader />}>
              <ProtectRoute>
                <Bookmarks />
              </ProtectRoute>
            </Suspense>
            }
            />
            <Route path="i/quote/:id" element={<Suspense fallback={<Preloader />}>
              <ProtectRoute>
                <QuoteIndex />
              </ProtectRoute>
            </Suspense>
            }
            />
            {/* login route */}
            <Route path="i/flow/login" element={<Suspense fallback={<Preloader />}>

              <Auth />
            </Suspense>
            }
            />

            {/* user profile route */}
            <Route path=":name" element={<Suspense fallback={<Preloader />}>
              <ProtectRoute>
                <Profile />
              </ProtectRoute>
            </Suspense>
            }

            />
          </Route>

          <Route path={"/messages"} element={<MessageIndex />}>
            <Route index element={<Suspense fallback={<Preloader />}>
              <ProtectRoute>
                <MessageList />
              </ProtectRoute>
            </Suspense>} />
            <Route path=":id" element={<Suspense fallback={<Preloader />}>
              <MessageContent />
            </Suspense>} />
          </Route>

          {/* affilate */}
          <Route path={"/:name"} element={<AffilateLayoutIndex />}>
            <Route path="followers" element={<Suspense fallback={<Preloader />}>
              <ProtectRoute>
                <Followers />
              </ProtectRoute>
            </Suspense>} />
            <Route path="following" element={<Suspense fallback={<Preloader />}>
              <ProtectRoute>
                <Followings />
              </ProtectRoute>
            </Suspense>} />
          </Route>


          {/* tweet detail  route */}
          <Route path=":name/status/:id" element={<Suspense fallback={<Preloader />}>
            <ProtectRoute>
              <TweetDetailIndex />
            </ProtectRoute>
          </Suspense>
          }
          />


          {/* Logout route */}
          <Route path="logout" element={<Suspense fallback={<Preloader />}>
            <ProtectRoute>
              <LogoutIndex />
            </ProtectRoute>
          </Suspense>
          }
          />

        </Routes>
      </Suspense>
    </div>
  );
}
