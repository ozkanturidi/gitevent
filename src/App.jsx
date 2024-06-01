import logo from "./assets/images/logo.png";
import MainContent from "./components/MainContent";

function App() {
  //new code
  //new code 2
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <h1>Learn & Master GitHub Actions</h1>
      </header>
      <MainContent />
    </>
  );
}

export default App;
