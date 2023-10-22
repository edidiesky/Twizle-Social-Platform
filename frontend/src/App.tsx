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
import { useAppDispatch, useAppSelector } from "./hooks/reduxtoolkit";
import { getBackgroundTheme, getColorTheme } from "./features/theme/themeSlice";
import ProfileIndex from "./screens/Profile";

export default function App() {
  const [height, setHeight] = useState(0);
  const dispatch = useAppDispatch()
  const { backgroundtheme, colortheme } = useAppSelector(store => store.theme)
  // set the theme
  React.useEffect(() => {
    dispatch(getBackgroundTheme('any'))
    dispatch(getColorTheme('any'))
  }, [])

  // store the theme background and color in the local storage of the user broweser
  React.useEffect(() => {
    document.documentElement.className = `${backgroundtheme} ${colortheme}`
    // store
    localStorage.setItem('theme', backgroundtheme);
    localStorage.setItem('colortheme', colortheme);
  }, [backgroundtheme, colortheme])
  return (
    <div className="based" style={{ height }}>
      <Routes>
        <Route path={"/"} element={<LayoutIndex />}>
          <Route index element={<Suspense fallback={<></>}>
            <ProtectRoute>
              <Home />
            </ProtectRoute>
          </Suspense>
          }
          />
          {/* quotes */}
          <Route path="i/quote/:id" element={<Suspense fallback={<></>}>
            <ProtectRoute>
              <QuoteIndex />
            </ProtectRoute>
          </Suspense>
          }
          />
          <Route path="i/bookmarks" element={<Suspense fallback={<></>}>
            <ProtectRoute>
              <Bookmarks />
            </ProtectRoute>
          </Suspense>
          }
          />
          <Route path="i/flow/signup" element={<Suspense fallback={<></>}>
            <Auth />
          </Suspense>
          }
          />
          {/* serach */}
          <Route path="search" element={<Suspense fallback={<></>}>
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
          <Route path="i/flow/login" element={<Suspense fallback={<></>}>
            <Auth />
          </Suspense>
          }
          />

          {/* user profile route */}
          {/* <Route path=":name" element={<Suspense fallback={<></>}>
            <Profile />
          </Suspense>
          }

          /> */}
          <Route path=":name" element={<ProfileIndex />
          }

          />
        </Route>
        {/* affilate */}
        <Route path={"/:name"} element={<AffilateLayoutIndex />}>
          <Route path="followers" element={<Suspense fallback={<></>}>
            <Followers />
          </Suspense>
          }
          />
          <Route path="following" element={<Suspense fallback={<></>}>
            <Followings />
          </Suspense>
          }
          />
        </Route>
        {/* message */}
        <Route path={"/messages"} element={<MessageIndex />}>
          <Route path="" element={<Suspense fallback={<></>}>
            <MessageList />
          </Suspense>
          }
          />
          <Route path=":id" element={<Suspense fallback={<></>}>
            <MessageContent />
          </Suspense>
          }
          />
        </Route>

        {/* tweet detail  route */}
        <Route path=":name/status/:id" element={<Suspense fallback={<></>}>
          <TweetDetailIndex />
        </Suspense>
        }
        />

      </Routes>
    </div>
  );
}
