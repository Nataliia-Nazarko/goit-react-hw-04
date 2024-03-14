import axios from "axios";

export const requestProducts = async () => {
  const { data } = await axios.get(
    "a6bVG8PFLFYaoqUf6XtYoD3RDl2R6KFIdIl4FMnIgBQ"
  );
  return data;
};

export const requestProductsByQuery = async (query) => {
  const { data } = await axios.get(
    `a6bVG8PFLFYaoqUf6XtYoD3RDl2R6KFIdIl4FMnIgBQ=${query}`
  );
  return data;
};
