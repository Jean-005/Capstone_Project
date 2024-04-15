import Order from "../Order";

const OrderList = ({orders, completedOrders}) => {

    const orderComponents = orders.map((order) => {
        return (
            <Order
            key={order.id}
            order={order}
            completedOrders={completedOrders}
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