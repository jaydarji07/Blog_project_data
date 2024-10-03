// import { push, ref, set } from 'firebase/database';
// // import React from 'react';
// import { useForm } from 'react-hook-form';
// import db from '../../../firebase';

// const Write1 = () => {
//     const { register, handleSubmit, reset } = useForm();

//     const onSubmit = (data) => {
//         const date = new Date(data.date);
//         const day = date.getDate();
//         const month = date.toLocaleString('default', { month: 'short' });
//         const year = date.getFullYear();

//         const formattedData = {
//             ...data,
//             date: `${day} ${month} ${year}`
//         };
//         console.log(formattedData);

//         const newDocRef = push(ref(db, "BlogName"));
//         set(newDocRef, data).then(() => {
//             alert("data saved successfully")
//             reset()
//         }).catch((error) => {
//             alert("error: ", error.message);
//         })

//     };

//     return (
//         <>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <p className='mb-4 mt-3 text-center Start-Journey'>Tell Your Story</p>
//                 <div className="container3">
//                     <div className="row d-flex mx-auto justify-content-center">
//                         <div className="col-lg-10 mx-auto mt-3 mb-2">
//                             <input type="text" className='form-control shadow py-3 border-primary title' {...register('title')} autoFocus placeholder='Title' />
//                         </div>
//                         <div className="col-lg-7 mt-3">
//                             <label htmlFor="imageLink" className="form-label" style={{ color: '#365E32' }}>Enter Image Link</label>
//                             <input type="text" className='form-control py-3 shadow border-primary image-link' id="imageLink" {...register('image')} placeholder='Enter Image Link' />
//                         </div>
//                         <div className="col-lg-3 mt-3 ">
//                             <label htmlFor="dateInput" className="form-label" style={{ color: '#365E32' }}>Enter Current Date</label>
//                             <input type="date" className='form-control py-3 shadow border-primary' id="dateInput" {...register('date')} />
//                         </div>

//                         <div className="col-lg-10 mt-3">
//                             <label htmlFor="dateInput" className="form-label" style={{ color: '#365E32' }}>Enter Image Description</label>
//                             <input type="text" className='form-control py-3 shadow border-primary  image-link' placeholder='Add Your Image Name' id="dateInput" {...register('imageDescription')} />
//                         </div>
//                     </div>
//                     <div className="row d-grid mt-3 Start-Journey">
//                         <div className="col-lg-10 mx-auto mb-4">
//                             <label htmlFor="journeyText" className="form-label fs-6" style={{ color: '#365E32' }}>Start Your Journey & Let The World Read It...</label>
//                             <textarea className="form-control shadow py-3 border-primary" id="journeyText" {...register('textarea')} rows="12"></textarea>
//                         </div>
//                     </div>
//                 </div>
//                 <button className='btn btn-success text-center mx-auto py-1 mb-3 d-grid mx-auto'>Submit</button>
//             </form>
//         </>
//     );
// }

// export default Write1;

// new page


import { push, ref, set } from 'firebase/database';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import db from '../../../firebase';

const Write1 = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [imagePreview, setImagePreview] = useState(null);
    const [charCount, setCharCount] = useState(0);

    // Handle form submission
    const onSubmit = (data) => {
        const date = new Date(data.date);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' });
        const year = date.getFullYear();

        const formattedData = {
            ...data,
            date: `${day} ${month} ${year}`,
        };

        // Firebase write operation
        const newDocRef = push(ref(db, 'BlogName'));
        set(newDocRef, formattedData)
            .then(() => {
                alert('Data saved successfully!');
                reset();
                setImagePreview(null);  // Reset image preview
                setCharCount(0);  // Reset character count
            })
            .catch((error) => {
                alert('Error: ' + error.message);
            });
    };

    // Handle image link input change
    const handleImageChange = (e) => {
        setImagePreview(e.target.value);
    };

    // Handle character count for textarea
    const handleTextareaChange = (e) => {
        setCharCount(e.target.value.length);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="write-form">
                <h2 className="mb-4 mt-3 text-center Start-Journey">Share Your Journey</h2>
                <div className="form-container">
                    <div className="input-group">
                        {/* Title Input */}
                        <input
                            type="text"
                            className={`form-control shadow-lg title-input ${errors.title && 'is-invalid'}`}
                            {...register('title', { required: 'Title is required' })}
                            placeholder="Enter a captivating title"
                            autoFocus
                        />
                        {errors.title && <span className="error-text">{errors.title.message}</span>}
                    </div>

                    <div className="input-group">
                        {/* Image Link Input */}
                        <input
                            type="text"
                            className="form-control shadow-lg image-input"
                            {...register('image', { required: 'Image link is required' })}
                            placeholder="Paste your image URL"
                            onChange={handleImageChange}
                        />
                        {errors.image && <span className="error-text">{errors.image.message}</span>}
                    </div>

                    {/* Image Preview */}
                    {imagePreview && (
                        <div className="image-preview">
                            <img src={imagePreview} alt="Preview" className="preview-img" />
                        </div>
                    )}

                    <div className="input-group">
                        {/* Date Input */}
                        <input
                            type="date"
                            className={`form-control shadow-lg ${errors.date && 'is-invalid'}`}
                            {...register('date', { required: 'Date is required' })}
                        />
                        {errors.date && <span className="error-text">{errors.date.message}</span>}
                    </div>

                    <div className="input-group">
                        {/* Image Description */}
                        <input
                            type="text"
                            className="form-control shadow-lg"
                            {...register('imageDescription')}
                            placeholder="Add a short image description"
                        />
                    </div>

                    <div className="input-group">
                        {/* Story Textarea */}
                        <textarea
                            className="form-control shadow-lg"
                            {...register('textarea', { required: 'Story content is required', maxLength: 1000 })}
                            rows="6"
                            placeholder="Start writing your story..."
                            onChange={handleTextareaChange}
                        ></textarea>
                        <small className="char-count">{charCount} / 1000 characters</small>
                        {errors.textarea && <span className="error-text">{errors.textarea.message}</span>}
                    </div>
                </div>
                <button className="btn btn-primary mt-4 shadow-lg submit-btn">Submit</button>
            </form>
        </>
    );
};

export default Write1;