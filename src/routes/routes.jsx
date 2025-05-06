import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../Pages/Home";
import Categories from "../Pages/NewsCategory";
import CategoryNews from "../Pages/NewsCategory";
import NewsCategory from "../Pages/NewsCategory";

const router = createBrowserRouter(
    [
        {path: "/", element: <HomeLayout></HomeLayout>,
            children: [
                {
                    path: "", element: <Home></Home>
                },
                {
                    path: "/category/:id", element: <NewsCategory></NewsCategory>,
                    loader: () => fetch("/news.json")
                }
            ]
        },

        {path: "/auth", element: <div>auth</div>},

        {path: "/news", element: <div>news</div>}
    ]
)

export default router;