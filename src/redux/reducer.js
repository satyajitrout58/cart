const initialState = {
    product: [{
        name: 'Maroon Shirt',
        id: 11,
        desc: 'Maroon Shirt of Hrx Brand Looks Aswome '
    },
    {
        name: 'Maroon Shirt',
        id: 12,
        desc: 'Maroon Shirt of Hrx Brand Looks Aswome '
    },
    {
        name: 'Maroon Shirt',
        id: 13,
        desc: 'Maroon Shirt of Hrx Brand Looks Aswome '
    },
    {
        name: 'Maroon Shirt',
        id: 14,
        desc: 'Maroon Shirt of Hrx Brand Looks Aswome '
    },
    {
        name: 'Maroon Shirt',
        id: 15,
        desc: 'Maroon Shirt of Hrx Brand Looks Aswome '
    },
    {
        name: 'Maroon Shirt',
        id: 16,
        desc: 'Maroon Shirt of Hrx Brand Looks Aswome '
    },
    {
        name: 'Maroon Shirt',
        id: 17,
        desc: 'Maroon Shirt of Hrx Brand Looks Aswome '
    }
],
    cart: [],

}

const Reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return {
                ...state
            }
    }
}

export default Reducer;