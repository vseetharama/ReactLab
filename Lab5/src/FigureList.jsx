import BasicFigure  from "./BasicFigure";
import { useState } from "react";
import './FigureList.css';

const initalImages=[
    {
    src:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    caption:"image 1"},
    {
    src:"https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    caption:"image 2"}
];

const FigureList=()=>{
    const [images, setImages]=useState(initalImages);

    const addImage=()=>{
        const randomId=Math.floor(Math.random()*1000);
         const newImage={
            src:`https://picsum.photos/400/300?random=${randomId}`,
            caption:`image ${images.length+1}`
         };
         setImages([...images,newImage]);
        };

        const removeImage=(index)=>{
            setImages(images.filter((_,i)=>i!==index));
        };
        return(
            <div className="container">
                <h1>Dynamic Image Gallery</h1>
                <div className="buttons">
                    <button onClick={addImage}>Add Image</button>
                </div>
                <div className="gallery">
                    {images.map((image,index)=>(
                        <BasicFigure
                        key={index}
                        src={image.src}
                        caption={image.caption}
                        onRemove={()=>removeImage(index)}/>
                    ))}
                </div>

            </div>
        );
        };
        export default FigureList;

         