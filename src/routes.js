import Home from "./components/Home.vue";
import Portfolio from "./components/portfolio/Portfolio.vue";
import Stocks from "./components/stocks/Stocks.vue";


/** Routes are always an array of objects */
 export const routes = [
    {path: "/", component: Home},
    {path: "/portfolio", component: Portfolio},
    {path: "/stocks", component: Stocks}


 ]