const BASE_URL = "https://api.github.com";

const headers = {
  Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
};

export const getUser = async (username) => {

  const res = await fetch(`${BASE_URL}/users/${username}`, { headers });

  if (!res.ok) {
    throw new Error("User not found");
  }

  return res.json();
};

export const getRepos = async (username, page) => {

  const res = await fetch(
    `${BASE_URL}/users/${username}/repos?page=${page}&per_page=6`,
    { headers }
  );

  if (!res.ok) {
    return [];
  }

  return res.json();
};