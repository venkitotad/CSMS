export const isValidEmail = (email) =>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export const isValidName = (name) =>{
    const nameRegex =  /^[a-zA-Z\s]+$/;
    return nameRegex.test(name);
}

export const isPasswordStrong = (password) =>{
    return password.length <= 8;
}
