import logo from '../assets/logo2.png'
import { useState } from 'react'

export default function Register( { setPage } ){

const [name, setName] = useState('')
const [image, setImage] = useState('')
const [description, setDescription] = useState('')
const [price, setPrice] = useState('')
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


    return(
        <>
              
        </>
    )
}