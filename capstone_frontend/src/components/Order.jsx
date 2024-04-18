import "./Order.css"
const Order = ({ order }) => {

    return (
        <>  
            <p>{order.id}</p>
            <p>Address: {order.deliveryLocation}</p>

            <input type="checkbox"
            />
        </>

    );
}

export default Order;