//import toast, { Toaster } from "react-hot-toast";
import { Field, Formik } from "formik";
//import css from "./SeachBar.module.css";

export const SearchBar = (onSetSearchQuery) => {
  return (
    <header>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values) => {
          onSetSearchQuery(values.query);
        }}
      >
        <form>
          <Field
            type="text"
            placeholder="Search images and photos"
            name="query"
          />
          <button type="submit">Search</button>
        </form>
      </Formik>
    </header>
  );
};
