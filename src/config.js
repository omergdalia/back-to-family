import reviews from './config/reviews.json';
import personel from './config/personel.json';
import programs from './config/programs.json';
import { gallery } from './config/images.json';


const galleryImages = gallery.map((img, _) => require(`./images/resorts/${img}`));

const configData = {
    reviews,
    personel, 
    programs,
    galleryImages
}

export default configData;
