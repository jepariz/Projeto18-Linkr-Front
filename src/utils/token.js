export const headers = {
  headers: {
    Authorization: `Bearer ${JSON.parse(localStorage.user).token}`,
  },
};
