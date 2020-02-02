
export const required = value => !!value?undefined:'Required';

export const minLength = min => value => !!value && value.length >= min?undefined:'Too short';

export const email = value => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)?undefined:"invalid email address";


