import "./home.scss";
import Navbar from "../../components/Navbar/Navbar";
import Featured from "../../components/Featured/Featured";

const Home = () => {
	return (
		<div className="home">
			<Navbar />
      <img
     
						src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
						alt=""
					/>
          <Featured />
		</div>
	);
};

export default Home;
