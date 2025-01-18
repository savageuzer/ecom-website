import ProuductsApi from "./components/api/ProductsApi";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Parent from "./components/props/Parent";

export default function page() {
  return(
    <>
     <Header />
     <Main />
     <ProuductsApi />
     <Parent />
    </>
  )
}