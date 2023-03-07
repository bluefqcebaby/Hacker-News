import ky from "ky";

const api = ky.create({
  prefixUrl: "https://hacker-news.firebaseio.com/v0/",
});

export default api;
