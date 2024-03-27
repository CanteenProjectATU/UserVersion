//Reference for localStorage https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
// When I was looking this up, I saw that putting it in a utilities folder is good practise as these are considered utility functions

//This is to get the stored authentication token from local storage so we can send it in the put/post requests. It would not be user friendly
//if the canteen staff had to enter the password every time they did an action in one session so this allows us to retrieve the authentication token from local storage
export const getAuthenticationTokenFromLocalStorage = () => {
    return localStorage.getItem('authenticationToken');
}

//I used this to stop the non admin users from seeing the buttons for edit/delete/remove and add
//It returns true if the user is admin (flagged this way in the login page)
//Reference: Refactored by ChatGPT
export const isAdmin = () => {
    return localStorage.getItem('isAdmin') === 'true';
};