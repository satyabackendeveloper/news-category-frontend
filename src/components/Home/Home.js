import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
    return (
        <div className='container'>
            <h1>Welcome to the category predictor</h1>
            <ul className='list-style'>
                <li>Click on <b>Get Started</b> button</li>
                <li>Copy and paste a news article url in the text box</li>
                <li>Click on <b>Start Prediction</b> button. This will start the prediction process</li>
                <li>Wait for  the result.</li>
            </ul>
            <Link to='/predictor'><span className='button'>Get Started</span></Link>
        </div>
    );
}

export default Home;
