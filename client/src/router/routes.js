import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Support from "../pages/Support";
import Error from "../pages/Error";
import Login from "../pages/Login";

// Пути для авторизованного пользователя
export const privateRoutes = [
    { path: "/", element: <Posts />, exact: true },
    { path: "/games", element: <Posts />, exact: true },
    { path: "/games/:id", element: <PostIdPage />, exact: true },
    { path: "/support", element: <Support />, exact: true },
    { path: "*", element: <Error />, exact: true },
]

// Пути для неавторизованного пользователя
export const publicRoutes = [
    { path: "/", element: <Login />, exact: true },
    { path: "/games", element: <Login />, exact: true },
    { path: "/games/:id", element: <Login />, exact: true },
    { path: "/support", element: <Login />, exact: true },
    { path: "*", element: <Error />, exact: true },
]