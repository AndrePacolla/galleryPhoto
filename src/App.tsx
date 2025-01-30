import { useState } from 'react';
import { PhotoItem } from './components/PhotoItem';
import { Modal } from "./components/Modal";
import { photoList } from './data/photoList';

function App() {

  const [showModal, setShowModal] = useState(false); // variavel responsavel para exibir ou nao o modal
  const [imageOfModal, setImageOfModal] = useState(""); // aqui so serve para guardar a imagem que foi selecionada.


  // Abril modal
  const openModal = (id: number) => {

    const photo = photoList.find((item) => item.id === id);// busca ids da lista dps comparo se é igual ao id do parametro

    if(photo){
      setImageOfModal(photo.url);
      setShowModal(true);
    }

   }


   // Fechar modal
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
