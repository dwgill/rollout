const initialState = {
    stale: true,
    attributes: [
        {
            constituents: [3, 3, 4],
            discarded: [],
        },
        {
            constituents: [3, 3, 4],
            discarded: [],
        },
        {
            constituents: [3, 3, 4],
            discarded: [],
        },
        {
            constituents: [3, 3, 4],
            discarded: [],
        },
        {
            constituents: [3, 3, 4],
            discarded: [],
        },
        {
            constituents: [3, 3, 4],
            discarded: [],
        },
    ],
}

const rolloutReducer = (state = initialState, action) => {
    switch(action.type) {
        default: {
            return state;
        }
    }
}

export default rolloutReducer;