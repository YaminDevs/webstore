import logo from '../assets/logo2.png'
import { useState, useRef } from 'react'

export default function AddItem( { setDashboard } ){

const [name, setName] = useState('')
const [description, setDescription] = useState('')
const [price, setPrice] = useState('')
const [file, setFile] = useState();
const inputFile = useRef(null);
 
// Function to reset the input element
const handleReset = () => {
    if (inputFile.current) {
        inputFile.current.value = "";
        setFile('')
    }
};

const onDescriptionChange = (event) => {
    setDescription(event.target.value);
}

const onNameChange = (event) => {
    setName(event.target.value)
} 

const onPriceChange = (event) => {
    setPrice(event.target.value)
}

    const onSubmitAdd = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/items', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: name,
                image: file,
                description: description,
                price: price
            }),
        })
    }
    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return(
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-3xl font-bold mb-10'>Add Product</h1>
            <form type='submit' className='flex flex-col gap-4 w-full justify-center items-center' onSubmit={onSubmitAdd} method='post'>
                <input type="text" required={true} placeholder='Name' className='py-1 px-2 ' onChange={onNameChange} />
                <div className='flex gap-2 justify-between'>
                    <input type='file' required={true} ref={inputFile} onChange={handleChange} className='py-1 px-2' /> 
                    <p onClick={handleReset} className='cursor-pointer text-2xl relative bottom-0.5'>x</p>
                </div>
                <img src={file} className='my-8 p-8 w-1/2 border border-solid ' />
                <input type="text" placeholder='description' className='py-1 px-2' onChange={onDescriptionChange} />
                <input type="number" min="0.01" step="0.01" required={true} placeholder='price' className='py-2 px-2' onChange={onPriceChange} />
                <button type="submit" className='inline-block rounded-md border border-transparent bg-beige-dark px-4 py-1 text-center font-medium text-white hover:bg-beige'>Add Item</button>
            </form>
        </div>
    )
}