import logo from '../assets/logo2.png'
import { useState } from 'react'

export default function Register( { setPage } ){

const [name, setName] = useState('')
const [image, setImage] = useState('')
const [description, setDescription] = useState('')
const [price, setPrice] = useState('')
const [file, setFile] = useState();



const onImageChange = (event) => {
    setImage(event.target.value);
}

const onDescriptionChange = (event) => {
    setDescription(event.target.value);
}

const onNameChange = (event) => {
    setName(event.target.value)
} 

const onPriceChange = (event) => {
    setPrice(event.target.value)
}

    const onSubmitRegister = () => {
        fetch('http://localhost:3000/items', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: name,
                image: image,
                description: description,
                price: price
            }),
        })
    }
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    function resetForm() {
        setName('')
        setImage('')
        setDescription('')
        setPrice('')
    }

    return(
        <div className='flex flex-col items-center justify-center h-[70vh]'>
            <h1 className='text-3xl font-bold mb-10'>Add Product</h1>
            <form type='submit' className='flex flex-col gap-4 w-[20vw] justify-center items-center'>
                <input type="text" required='true' placeholder='Name' className='py-1 px-2' />
                <input type='file' required='true' onChange={handleChange} className='py-1 px-2' />
                <img src={file} />
                <input type="text" placeholder='description' className='py-1 px-2' />
                <input type="number" min="0.01" step="0.01" required='true' placeholder='price' className='py-1 px-2' />
                <input type="submit" className='py-1 px-2 bg-beige text-white cursor-pointer' onClick={resetForm}/>
            </form>
        </div>
    )
}