import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavigationBar from './NavigationBar'
import axios from 'axios'
function ProfileUpload() {
    const [username, setUsername] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const [filePath, setFilePath] = useState('')
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10))
    const navigate = useNavigate()

    async function handleFormSubmit(event) {
        event.preventDefault()
        console.log(filePath);
        const data = new FormData()
       
        data.append('name', username)
        data.append('location', location)
        data.append('likes', 0)
        data.append('description', description)
        data.append('postImage', filePath)
        data.append('date', date)
        try {
          
            const response = await axios.post('http://localhost:9000/api/v1/postUpload', data,
                {
                    headers: {
                        "Content-Type": "multipart/data",
                    }
                })
            if (response.status === 200) {
                // Reset the form inputs in success
                setUsername('')
                setLocation('')
                setDescription('')
                setFilePath('')
                setDate(new Date().toISOString().slice(0, 10))
                // Navigate to the PostView page after successful upload
                navigate('/post-view', { replace: true })
            } else {
                alert('Error uploading data')
            }
        } catch (error) {
            console.log(error.message)
            alert('Error uploading data')
        }
    }

    function handleFileChange(event) {
        console.log(event.target.files);
        const file = event.target.files[0];
        setFilePath(file);
        // console.log(file.path);
        // const reader = new FileReader();

        // reader.readAsDataURL(file);
        // reader.onload = () => {
        //     setFilePath(reader.result)
        // };
        // console.log(filePath);
    }

    function handleUsername(event) {
        setUsername(event.target.value)
    }

    function handlelocation(event) {
        setLocation(event.target.value)
    }

    function handledescription(event) {
        setDescription(event.target.value)
    }

    return (
        <>
            <NavigationBar />
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="image">
                    <input
                        type="text"
                        className="upload-path"
                        // value={filePath}
                        readOnly
                    />
                    <input
                        className="upload-image"
                        type="file"
                        name="postImage"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                </label>

                <label htmlFor="username">
                    <input
                        className="upload-name"
                        type="text"
                        id="username"
                        value={username}
                        onChange={handleUsername}
                        placeholder="Username"
                    />
                </label>
                <label htmlFor="location">
                    <input
                        className="upload-location"
                        type="text"
                        id="location"
                        value={location}
                        onChange={handlelocation}
                        placeholder="Location"
                    />
                </label>
                <label htmlFor="description">
                    <input
                        className="upload-desc"
                        type="text"
                        id="description"
                        value={description}
                        onChange={handledescription}
                        placeholder="Description"
                    />
                </label>
                <button className="upload-btn" type="submit">
                    Post
                </button>
            </form>
        </>
    )
}

export default ProfileUpload
