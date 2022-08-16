export const getFavFromStorage = () => {
    const data = localStorage.getItem('favourite');
    const favs = data ? JSON.parse(data) : [];

    return {favs};
};
