import * as types from "./constants";


const initialState = {
	items: [],
	panier: [],
	finalPrice: 0,
};


export default function reducer(state = initialState, action)
{
	switch (action.type) {

		case types.ADD_PRODUCT:
			var {items} = state;

			items.push(
				{
					/*
					id: Date.now(),
					text: action.payload.text,
					completed: false
					*/

					id: Date.now(),
					name: action.payload.name,
					price: action.payload.price,
					description: action.payload.description,
					url: action.payload.url,
					compteur: 0,
					valid: false,
					panier_bool: false
				}
			);

			return {
				...state,
				items: items
			};
			break;

		case types.COUNT_INCREMENT:
			var {items} = state;
			items[action.payload].compteur += 1;
			
			return {
				...state,
				items: items
			}
			break;

		case types.COUNT_DECREMENT:
			var {items} = state;
			if(items[action.payload].compteur != 0){
				items[action.payload].compteur -= 1;
			}
			return {
				...state,
				items: items
			}
			break;

		case types.DELETE_PRODUCT:
			var {items} = state;
			var {panier} = state;

			var indexItems = items.findIndex((obj) => obj.id == action.payload.id);
			var indexPaniers = panier.findIndex((obj) => obj.id == action.payload.id);

			items.splice(indexItems, 1);
			panier.splice(indexPaniers, 1);


			return {
				...state,
				items: items
			}
			break;

		case types.ADD_PRODUCT_PANIER:
			var {panier} = state;
			var {items} = state;

			panier.push(
				{
					id: action.payload.id,
					name: action.payload.name,
					price: action.payload.price,
					quantity: 0,
				}
			);
		
			return {
				...state,
				panier: panier,
			};
			break;

			
		case types.QUANTITY_INCREMENT:
			var {panier} = state;
			var {items} = state;
			console.log("hello");

			var indexItems = items.findIndex((obj) => obj.id == panier[action.payload].id);
			console.log(indexItems);

			if(items[indexItems].compteur > 0){
				panier[action.payload].quantity += 1;
				console.log("saluut");
			}
			
			return {
				...state,
				panier: panier
			}
			break;

		case types.QUANTITY_DECREMENT:
			var {panier} = state;
			panier[action.payload].quantity -= 1;
			
			return {
				...state,
				panier: panier
			}
			break;

		case types.VALID_BUTTON_ADD_PANIER:
			return {
				...state,
				panier_bool: true
			}
			break;

		case types.INVALID_BUTTON_ADD_PANIER:
			return {
				...state,
				panier_bool: false
			}
			break;

		case types.VERIF_DELETE_PRODUCT_PANIER:
			var {panier} = state;

			if(panier[action.payload].quantity <= 0){
				panier.splice(action.payload, 1);
			}

			return {
				...state,
				panier: panier
			}
			break;

		case types.FINAL_PRICE:
			var {panier} = state;
			var {finalPrice} = state;

			for(var i=0;i<= panier.lenght;i++){
				finalPrice += parseInt(panier[i].price)
			}
			return {
				...state,
				finalPrice: finalPrice
			}
			break;

		default:
			return state;

	}
};

