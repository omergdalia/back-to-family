import reviews from './config/reviews.json';
import personel from './config/personel.json';
import programs from './config/programs.json';


function importAll(r) {
    return r.keys().map(r);
}

const galleryImages = importAll(
    require.context(
        `./images/resorts/${process.env.REACT_APP_RESORT_IMAGES_DIR}`,
        false,
        /\.(webp|png|jpe?g|svg)$/
    )
);


const configData = {
    reviews,
    personel, 
    programs,
    galleryImages
}

export default configData;
