const initialState = {
    num: 5
}

const displayedSongs = (state = initialState, action) => {
    switch(action.type){
        case "INCREASE":
            return {...state, num: state.num + 1}
        case "DECREASE":
            return {...state, num: state.num - 1}
        default:
            return state
    }
}

export default displayedSongs
