
export const actionBtnReducer = (state, action) => {
    switch (action.type) {
        case 'view':
            return {
                name: action.payload.name,
                address: action.payload.address,
                phone: action.payload.phone,
                email: action.payload.email,
                status: true
            }
        case 'edit':
            return {
                name: action.payload.name,
                address: action.payload.address,
                phone: action.payload.phone,
                email: action.payload.email,
                status: true
            }
        default:
            throw new Error();
    }
}

export function reducer(state, action) {
    if (action.type === 'incremented_age') {
        console.log(action);
        return {
            age: state.age + 1
        };
    }
    throw Error('Unknown action.');
}


