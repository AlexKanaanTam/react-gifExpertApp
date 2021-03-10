import React  from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGif } from '../Helpers/getGifs';
import GifGridItem from './GifGridItem';

//Una vez hemos enviado las caregory como props haremos una peticion http para obtener la simagenes
const GifGrid = ({ category }) => {

    //importaremos nuestro CustomHook:

     const {data, loading}= useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__flash">{category}</h3>

            {loading && "Cargando..." }

            <div className= "card-grid">
                
                {
                    data.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))

                }



            </div>
        </>       
    )   
}

export default GifGrid





// const [images, setImages] = useState([])

// useEffect(() => {
//     getGif(category).then(img=>setImages(img))
// }, [category])