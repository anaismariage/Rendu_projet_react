import * as types from "./constants";


const initialState = {
	compteur: 0,
};

export default function reducer(state = initialState, action)
{
	switch(action.type)
	{
		case types.COUNT_INCREMENT:
			var {compteur} = state;
			
			return {
				...state,
				compteur: state.compteur + 1
			}
			break;

		case types.COUNT_DECREMENT:
			return {
				...state,
				compteur: state.compteur - 1
			}
			break;

		default:
			return state;
			break;
	};
};
