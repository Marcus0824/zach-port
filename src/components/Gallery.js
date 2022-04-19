import { useEffect, useRef, useState, createContext, useContext } from "react"
import "./ImagePanel.js"
import { storage } from './Firebase'
import { getDownloadURL, listAll, ref } from 'firebase/storage'
import ImagePanel from "./ImagePanel.js";


const GalleryContext = createContext([]);

const useArray = (initialValue = []) => {
  const [value, setValue] = useState(initialValue);

  const push = element => {
    setValue(oldValue => [...new Set([...oldValue, element])]);
  };

  const remove = index => {
    setValue(oldValue => oldValue.filter((_, i) => i !== index));
  };

  const isEmpty = () => value.length === 0;

  return [ value, setValue, push, remove, isEmpty ];
};

const useImages = () => {
    const [loaded, setLoaded] = useState(false);
    const [images, setImages, pushImage, removeImage, imagesEmpty] = useArray();

    const fetchImages = async () => {
        const imageFolder = ref(storage, "images/");
        const imageList = await listAll(imageFolder);
                
        for (const imageRef of imageList.items) {
            const link = await getDownloadURL(imageRef);
            pushImage(link);
        }

        setLoaded(true);
    }

    useEffect(() => {
        console.log("Loaded: " + loaded);
    }, [loaded]);

    return [images, fetchImages, loaded];
}


const Gallery = () => {
    const [images, fetchImages, loaded] = useContext(GalleryContext);
    // ON LOAD
    useEffect(() => {
        if (!loaded) {
            fetchImages();
        }
    }, []);

    return (
        <div>
            <button onClick={() => {fetchImages()}}>Fetch</button>
            <div className="Gallery">
                {images.map((link, ID) => 
                    <ImagePanel ID={ID} link={link}></ImagePanel>
                )}
            </div>
        </div>
    )
}


export default Gallery;
export { GalleryContext, useImages, useArray };
