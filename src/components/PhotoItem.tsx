import {Photo} from "../type/Photo"

type Props = {
    photo: Photo;
    onClick: () => void;
}

export const PhotoItem = ({photo, onClick}: Props) => {
    return(
        <div onClick={onClick} className="cursor-pointer hover:scale-105 hover:opacity-80 ">
            <img src={`assets/${photo.url}`} alt="" className="w-full h-full " />
        </div>
    );
}