import "./featured.scss";
import { MdPlayArrow, MdOutlineInfo } from "react-icons/md";

const Featured = () => {
	return (
		<div className="featured">
			<img
				src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
				alt=""
			/>
			<div className="info">
				<img
					src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
					alt=""
				/>
				<span className="description">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
					libero rem, in eum consequatur voluptates iure soluta? Vero at ex quo
					soluta necessitatibus maiores error!
				</span>
				<div className="buttons">
					<button className="play">
						<MdPlayArrow className="icon" />
						<span>Play</span>
					</button>
					<button className="more">
						<MdOutlineInfo />
						<span>Info</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Featured;
