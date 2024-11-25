import React, { useEffect, useState } from 'react';
import '../styles/MainContent.css'; // Import the CSS file
import axios from 'axios';

const MainContent = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/api/data')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className="MainContent">
            <h2>{data.title}</h2>
            <p>{data.content}</p>
        </div>
    );
};

const styles = {
    main: {
        padding: '2rem',
        textAlign: 'center'
    }
};

export default MainContent;
