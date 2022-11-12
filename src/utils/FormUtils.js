export const validateRequired = value => {
    return !(value == null || value.length === 0);
}

export const isLoggedIn = state => {
    const token = state.token;

    return validateRequired(token);
}
