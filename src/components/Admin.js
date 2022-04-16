
import React, { useRef, useState } from "react";
import { uploadImage } from "./Firebase";


const Admin = () => {
    const previewImage = useRef(null);
    const fileUpload = useRef(null);
    const fileName = useRef(null);
    const [imageSource, setImageSource] = useState("");

    const refreshSource = () => {
        let files = fileUpload.current.files;
        let file = files[0];
        fileName.current.innerText = file.name;
        setImageSource(URL.createObjectURL(file));
    };

    const addEntry = () => {
        try {
            uploadImage(fileUpload);
        } catch(err) {
            console.error(err);
            alert("An error occured while uploading the card.");
        }
    };

    return (
        <div>
            <img ref={previewImage} src={imageSource} style={{width: "10vw"}}/>
            <input ref={fileUpload} id="imageUpload" onChange={() => {refreshSource()}} type="file" accept="image/png, image/jpeg" style={{display: 'none', cursor: "pointer"}}></input>
            <label htmlFor="imageUpload" style={{cursor: "pointer"}} >Add Image</label>
            <h1 ref={fileName}>bruhbruh</h1>
            <button  onClick={() => {addEntry()}}>Add Entry</button>
        </div>
    )
}

export default Admin