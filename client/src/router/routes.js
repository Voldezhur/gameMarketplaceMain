import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Support from "../pages/Support";
import Error from "../pages/Error";
import Login from "../pages/Login";
import GameTest from "../pages/GameTest";

// Пути для авторизованного пользователя
export const privateRoutes = [
    { path: "/", element: <Posts />, exact: true },
    { path: "/games", element: <Posts />, exact: true },
    { path: "/games/:id", element: <PostIdPage />, exact: true },
    { path: "/support", element: <Support />, exact: true },
    { path: "*", element: <Error />, exact: true },
    { path: "/gameTest", element: <GameTest />, exact: true}
]

// Пути для неавторизованного пользователя
export const publicRoutes = [
    { path: "/", element: <Login />, exact: true },
    { path: "*", element: <Error />, exact: true },
]