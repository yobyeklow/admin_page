import React from "react";
import iphone14 from "../../image/iphone14pro_tim.png";
import MQD83 from "../../image/MQD83.jpg";
import info_avt from "../../image/info.png";
const OrderDetailPage = () => {
  return (
    <div className="order-details">
      <div className="title">
        <h1>#12345</h1>
        <span>PRODUCTS</span>
        <div className="checkpoint">
          <span class="material-symbols-outlined">done</span>
          <span>Delivered</span>
        </div>
      </div>
      <div className="content mt-8">
        <div className="left-container">
          <div className="boxItem">
            <div className="top-content">
              <img src={iphone14} alt="" />
            </div>
            <div className="bottom-content">
              <div className="left">
                <h2>Iphone 14 Pro</h2>
                <span>Quantity - 1</span>
              </div>
              <div className="right">
                <h2>Price</h2>
                <span>10.000.000 VND</span>
              </div>
            </div>
          </div>
          <div className="boxItem">
            <div className="top-content">
              <img src={iphone14} alt="" />
            </div>
            <div className="bottom-content">
              <div className="left">
                <h2>Iphone 14 Pro</h2>
                <span>Quantity - 1</span>
              </div>
              <div className="right">
                <h2>Price</h2>
                <span>10.000.000 VND</span>
              </div>
            </div>
          </div>
          <div className="boxItem">
            <div className="top-content">
              <img src={MQD83} alt="" />
            </div>
            <div className="bottom-content">
              <div className="left">
                <h2>MQD83</h2>
                <span>Quantity - 1</span>
              </div>
              <div className="right">
                <h2>Price</h2>
                <span>5.000.000 VND</span>
              </div>
            </div>
          </div>
          <div className="boxItem">
            <div className="top-content">
              <img src={iphone14} alt="" />
            </div>
            <div className="bottom-content">
              <div className="left">
                <h2>Iphone 14 Pro</h2>
                <span>Quantity - 1</span>
              </div>
              <div className="right">
                <h2>Price</h2>
                <span>10.000.000 VND</span>
              </div>
            </div>
          </div>
          <div className="boxItem">
            <div className="top-content">
              <img src={iphone14} alt="" />
            </div>
            <div className="bottom-content">
              <div className="left">
                <h2>Iphone 14 Pro</h2>
                <span>Quantity - 1</span>
              </div>
              <div className="right">
                <h2>Price</h2>
                <span>10.000.000 VND</span>
              </div>
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
                <img src={info_avt} alt="" />
              </div>
              <div className="customer-name">
                <h3>Khang Ngô</h3>
              </div>
              <div className="customer-contact">
                <h3>khangb1906491@gmail.com</h3>
                <h3>+84 0852896171</h3>
              </div>
            </div>
          </div>
          <div className="bottom-content">
            <div className="shipping">
              <div className="shipping-content">
                <h3 className="text-xl mb-2 font-medium text-black">
                  Shipping address
                </h3>
                <h3 className="text-sm">
                  315 Đ. Nguyễn Văn Linh, Phường An Khánh, Ninh Kiều, Cần Thơ
                </h3>
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
                <h3 className="text-sm">Banking Transfer</h3>
              </div>
              <div className="payment-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="slateblue"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
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
