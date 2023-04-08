export function saveUserInfoInLocalStorage(info) {
    const { token, photoUrl, username, id } = info;
    localStorage.setItem("user", JSON.stringify({ token, photoUrl, username, id }));
}
