import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { get, ref } from 'firebase/database';
import db from '../../../firebase';

const ShowMorePage = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const dbRef = ref(db, `BlogName/${id}`);
            const snapshot = await get(dbRef);
            if (snapshot.exists()) {
                setItem(snapshot.val());
            } else {
                console.log("No such item found!");
            }
        };

        fetchData();
    }, [id]);

    if (!item) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container">
            <h1>Show More</h1>
            <div className="card">
                <div className="row">
                    <div className="col-lg-12">
                        <img src={item.image} height={500} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h6 className="card-title">{item.imageDescription}, <span style={{ color: '#5A639C' }}>Created at: {item.date}</span></h6>
                            <p className="card-text">{item.title}</p>
                            <p className="card-text">{item.textarea}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowMorePage;
