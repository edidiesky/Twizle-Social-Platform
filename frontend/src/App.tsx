// // import React, { useState, Suspense } from "react";
// // import { Route, Routes } from "react-router-dom";
// // import "./index.css";
// // import {
// //   Auth,
// //   Home,
// //   LayoutIndex,
// //   Profile,
// //   TweetDetailIndex
// // } from "./screens";
// // import ProtectRoute from "./utils/ProtectRoute";
// // import Preloader from "./components/loaders/preloader";

// // export default function App() {
// //   const [height, setHeight] = useState(0);
// //   return (
// //     <div className="based" style={{ height }}>
// //       <Routes>
// //         {/* <Route path={"/"} element={<LayoutIndex />}>

// //         </Route> */}
// // <Route path="/" element={<Suspense fallback={<Preloader />}>
// //   <ProtectRoute>
// //     <Home />
// //   </ProtectRoute>
// // </Suspense>
// // }
// // />
// //       </Routes>
// //     </div>
// //   );
// // }


// // import React, { useState, Suspense } from "react";
// // import { Routes, Route } from "react-router-dom";
// // import "./index.css";
// // import { Auth, Home, LayoutIndex, Profile, TweetDetailIndex } from "./screens";
// // import ProtectRoute from "./utils/ProtectRoute";
// // import Preloader from "./components/loaders/preloader";

// // export default function App() {
// //   const [height, setHeight] = useState(0);

// //   return (
// //     <div className="based" style={{ height }}>
// //       <Routes>
// //         <Route path="/" element={<LayoutIndex />}>
// //           <Route index element={<Home />} />
// //           <Route path="profile" element={<Profile />} />
// //           <Route path="tweet-detail" element={<TweetDetailIndex />} />
// //         </Route>

// //         <Route path="/auth" element={<Auth />} />
// //       </Routes>
// //     </div>
// //   );
// // }


// import React, { useState, Suspense } from "react";
// import { Routes, Route } from "react-router-dom";
// import "./index.css";
// import { Auth, Home, LayoutIndex, Profile, TweetDetailIndex } from "./screens";
// import ProtectRoute from "./utils/ProtectRoute";
// import Preloader from "./components/loaders/preloader";

// export default function App() {
//   const [height, setHeight] = useState(0);

//   return (
//     <div className="based" style={{ height }}>
//       <Routes>
//         <Route path="/" element={<LayoutIndex />}>
//           <Route index element={
//             <Suspense fallback={<Preloader />}>
//             <ProtectRoute>
//               <Home />
//             </ProtectRoute>
//             </Suspense>
//           } />
//           {/* <Route path="profile" element={<Profile />} />
//           <Route path="tweet-detail" element={<TweetDetailIndex />} /> */}
//         </Route>

//         {/* <Route path="/auth" element={<Auth />} /> */}
//       </Routes>
//     </div>
//   );
// }

// // import React, { useState, Suspense } from "react";
// // import { Routes, Route } from "react-router-dom";
// // import "./index.css";
// // import { Auth, Home, LayoutIndex, Profile, TweetDetailIndex } from "./screens";
// // import ProtectRoute from "./utils/ProtectRoute";
// // import Preloader from "./components/loaders/preloader";

// // export default function App() {
// //   const [height, setHeight] = useState(0);

// //   return (
// //     <div className="based" style={{ height }}>
// //       <Routes>
// //         <Route path="/" element={<LayoutIndex />}>
// //           <Route index element={<Home />} />
// //           <Route path="profile" element={<Profile />} />
// //           <Route path="tweet-detail" element={<TweetDetailIndex />} />
// //         </Route>

// //         <Route path="/auth" element={<Auth />} />
// //       </Routes>
// //     </div>
// //   );
// // }



import React, { useState, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import {
  Auth,
  Home,
  LayoutIndex,
  Profile,
  TweetDetailIndex
} from "./screens";
import ProtectRoute from "./utils/ProtectRoute";
import Preloader from "./components/loaders/preloader";

export default function App() {
  const [height, setHeight] = useState(0);
  return (
    <div className="based" style={{ height }}>
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
          {/* login route */}
          <Route path="i/flow/login" element={<Suspense fallback={<Preloader />}>
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
