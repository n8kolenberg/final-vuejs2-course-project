const state = {
    funds: 10000,
    stocks: [ //These are stocks within our portfolio - not all available stocks.

    ] 
};

const mutations = {
    'BUY_STOCK'(state, {stockId, quantity, stockPrice}) {
        const record = state.stocks.find(element => element.id == stockId);
        if(record) {
            record.quantity += quantity; 
        } else {
            state.stocks.push({
                id: stockId,
                quantity: quantity,
                price: stockPrice
            })
        };
        //We have to update the funds after buy activity 
        state.funds -= stockPrice * quantity;
        console.log("bought!");
        console.log("Stocks in possession: ");
        console.log(state.stocks);
    },

    'SELL_STOCK'(state, {stockId, quantity, stockPrice}) {
        const record = state.stocks.find(element => element.id === stockId);
        if (record.quantity > quantity) {
            record.quantity -= quantity;
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        };
        //We have to update the funds after sell activity 
        state.funds += stockPrice * quantity; 
    },

    'SET_PORTFOLIO'(state, portfolio) {
        state.funds = portfolio.funds;
        state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
    }
};

const actions = {
    sellStock({commit}, order) {
        commit('SELL_STOCK', order);
    },

};

const getters = {
    getStockPortfolio(state, getters) {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id === stock.id); //stocks getter out of the stocks module... Tooootal mindf*ckery here....
            return {
                id: stock.id,
                quantity: stock.quantity,
                price: record.price,
                name: record.name
            }
        });
    },

    getFunds(state) {
        return state.funds
    }
};


export default {
    state,
    getters,
    mutations,
    actions
}