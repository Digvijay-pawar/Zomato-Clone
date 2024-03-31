import Img from "./CollectionImg";
import img_1 from '../img/img-1.png'
import img_2 from '../img/img-2.png'
import img_3 from '../img/img-3.png'
import img_4 from '../img/img-4.png'


function Collections() {

    return (
        <div className="container bg-light py-2">
            <h2>Collections</h2>
            <p className="mt-4 text-secondary" style={{ fontSize: "larger" }}>Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends</p>
            <div className="row">
                <Img link={img_1}></Img>
                <Img link={img_2}></Img>
                <Img link={img_3}></Img>
                <Img link={img_4}></Img>
            </div>
        </div>
    );
}

export default Collections;