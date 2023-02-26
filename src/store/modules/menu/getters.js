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
    fritti(state) {
        return state.frittiMenu;
    },
    beverageSoft(state) {
        return state.beverageMenu.drinks.filter( drink => drink.type === 'soft' );
    },
    beverageBeer(state) {
        return state.beverageMenu.drinks.filter( drink => drink.type === 'beer' );
    },
}