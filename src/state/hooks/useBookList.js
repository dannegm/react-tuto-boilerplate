import { useEffect, useState } from "react";
import axios from 'axios';

const client = axios.create({
    baseURL: `https://api.contentful.com/spaces/${process.env.REACT_APP_API_SPACE_ID}/environments/${process.env.REACT_APP_API_ENVIROMENT}`,
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
        'Content-Type': 'application/json',
    },
});

const useBookList = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await client.get('/entries?locale=es-MX&content_type=audiocontent-v12&select=fields,sys.id,sys.version');
            setData(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();

        return () => {
            setData(null);
            setError(null);
            setLoading(false);
        };
    }, []);

    return {
        data,
        error,
        loading,
        fetchData,
    };
};

export default useBookList;