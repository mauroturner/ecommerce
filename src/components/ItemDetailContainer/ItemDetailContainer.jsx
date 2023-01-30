import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const {itemId} = useParams();
    console.log(itemId);
    return <div>ItemDetailContainer</div>;
}

export default ItemDetailContainer