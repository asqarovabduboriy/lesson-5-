export const TOGLELIKE = "TOGLELIKE";
export const ADDCART = "ADDCART";
export const REMOVECART = "REMOVECART";
export const INCREMENTQUANTITY = "INCREMENTQUANTITY";
export const DECREMENTQUANTITY = "DECREMENTQUANTITY";

export const toggleLike = () => {
    return {
        type: TOGLELIKE,

    };
}

export const addToCart = () => {
    return {
        type: ADDCART

    }
}

export const removeItem = (id) => {
    return {
        type: REMOVECART,
        payload: id

    }
}

export const incrementquantity = (id) => {
    return {
        type: INCREMENTQUANTITY,
        payload: id
    }
}


export const decrementquantity = (id) => {
    return {
        type: DECREMENTQUANTITY,
        payload: id
    }
}

