import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/storeContext";
import axios from 'axios';

const MyOrders = () => {
    const { token } = useContext(StoreContext);
    const [data, setData] = useState([]);

    const fetchOrders = async () => {
        try {
            const response = await axios.get("http://localhost:8081/api/orders", { headers: { 'Authorization': `Bearer ${token}` } });
            setData(response.data);
        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    }

    useEffect(() => {
        if (token) {
            fetchOrders();
        }
    }, [token]);

    return (
        <div className="container">
            <div className="py-5 row justify-content-center">
                <div className="col-11 card">
                    <table className="table table-responsive">
                        <tbody>
                            {data.map((order, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="align-middle">
                                            <img src={order.orderedItems[0].imageUrl || ''} alt="Food Item" height={48} width={48} />
                                        </td>
                                        <td className="align-middle">
                                            {order.orderedItems.map((item, itemIndex) => (
                                                <span key={itemIndex}>
                                                    {item.name} x {item.quantity}
                                                    {itemIndex < order.orderedItems.length - 1 && ", "}
                                                </span>
                                            ))}
                                        </td>
                                        <td className="align-middle">&#x20B9;{order.amount}</td>
                                        <td className="align-middle">Items: {order.orderedItems.length}</td>
                                        <td className="align-middle fw-bold text-capitalize">&#x25cf;{order.orderStatus}</td>
                                        <td className="align-middle">
                                            <button className="btn btn-dm btn-warning" onClick={fetchOrders}>
                                                <i className="bi bi-arrow-clockwise"></i>
                                            </button>
                                        </td>
                                    </tr>

                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default MyOrders;
