
import { lazy } from 'react';
const Home = lazy(() => import("./Home"));
const TweetDetailIndex = lazy(() => import("./TweetDetail"));
const Auth = lazy(() => import("./Auth"));
const Profile = lazy(() => import("./Profile"));
const Bookmarks = lazy(() => import("./Bookmarks"));
const LogoutIndex = lazy(()=> import('./Logout'))
const QuoteIndex = lazy(() => import("./Quote"));
const MessageIndex = lazy(() => import('./Message'))
const MessageList = lazy(() => import('../components/messages/list'))
const MessageContent = lazy(() => import('../components/messages/content'))
import LayoutIndex from './Layout'
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
    MessageContent

    // ShopIndex
}