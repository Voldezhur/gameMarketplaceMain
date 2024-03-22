import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Cart from "../pages/Cart";
import Profile from "../pages/Profile";
import Support from "../pages/Support";
import Error from "../pages/Error";
import Login from "../pages/Login";
import ApiTest from "../pages/ApiTest";

// Пути для авторизованного пользователя
export const privateRoutes = [
    { path: "/", element: <Posts />, exact: true },
    { path: "/games", element: <Posts />, exact: true },
    { path: "/games/:id", element: <PostIdPage />, exact: true },
    { path: "/cart", element: <Cart />, exact: true },
    { path: "/profile", element: <Profile />, exact: true },
    { path: "/support", element: <Support />, exact: true },
    { path: "*", element: <Error />, exact: true },
    { path: "/apiTest", element: <ApiTest />, exact: true}
]

// Пути для неавторизованного пользователя
export const publicRoutes = [
    { path: "/", element: <Login />, exact: true },
    { path: "*", element: <Error />, exact: true },
]