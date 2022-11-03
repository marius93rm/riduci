const createItem = (text) => {
    console.log(text)
    return ({id: Math.random().toString(), text})

}
const types = {
    ADD: 'ADD',
    REMOVE: 'REMOVE',
}

export const actionCreators = {
    add: text => ({ type: types.ADD, text }),
    remove: index => ({ type: types.REMOVE, index }),
}

export const intitialState = {
    items: [
        createItem('todo1'),
        createItem('todo2'),
        createItem('todo3'),
    ]
}

export function reducer(state, action) {
    switch (action.type) {
        case types.ADD:
            return {
                ...state,
                items: [...state.items, createItem(action.text)],
            }
        case types.REMOVE:
            return {
                ...state,
                items: state.items.filter((_, index) => index !== action.index),
            }
    }
}
