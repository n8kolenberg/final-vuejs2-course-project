import axios from 'axios'

export const loadData = ({commit}) => {
    axios.get('data.json')
    .then((response) => {
        //do something with the response
        console.log(response);

        if(response) { //Check if there's a response
            const stocks = response.data.stocks;
            const stockPortfolio = response.data.stockPortfolio;
            const funds = response.data.funds;

            const portfolio = {
                stockPortfolio,
                funds
            };

            //Once we have our stocks and portfolio data from the database,
            //We can commit them to the mutations in the store for portfolio and stocks
            commit('SET_STOCKS', stocks);
            commit('SET_PORTFOLIO', portfolio);
        }
    });
}