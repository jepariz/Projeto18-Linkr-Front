export function saveUserInfoInLocalStorage(info) {
    const { token, photoUrl, username } = info;
    localStorage.setItem("user", JSON.stringify({ token, photoUrl, username }));
}
