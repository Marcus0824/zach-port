import { useEffect, useRef, useState } from "react"
import { storage } from './Firebase'
import { getDownloadURL, listAll, ref } from 'firebase/storage'


const useArray = (initialValue = []) => {
  const [value, setValue] = useState(initialValue);

  const push = element => {
    setValue(oldValue => [...oldValue, element]);
  };

  const remove = index => {
    setValue(oldValue => oldValue.filter((_, i) => i !== index));
  };

  const isEmpty = () => value.length === 0;

  return { value, setValue, push, remove, isEmpty };
};

const useImages = () => {
    const [loaded, setLoaded] = useState(false);
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = () => {
            const imageFolder = ref(storage, "images/");
            listAll(imageFolder).then((folderItems) => {
                folderItems.items.forEach((imageRef) => {
                    getDownloadURL(imageRef).then((imageLink) => {
                        setImages((prevImages) => [...new Set([...prevImages, imageLink])]);
                    });
                });
            });
        }

        if (!loaded) {
            setLoaded(true);
            fetchImages();
        }
        
    }, []);


    return images;
}


const Gallery = () => {
    const imageContainer = useRef(0);
    const images = useImages();

    // ON LOAD
    useEffect(() => {
        
    }, []);

    return (
        <div>
            <div ref={imageContainer}>
                {images.map((link) => 
                    <img width={200} src={link} />
                )}
            </div>
        </div>
    )
}


export default Gallery
