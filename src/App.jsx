import { useState, useEffect } from "react";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";
//import ImageGallery from "./components/ImageGallery/ImageGallery"
import SearchBar from "./components/SearchBar/SearchBar";

import "./App.css";

function App() {
  const [products, setProducts] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchQuery, setSearchQuery] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const data = await requestProductsByQuery(searchQuery);
        setProducts(data.products);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (searchQuery === 0) return;

    async function fetchDataByQuery() {
      try {
        setIsLoading(true);
        const data = await requestProductsByQuery(searchQuery);
        setProducts(data.products);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchDataByQuery();
  }, [searchQuery]);

  const onSetSearchQuery = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <SearchBar onSetSearchQuery={onSetSearchQuery} />
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      <ProductList products={products} />
    </div>
  );
}

export default App;
