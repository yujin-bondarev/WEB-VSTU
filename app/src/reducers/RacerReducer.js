import { ADD_RACER, REMOVE_RACER, UPDATE_RACER} from '../actions/types.js';

const initialState = {
    racers: [
      { name: "Ben Blocker", carModel: "BMW" },
      { name: "Dave Defender", carModel: "AUDI" },
      { name: "Sam Sweeper", carModel: "Mercedes" },
      { name: "Matt Midfielder", carModel: "Lamborghini" },
    ],
    authenticatedRacer: null
};

const racerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_RACER:
            return {
                ...state,
                racers: [...state.racers, action.payload]
            };
        case REMOVE_RACER:
            return {
                ...state,
                racers: state.Racers.filter((_, id) => id !== action.payload)
            };
        case UPDATE_RACER:
            const updatedRacers = [...state.racers];
            updatedRacers[action.payload.id] = action.payload.racer;
            return {
                ...state,
                racers: updatedRacers
            };
        default:
            return state;
    }
};

export default  racerReducer;