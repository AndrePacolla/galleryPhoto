import {Photo} from "../type/Photo"

type Props = {
    photo: Photo;
    onClick: () => void;
};


export const PhotoItem = ({photo, onClick}: Props) => {
    return(

        <div onClick={onClick} className="hover:opacity-80 hover:scale-125 cursor-pointer">
            <img src={`/assets/${photo.url}`} alt="photoInter" className="w-full" />
        </div>
       
    );
}