import Order from "../Order";
import "./OrderList.css"

const OrderList = ({orders}) => {

    const orderComponents = orders.map((order) => {
        return (
            <article id="single-order">
                <Order
                key={order.id}
                order={order}
                />
            </article>
        )
    })
    return (
        <>
            <section id="order-container">
                <h3 id="order-list-heading">Orders</h3>
                <div id="order-field-titles">
                    <h4>Delivery Status</h4>
                    <h4>Order Id</h4>
                    <h4>Delivery Address</h4>
                </div>
                {orderComponents}
            </section>
        </>
    );
}

export default OrderList;