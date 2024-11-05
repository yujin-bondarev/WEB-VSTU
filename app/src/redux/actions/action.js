export const Add = (racers) => {
    return {
        type: ADD_DATA,
        payload: racers
    }
}

export const Remove = (id) => {
    return {
        type: REMOVE_DATA,
        payload: { id }

    }
}

export const Update_data = (racers, id) => {
    return {
        type: TOGGLE_DATA,
        payload: racers,
        d: id
    }
}