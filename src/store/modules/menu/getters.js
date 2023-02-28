export default {
    pizze(state) {
        return state.pizzaMenu;
    },
    hasPizze(state) {
        return state.pizzaMenu != null && state.pizzaMenu.pizze.length > 0;
    },
    whitePizzaMenu(state) {
        return state.pizzaMenu.pizze.filter( pizza => pizza.type === 'white' );
    },
    redPizzaMenu(state) {
        return state.pizzaMenu.pizze.filter( pizza => pizza.type === 'red' );
    },
    specialPizzaMenu(state) {
        return state.pizzaMenu.pizze.filter( pizza => pizza.type === 'special' );
    },
    limitedPizzaMenu(state) {
        return state.pizzaMenu.pizze.filter( pizza => pizza.type === 'limited' );
    },
    hasLimitedPizzaMenu(state) {
        return state.pizzaMenu.pizze.filter( pizza => pizza.type === 'limited' ).length > 0;
    },
    arancini(state) {
        return state.frittiMenu.frieds.filter( pizza => pizza.type === 'arancino' );
    },
    crocchette(state) {
        return state.frittiMenu.frieds.filter( pizza => pizza.type === 'crocchetta' );
    },
    fried(state) {
        return state.frittiMenu.frieds.filter( pizza => pizza.type === 'fried' );
    },
    fritti(state) {
        return state.frittiMenu.frieds;
    },
    beverageSoft(state) {
        return state.beverageMenu.drinks.filter( drink => drink.type === 'soft' );
    },
    beverageBeer(state) {
        return state.beverageMenu.drinks.filter( drink => drink.type === 'beer' );
    },
}