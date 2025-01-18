import ProuductsApi from "./components/api/ProductsApi";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

export default function page() {
  return(
    <>
     <Header />
     <Main />
     <ProuductsApi />
    </>
  )
}