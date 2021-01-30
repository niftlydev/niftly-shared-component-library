import StockPhotoOne from '../../images/image-slider/stock-photo-1.jpg';
import StockPhotoTwo from '../../images/image-slider/stock-photo-2.jpg';
import StockPhotoThree from '../../images/image-slider/stock-photo-3.jpg';


const ImageSliderFactory = (): Array<any> => {

    var images = new Array<any>();
    images.push(StockPhotoOne);
    images.push(StockPhotoTwo);
    images.push(StockPhotoThree);

    return images;

}

export default ImageSliderFactory;