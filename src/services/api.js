import axios from "axios";

const ACCESS_KEY = `0ERgyIHQMHejIldmcKOg4e4JDchmvmkubfmenvtNSEE`;

axios.defaults.baseURL = "https://api.unsplash.com/search";

export const getFetchImg = (page, per_page, query) => {
  return `/photos?client_id=${ACCESS_KEY}&page=${page}&per_page=${per_page}&query=${query}`;
};
