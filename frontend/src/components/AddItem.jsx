import React, { useState, useRef } from 'react';
export default function AddItem({ setFile, file}) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const inputFile = useRef(null);

    const handleReset = () => {
        if (inputFile.current) {
            inputFile.current.value = '';
            setFile(null);
        }
    };

    const onDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const onNameChange = (event) => {
        setName(event.target.value);
    };

    const onPriceChange = (event) => {
        setPrice(event.target.value);
    };

    const onSubmitAdd = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('image', file);
        formData.append('description', description);
        formData.append('price', price);

        try {
            const response = await fetch('http://localhost:3000/items', {
                method: 'post',
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`Server error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            console.log('Product added successfully:', data);
            // Handle success, e.g., update UI or show a success message
        } catch (error) {
            console.error('Error adding product:', error.message);
            // Handle error, e.g., show an error message to the user
        }
    };

    const handleChange = (e) => {
        setFile(e.target.files[0]);
    };

    return (
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-3xl font-bold mb-10'>Add Product</h1>
            <form
                className='flex flex-col gap-4 w-full justify-center items-center'
                onSubmit={onSubmitAdd}
                encType="multipart/form-data" // Add this line for file uploads
                method='post'
            >
                <input type="text" required={true} placeholder='Name' className='py-1 px-2 ' onChange={onNameChange} />
                <div className='flex gap-2 justify-between'>
                    <input type='file' name='image' required={true} ref={inputFile} onChange={handleChange} className='py-1 px-2' />
                    <p onClick={handleReset} className='cursor-pointer text-2xl relative bottom-0.5'>
                        x
                    </p>
                </div>
                <img src={file ? URL.createObjectURL(file) : ''} alt={name} className='my-8 p-8 w-1/2 border border-solid' />
                <input type="text" placeholder='description' className='py-1 px-2' onChange={onDescriptionChange} />
                <input type="number" min="0.01" step="0.01" required={true} placeholder='price' className='py-2 px-2' onChange={onPriceChange} />
                <button type="submit" className='inline-block rounded-md border border-transparent bg-beige-dark px-4 py-1 text-center font-medium text-white hover:bg-beige'>Add Product</button>
                    Add Product
            </form>
        </div>
    );
}
