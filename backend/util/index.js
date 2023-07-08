module.exports.strongPassword = (password) => {
    const passwordExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/
    if (passwordExp.test(password)) {
        return true;
    } else {
        return false;
    }
}