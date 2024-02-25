import "./App.css";
import Header from "./component/Header";
import HeaderContent from "./component/HeaderContent";
import MainContent from "./component/MainContent";
import Sidebar from "./component/Sidebar";

function App() {
  return (
    <>
      <Header />
      <main>
        <Sidebar />
        <>
          <HeaderContent />
          <MainContent />
        </>
      </main>
    </>
  );
}

export default App;
