import Order from "../Order";

const OrderList = ({ orders }) => {
    const orderComponents = orders.map((order) => {
        return (
            <Order
                key={order.id}
                order={order}
            />
        )
    })

    return (
        <>
            <h3>List of Orders</h3>
            {orderComponents}
        </>
    );
}

export default OrderList;