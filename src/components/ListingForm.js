import React, { useState } from "react"

function ListingForm({ handleListingSubmit }) {
    const [description, setDescription] = useState("")
    const [location, setLocation] = useState("")
    const [image, setImage] = useState("")

    const handleDescription = (event) => {
        setDescription(event.target.value)
    }
    const handleLocation = (event) => {
        setLocation(event.target.value)
    }
    const handleImage = (event) => {
        setImage(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        handleListingSubmit({
            description: description,
            location: location,
            image: image
        })
        setDescription("")
        setLocation("")
        setImage("")
    }

    return (
        <form className="listing-form" onSubmit={handleSubmit}>
            <label>Description:
                <input type="text" name="description" value={description} onChange={handleDescription}></input>
            </label>
            <label>Location:
                <input type="text" name="location" value={location} onChange={handleLocation}></input>
            </label>
            <label>Image URL:
                <input type="text" name="image" value={image} onChange={handleImage}></input>
            </label>
            <button type="submit">Submit your listing</button>
        </form>
    );
}

export default ListingForm