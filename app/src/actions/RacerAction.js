import { ADD_RACER, REMOVE_RACER, UPDATE_RACER} from './types.js';

export const addRACER = RACER => ({
    type: ADD_RACER,
    payload: RACER,
});

export const removeRACER = id => ({
    type: REMOVE_RACER,
    payload: id,
});

export const updateRACER = (id, RACER) => ({
    type: UPDATE_RACER,
    payload: { id, RACER },
});