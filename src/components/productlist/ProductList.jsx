import Product from "../product/Product"
import "./productList.css"
import {products} from "../../data"
const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Projects</h1>
            </div>
            <div className="pl-list">
                {products.map((item) =>(
                    <Product key={item.id} img={item.img} link={item.link} title={item.title} desc={item.desc} subheading={item.subheading} date={item.date} video={item.video}/>
                ))}
            </div>
        </div>
    );
};

export default ProductList
