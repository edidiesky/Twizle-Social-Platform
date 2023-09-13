
import { lazy } from 'react';
const Home = lazy(() => import("./Home"));
const TweetDetailIndex = lazy(() => import("./TweetDetail"));
const Auth = lazy(() => import("./Auth"));
const Profile = lazy(() => import("./Profile"));
const Bookmarks = lazy(() => import("./Bookmarks"));
const LogoutIndex = lazy(()=> import('./Logout'))
const QuoteIndex = lazy(() => import("./Quote"));
import LayoutIndex from './Layout'
export {
    Home,
    LayoutIndex,
    Auth,
    Profile,
    TweetDetailIndex,
    Bookmarks,
    QuoteIndex,
    LogoutIndex
    // SingleIndex,
    // ShopIndex
}