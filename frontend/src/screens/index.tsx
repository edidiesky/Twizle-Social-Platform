
import { lazy } from 'react';
const Home = lazy(() => import("./Home"));
const TweetDetailIndex = lazy(() => import("./TweetDetail"));
const Auth = lazy(() => import("./Auth"));
const Profile = lazy(() => import("./Profile"));
const Bookmarks = lazy(() => import("./Bookmarks"));
import LogoutIndex  from './Logout'
const QuoteIndex = lazy(() => import("./Quote"));
const MessageIndex = lazy(() => import('./Message'))
const MessageList = lazy(() => import('../components/messages/list'))
const MessageContent = lazy(() => import('../components/messages/content'))
const Followers = lazy(() => import('../components/affilate/followers'))
const Followings = lazy(() => import('../components/affilate/followings'))
const Verified = lazy(() => import('../components/affilate/verified'))
const Search = lazy(() => import('./Search'))
import LayoutIndex from './Layout'
import AffilateLayoutIndex from './AffilateLayout'
export {
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

    // ShopIndex
}