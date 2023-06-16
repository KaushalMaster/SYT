import React, { useState, useEffect, useContext } from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import "./css/Destination.css";
import { dataContext } from "../App";
import { categoryName } from "../App";

function Destination1(props) {
  const { info, setInfo } = useContext(dataContext);
  const { categoryData, setCategoryData } = useContext(categoryName);

  const navigate = useNavigate();
  const { id } = useParams(); 

  const [destination, setDestination] = useState([]);

  const handleDestinationClick = (destinationName) => {
    setInfo(destinationName);
  };
  console.log(info);

  const destinationCategory = async () => {
    const res = await fetch(
      `https://start-your-tour.onrender.com/destination/getDestinations?category_id=${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log(data.data);
    setDestination(data.data);
  };

  useEffect(() => {
    destinationCategory();
  }, [id]);

  return (
    <div>
      <Header />
      <section className="py-2">
        <div class="container">
          <div class="d-flex justify-content-between text-center">
            <div className="py-3 d-flex justify-content-center w-100 ">
              <h1
                className="text-center"
                style={{ color: "#09646D", fontWeight: "600" }}
              >
                Best {categoryData} Places (india)
              </h1>
            </div>
            <div class="d-flex justify-content-end align-items-center">
              <button
                class="bt-filter d-xl-none d-lg-block d-md-block d-sm-block"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
              >
                filters
              </button>
            </div>
          </div>

          {/* <!------------------------------------- filter -------------------------------------------> */}
          <div class="row justify-content-between">
            <div class="col-12 col-xl-3 col-lg-3 col-md-3 col-sm-6 d-xl-block d-lg-none d-md-none d-sm-none d-none  text-start">
              <div class="sort-list filter px-3 py-3">
                <div>
                  <ul class="list-none ps-0">
                    <li>
                      <h6 class="filter-headers">Sort by</h6>
                    </li>
                    <li>
                      <input type="checkbox" class="input-margin" />
                      High To Low
                    </li>
                    <li>
                      <input type="checkbox" class="input-margin" />
                      Low To High
                    </li>
                    <li>
                      <input type="checkbox" class="input-margin" />
                      Popularity
                    </li>
                  </ul>
                </div>
                <div></div>
                <div>
                  <ul class="list-none ps-0">
                    <li>
                      <h6 class="filter-headers">Cities</h6>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        class="input-margin"
                        name=""
                        id=""
                      />
                      Shimla
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        class="input-margin"
                        name=""
                        id=""
                      />
                      Manali
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        class="input-margin"
                        name=""
                        id=""
                      />
                      Dharmshala
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        class="input-margin"
                        name=""
                        id=""
                      />
                      Solan
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        class="input-margin"
                        name=""
                        id=""
                      />
                      Kasauli
                    </li>
                  </ul>
                </div>
                <div class="mb-3">
                  <h6 class="filter-headers">Filters</h6>
                </div>
                <div class="mb-3">
                  <h6 class="filters-inner">Duration (in Days)</h6>
                  <select class="select-day">
                    <option selected> 1 to 3</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div>
                  <ul class="list-none ps-0">
                    <li>
                      <h6 class="filters-inner">Budget Per Person</h6>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        class="input-margin"
                        name=""
                        id=""
                      />
                      Less than 10,000
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        class="input-margin"
                        name=""
                        id=""
                      />
                      10,000 to 20,000
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        class="input-margin"
                        name=""
                        id=""
                      />
                      20,000 to 40,000
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        class="input-margin"
                        name=""
                        id=""
                      />
                      40,000 to 60,000
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        class="input-margin"
                        name=""
                        id=""
                      />
                      60,000 to 80,000
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        class="input-margin"
                        name=""
                        id=""
                      />
                      Above 80,000
                    </li>
                  </ul>
                </div>
                <div>
                  <ul class="list-none ps-0">
                    <li>
                      <h6 class="filters-inner">Month of Travel</h6>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        class="input-margin"
                        name=""
                        id=""
                      />
                      Jan-Mar
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        class="input-margin"
                        name=""
                        id=""
                      />
                      Apr-Jun
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        class="input-margin"
                        name=""
                        id=""
                      />
                      Jul-Sep
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        class="input-margin"
                        name=""
                        id=""
                      />
                      Oct-Dec
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <!------------------------------------- toggle button ------------------------------------> */}

            <div
              class="offcanvas offcanvas-start"
              tabindex="-1"
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
            >
              <div class="offcanvas-body">
                <div class="col-12  text-start">
                  <div class="sort-list filter px-3 py-3">
                    <div>
                      <ul class="list-none ps-0">
                        <li>
                          <h6 class="filter-headers">Sort by</h6>
                        </li>
                        <li>
                          <input type="checkbox" class="input-margin" />
                          High To Low
                        </li>
                        <li>
                          <input type="checkbox" class="input-margin" />
                          Low To High
                        </li>
                        <li>
                          <input type="checkbox" class="input-margin" />
                          Popularity
                        </li>
                      </ul>
                    </div>
                    <div></div>
                    <div>
                      <ul class="list-none ps-0">
                        <li>
                          <h6 class="filter-headers">Cities</h6>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            class="input-margin"
                            name=""
                            id=""
                          />
                          Shimla
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            class="input-margin"
                            name=""
                            id=""
                          />
                          Manali
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            class="input-margin"
                            name=""
                            id=""
                          />
                          Dharmshala
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            class="input-margin"
                            name=""
                            id=""
                          />
                          Solan
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            class="input-margin"
                            name=""
                            id=""
                          />
                          Kasauli
                        </li>
                      </ul>
                    </div>
                    <div class="mb-3">
                      <h6 class="filter-headers">Filters</h6>
                    </div>
                    <div class="mb-3">
                      <h6 class="filters-inner">Duration (in Days)</h6>
                      <select class="select-day">
                        <option selected> 1 to 3</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div>
                      <ul class="list-none ps-0">
                        <li>
                          <h6 class="filters-inner">Budget Per Person</h6>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            class="input-margin"
                            name=""
                            id=""
                          />
                          Less than 10,000
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            class="input-margin"
                            name=""
                            id=""
                          />
                          10,000 to 20,000
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            class="input-margin"
                            name=""
                            id=""
                          />
                          20,000 to 40,000
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            class="input-margin"
                            name=""
                            id=""
                          />
                          40,000 to 60,000
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            class="input-margin"
                            name=""
                            id=""
                          />
                          60,000 to 80,000
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            class="input-margin"
                            name=""
                            id=""
                          />
                          Above 80,000
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul class="list-none ps-0">
                        <li>
                          <h6 class="filters-inner">Month of Travel</h6>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            class="input-margin"
                            name=""
                            id=""
                          />
                          Jan-Mar
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            class="input-margin"
                            name=""
                            id=""
                          />
                          Apr-Jun
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            class="input-margin"
                            name=""
                            id=""
                          />
                          Jul-Sep
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            class="input-margin"
                            name=""
                            id=""
                          />
                          Oct-Dec
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!------------------------------------- tourplaces ---------------------------------> */}

            <div class="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12">
              <div class="tourplaces px-3 py-3">
                <div class="">
                  <div className="row gy-4">
                    {destination.map((ele) => {
                      return (
                        <>
                          <div className="col-sm-6 col-12 d-flex justify-content-center">
                            <div
                              class="best_natural_places w-100"
                              onClick={() => {
                                navigate(`/destination/${ele._id}`, {
                                  state: { city: info },
                                });
                                handleDestinationClick(ele.destination_name);
                              }}
                              style={{ cursor: "pointer" }}
                            >
                              <div class="rating-top">
                                <div class="Rating w-100">
                                  <img
                                    src={ele.Place_to_visits || "/bkg-1-1.png"}
                                    alt=""
                                    class="img-fluid w-100"
                                  />
                                  <span>
                                    <FontAwesomeIcon
                                      icon={faStar}
                                      style={{ color: "yellow" }}
                                    />{" "}
                                    4.3
                                  </span>
                                </div>
                                <div class="customise customise2 d-flex justify-content-between">
                                  <h5>{ele.destination_name}</h5>
                                  <h4 className="d-inline">
                                    <i class="fa-solid fa-indian-rupee-sign"></i>{" "}
                                    6k to 40k
                                  </h4>
                                  <div className="customise_span">
                                    <span>per person</span>
                                  </div>
                                </div>
                              </div>
                              <div class="Customize-btn Customize-btn-2">
                                <button>More Details</button>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Destination1;
