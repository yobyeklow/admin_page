import React from "react";
import avatar from "../../../image/avatarDefault.png";
import { useLocation, useNavigate } from "react-router-dom";
const OrderDetailPage = () => {
  const { state } = useLocation();
  const [tax, delivery] = [0, 50000];
  const data = state.order;
  console.log(data);
  const formatter = new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "VND",
  });
  const navigate = useNavigate();
  return (
    <div className="order-details">
      <div
        onClick={() => {
          navigate(-1);
        }}
        className="backForward"
      >
        <span className="material-symbols-outlined text-lg text-blue-300">
          west
        </span>
        <h3>Orders</h3>
      </div>
      <div className="title">
        <h1>#{data.products.length}</h1>
        <span>PRODUCTS</span>
        <div className="checkpoint">
          {(data.orderStatus === "Processing" ||
            data.orderStatus === "Dispatched" ||
            data.orderStatus === "Cash on Delivery") && (
            <>
              <span class="material-symbols-outlined pending">
                history_toggle_off
              </span>
            </>
          )}
          {(data.orderStatus === "Cancelled" ||
            data.orderStatus === "Not Processed") && (
            <>
              <span className="material-symbols-outlined cancel ">close</span>
            </>
          )}
          {data.orderStatus === "Delivered" && (
            <>
              <span className="material-symbols-outlined success">done</span>
            </>
          )}
          <span>{data.orderStatus}</span>
        </div>
      </div>
      <div className="content mt-8 mb-8">
        <div className="left-container">
          <div className="order-item">
            {data.products?.length > 0 &&
              data.products.map((item) => {
                return (
                  <div key={item._id} className="boxItem">
                    <div className="top-content">
                      <img src={item.product.images} alt="" />
                    </div>
                    <div className="bottom-content">
                      <div className="left">
                        <h2>
                          {item.product.name} -{" "}
                          {item.product.color.charAt(0).toUpperCase() +
                            item.product.color.slice(1)}
                        </h2>
                        <span>Quantity - {item.count}</span>
                      </div>
                      <div className="right">
                        <h2>Price</h2>
                        <span>{formatter.format(item.price)}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="summary-order">
            <h1>Payment summary</h1>
            <div className="flex items-center justify-between mb-3">
              <h3>
                Subtotal <span>({data.products.length} items)</span>
              </h3>
              <h3>{formatter.format(data.paymentIntent.amount)}</h3>
            </div>
            <div className="flex items-center justify-between mb-3">
              <h3>Delivery</h3>
              <h3>{formatter.format(delivery)}</h3>
            </div>
            <div className="flex items-center justify-between mb-3">
              <h3>Tax</h3>
              <h3>{formatter.format(tax)}</h3>
            </div>

            <div className="text-base flex items-center justify-between font-semibold">
              <h3>Total paid by customer</h3>
              <h3>{formatter.format(data.paymentIntent.amount + 50000)}</h3>
            </div>
          </div>
        </div>
        <div className="right-container">
          <div className="top-content">
            <div className="title">
              <h3>Customer Information</h3>
            </div>
            <div className="info-customer">
              <div className="customer-avartar">
                <img src={data.orderBy.avatar || avatar} alt="" />
              </div>
              <div className="customer-name">
                <h3>{data.orderBy.name}</h3>
              </div>
              <div className="customer-contact">
                <h3>{data.orderBy.email}</h3>
                <h3>+84 {data.orderBy.phone}</h3>
              </div>
            </div>
          </div>
          <div className="bottom-content">
            <div className="shipping">
              <div className="shipping-content">
                <h3 className="text-xl mb-2 font-medium text-black">
                  Shipping address
                </h3>
                <h3 className="text-sm">{data.orderBy.address}</h3>
              </div>
              <div className="shipping-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="slateblue"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="payment">
              <div className="payment-content">
                <h3 className="text-xl mb-2 font-medium text-black">
                  Payment methods
                </h3>
                <h3 className="text-sm">{data.paymentIntent.method}</h3>
              </div>
              <div className="payment-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="slateblue"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailPage;
