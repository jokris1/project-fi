import React, {useState} from "react";
import axios from 'axios';
import './Upload.css';


export default function Upload() {
    // SET STATES
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState();
    const [fileType, setFileType] = useState();

    // SUBMIT FUNCTION
    const submitForm = e => {
        e.preventDefault();

        // APPEND FORM AND FOR MDATA
        let form = e.target;

        const formData = new FormData(form);
        formData.append('file', file);
        formData.append("fileName", fileName); //changes
        formData.append("fileType", fileType); //changes

        axios
            .post(`http://localhost:5000/upload`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                  },
            }) //changes
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    return (
        <div>
            <h2>Upload</h2>
            <form onSubmit={submitForm} encType="multipart/form-data">
                <label> File name
                    <input
                        type="text"
                        onChange={(e) => setFileName(e.target.value)}
                        placeholder={""}
                    />
                </label>
            <br />
                <input
                    type="file"
                    name="myFile"
                    accept="image/*"
                    onChange={(e) => {
                        setFile(e.target.files);
                        setFileType(e.target.files[0].type.split('/').pop()); // i.e. image/png => png
                    }}
                />
            <br />
            <input type="submit" value="Upload" />
            </form>
      </div>
    );
  }