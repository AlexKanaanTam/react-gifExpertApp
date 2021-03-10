import { useState, useEffect } from "react"
import { getGif } from "../Helpers/getGifs"


export const useFetchGifs=(category)=>{
    //Los hooks tambien pueden tener estado
    const [state, setstate] = useState({
        data: [],
        loading: true //crearemos un estado que va a estar cargando por defecto
    })

   useEffect(()=> {
       getGif(category).then((imgs)=>{
           setstate({
            data: imgs,
            loading: false})
       })
   },[])


    
    return state;

}