import { useState } from 'react';
import { PhotoItem } from './components/PhotoItem';
import { Modal } from "./components/Modal";
import { photoList } from './data/photoList';

function App() {

  const [showModal, setShowModal] = useState(false);
  const [imageOfModal, setImageOfModal] = useState(""); // aqui so serve para guardar a imagem que foi selecionada.

  const openModal = (id: Number) => {

    const photo = photoList.find((item) => item.id === id )

    if(photo){

      setImageOfModal(photo.url);
      setShowModal(true);
      }
   }

   const closeModal = () => {
    setShowModal(false);
   };



  return (
    <>
      
        <h1 className='text-white text-center my-14 text-3xl font-bold'>Fotos Intergalacticas</h1>
        <section className='container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>

          {photoList.map(item => (
            <PhotoItem
            
            key={item.id}
            photo={item}
            onClick={() => openModal(item.id)}
            />
          ))}
        </section>

          {showModal &&
          
            <Modal 
              image={imageOfModal}
              closeModal={closeModal}


            
            
            />
          
          }


       
    </>
  )
}

export default App
