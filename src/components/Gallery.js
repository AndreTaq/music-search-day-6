import GalleryItem from './GalleryItem'
import { useContext } from 'react'
import { DataContext } from '../context/DataContext'

// const Gallery = (props) => {
//     const data = props?.data?.result?.read()
//     // const data = useContext(DataContext)
    
//     // console.log('Data in gallery!!', data)

//     const display = data.map((item, index) => {
//         return (
//             <GalleryItem key={index} item={item} />
//         )
//     })

//     return (
//         <div>
//             {display}
//         </div>
//     )
// }

const Gallery = () => {
    const data = useContext(DataContext)
    console.log('Data in gallery!!', data)

    const display = data.map((item, index) => {
        return (
            <GalleryItem key={index} item={item} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery
