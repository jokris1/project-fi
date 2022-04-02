import React, {useState, useEffect} from "react";
import axios from "axios";
import './Images.css';



export default function Images() {
    // SET STATES
    const [images, setImages] = useState([]);

    // initial and after every change of state
    useEffect(() => {
        // fetch data
        axios
        .get(`http://localhost:5000/images`)
        .then(res => {
            console.log(res.data);
            setImages(res.data)
        })
        .catch(err => console.log(err));
    }, []); // optional [] meaning if useState variables inside useEffect then they execute only initially


    console.log(images);
    return (
      <div>
            <h2>Images</h2>
            <div className="images">
                {images.map((image) => (
                    <figure>
                        <img key={image.url} src={"/Images/"+image.url} />
                        <figcaption>{image.width} x {image.height} ({image.format})</figcaption>
                    </figure>
            ))}
            </div>
      </div>
    );
  }