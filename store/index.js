import create from 'zustand';

let defaultStore = set => ({
	cart: [],
	addToCart: item => set(state => ({ cart: [...state.cart, item] })),
	removeFromCart: item =>
		set(state => ({ cart: state.cart.filter(i => i.id !== item) })),
});

const useStore = create(defaultStore);

export default useStore;
