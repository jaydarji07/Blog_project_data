import { get, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import db from '../../../firebase';
import { Link } from 'react-router-dom';

const Section2 = () => {

    const [data, setdata] = useState([])

    const getApi = async () => {
        const dbRef = ref(db, "BlogName");
        const snapshot = await get(dbRef);
        var arr = [];
        if (snapshot.exists()) {
            for (const key in snapshot.val()) {
                const element = snapshot.val()[key];
                const newUser = {
                    id: key,
                    ...element
                }
                arr.push(newUser)
            }
            console.log(arr, "this is arr");
            setdata(arr)
        }
        //  else {
        //     alert("error");
        // }
    }

    useEffect(() => {
        getApi();
    }, [])


    return (
        < >
            <div className="container-task"  >
                {data.length > 0 || null ?
                    data.map((items, index) => {
                        console.log(items);
                        return (
                            <div key={index} className="row mx-auto mt-2 mb-5">
                                <div className="col-lg-6 mt-4 card-2">
                                    <div className="card-1" >
                                        <img src={items.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h6 className="card-title"> {items.imageDescription},  <span style={{ color: '#5A639C' }}>Created at : {items.date}</span> </h6>
                                            <p className="card-text">{items.title}</p>
                                            <Link to={`/ShowMorePage/${items.id}`} className="btn btn-dark">Show More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    : <p className="text-center fs-1 mt-5 text-danger">No data found</p>
                }
            </div>
        </>
    )
}

export default Section2
