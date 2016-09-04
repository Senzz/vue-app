export const incrementCounter = function ({ dispatch, state }) {
    dispatch('INCREMENT', 1);
}

export const minus = function({ dispatch, state }){
    dispatch('MINUS', 1);
}