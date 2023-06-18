import { useEffect, useState } from 'react'
import './CategoryPredictorForm.css'
import PredictionList from './../PredictionList/PredictionList';
import validator from 'validator';

const CategoryPredictorForm = () => {
    const [data, setData] = useState({
        url: '',
        predictionCompleted: false,
        isFirstRender: true
    });

    const [predictionList, setPredictionList] = useState([]);
    const [formState, setFormState] = useState({
        isFormValid: false,
        isUrlValid: true
    });

    const getNewsCategory = async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({})
        };
        const result = await fetch('http://15.206.27.251/api/news-category/list', requestOptions);
        const response = await result.json();
        setPredictionList(response.data.rows);
    }

    useEffect(() => {
        if (data.isFirstRender === true) {
            console.log(data.isFirstRender)
            setData({
                ...data,
                isFirstRender: false
            })
            getNewsCategory();
        }
        if (data.predictionCompleted) {
            getNewsCategory();
            setData({
                ...data,
                predictionCompleted: false
            })
        }
    }, [data, data.predictionCompleted, data.isFirstRender])

    const handleSubmit = (event) => {
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ link: data.url })
        };
        fetch('http://15.206.27.251/api/news-category', requestOptions)
            .then(response => {
                setData({
                    url: '',
                    predictionCompleted: true
                })
            })

    }

    const handleUrlChange = (event) => {
        setData({
            ...data,
            url: event.target.value
        })
        if (event.target.value === '') {
            setFormState({
                isUrlValid: true,
                isFormValid: false,
            })
        } else {
            if (validator.isURL(event.target.value)) {
                setFormState({
                    isFormValid: true,
                    isUrlValid: true,
                })
            } else {
                setFormState({
                    isUrlValid: false,
                    isFormValid: false,
                })
            }
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='url'>
                    <b>News Article URL</b>
                </label>
                <br />
                <input type="text" value={data.url} onChange={handleUrlChange} name="url" placeholder='Enter News' />
                {!formState.isFormValid && !formState.isUrlValid && (
                    <div style={{ color: "#F61C04" }}>URL is not valid.</div>
                )}
                <br />
                <input className='submit-button' disabled={!formState.isFormValid} type="submit" value="Start Prediction" />
            </form>
            <br />
            <PredictionList predictionList={predictionList} />
        </div>
    )
}

export default CategoryPredictorForm