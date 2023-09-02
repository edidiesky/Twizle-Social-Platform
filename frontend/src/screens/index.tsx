
import { lazy } from 'react';

const Home = lazy(() => import("./Home"));
const Auth = lazy(() => import("./Auth"));
const Profile = lazy(() => import("./Profile"));
import LayoutIndex from './Layout'
export {
    Home,
    LayoutIndex,
    Auth,
    Profile
    // SingleIndex,
    // ShopIndex
}