


export const actionBtnReducer = (state, action) => {
    switch (action.type) {
        case 'view':
            const { data } = action.payload;
            return {
                name: data.name,
                address: data.address,
                phone: data.phone,
                email: data.email,
                status: true
            }
        case 'edit':
            return 'ID is coming';
            break;
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


