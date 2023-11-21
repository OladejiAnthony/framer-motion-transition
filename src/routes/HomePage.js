import NavBar from "../components/Navbar";

function HomePage() {
  return (
    <div
      className="homepage">
      <NavBar></NavBar>
      <div className="page-body">
        <div className="page-title">
            HomePage
        </div>
        <div className="page-description">
          This is the homepage for the React Transition demo
        </div>
      </div>
    </div>
  );
}

export default HomePage;

