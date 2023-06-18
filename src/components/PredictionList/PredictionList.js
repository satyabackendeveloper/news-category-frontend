import './PredictionList.css';

const PredictionList = (props) => {
    return (
        <div className='prediction-list'>
            <table>
                <thead>
                    <tr>
                        <th>Heading</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.predictionList.length > 0 && props.predictionList.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        {item.heading}
                                    </td>
                                    <td>
                                        {item.category}
                                    </td>
                                </tr>
                            )
                        })
                    }
                    {
                        props.predictionList.length === 0 &&
                        <tr key='1'>
                            <td colspan="2">
                                No Recods Found
                            </td>
                        </tr>
                    }
                </tbody>

            </table>
        </div>
    )
}

export default PredictionList;