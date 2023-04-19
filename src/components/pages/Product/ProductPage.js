import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import useDebounce from "../../../hooks/useDebounce";
import Swal from "sweetalert2";
import { getProduct } from "../../../store/products/productState";
import { request } from "../../utils/request";
const ProductPage = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [itemSelect, setItemSelect] = useState(null);
  const searchInput = useDebounce(query, 500);
  const deleteItem = async (id) => {
    if (id) {
      Swal.fire({
        title: "Do you want to delete this product?",
        showDenyButton: true,

        confirmButtonText: "Yes",
        denyButtonText: `No`,
      }).then(async (result) => {
        if (result.isConfirmed) {
          Swal.fire("Done!", "", "success");
          await request
            .delete(`/products/${id}`)
            .then((res) => {
              setItemSelect(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        } else if (result.isDenied) {
          Swal.fire("Actions are not did", "", "info");
        }
      });
    }
  };
  const fetchData = async () => {
    setLoading(true);
    try {
      await request.get(`/products?name[regex]=${searchInput}`).then((res) => {
        setData(res.data);
        setLoading(false);
      });
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchInput, itemSelect]);

  return (
    <div className="productPages">
      <div className="title-page">
        <h3>Products</h3>
      </div>
      <div className="main">
        <div className="top">
          <div className="title">
            <h3>All products</h3>
            <span>({data?.length})</span>
          </div>
          <div className="search-tool">
            <input
              placeholder="Enter product name"
              type="text"
              onChange={(e) => setQuery(e.target.value)}
            ></input>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 search-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>
        <div className="main-product">
          <div className="graph_box">
            <div className="box_item">
              <Link to="/products/addProduct" className="add-product-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-7 h-7 add-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </Link>
            </div>
            {loading ? (
              <div className="box_item flex items-center justify-center">
                <div className="add-product-btn ">
                  <div className="w-8 h-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin"></div>
                </div>
              </div>
            ) : (
              <>
                {data?.length > 0 &&
                  data?.map((item) => {
                    return (
                      <div key={item._id} className="box_item">
                        <div className="edit-item">
                          <div className="edit-container">
                            <Link
                              onClick={() => {
                                dispatch(getProduct(item._id));
                              }}
                              to={{
                                pathname: `/product/${item._id}`,
                              }}
                              state={{ item: item }}
                              className="edit-btn"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="white"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                />
                              </svg>
                            </Link>
                            <div
                              onClick={() => deleteItem(item._id)}
                              className="delete-btn"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="top-content relative">
                          <img src={item.images} alt="" />
                          {/* <h3 className="absolute top-3 right-4 text-gray z-50 text-base text-slate-500">
                            #1
                          </h3> */}
                        </div>
                        <div className="box-content">
                          <h2>Name:{item.name}</h2>
                          <h3>
                            Color:
                            {item.color.charAt(0).toUpperCase() +
                              item.color.slice(1)}
                          </h3>
                          <h3>
                            Price:
                            {item.price.toLocaleString("it-IT", {
                              style: "currency",
                              currency: "VND",
                            })}{" "}
                          </h3>
                          <h3>Quantity:{item.quantity}</h3>
                          <h3>Sold:{item.sold}</h3>
                        </div>
                      </div>
                    );
                  })}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
