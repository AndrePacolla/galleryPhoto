import Logo from "../../public/assets/x.png"

type Props = {
    image: string;
    closeModal: () => void;
}



export const Modal = ({ image, closeModal }: Props) => {
    return(

        <>
          <div className="fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-black/90">

            <img src={`/assets/${image}`} className="max-w-screen max-h-screen" />

          </div>
          <div onClick={closeModal} className="fixed top-5 left-5 w-10 h-10 cursor-pointer text-white text-5xl">
                <img src={Logo} className="w-10 h-10 fixed left-5 right-5 cursor-pointer "/>
         </div>
        
        
        
        </>
          
    )

}