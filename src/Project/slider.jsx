import { useEffect, useState, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Data from "./Data";
import { Navigation, Pagination, Scrollbar } from "swiper";
import { useNavigate } from "react-router-dom";
import { categoryName } from "../App";

const Slider = () => {
  const { categoryData, setCategoryData } = useContext(categoryName);

  const [test, setTest] = useState([]);
  const [test1, setTest1] = useState([]);
  const [test2, setTest2] = useState([]);
  const [destinationData, setDestinationData] = useState([]);
  const [most_lovaed_destionation, setMost_lovaed_destionation] = useState([]);

  const [goToHome, setGoToHome] = useState(false);
  const [goToPage, setGoToPage] = useState(false);

  const navigate = useNavigate();

  const fun = async () => {
    const data2 = Data.slice(0, 5);
    setTest(data2);
    const data3 = Data.slice(5, 10);
    setTest1(data3);
    const data4 = Data.slice(10, 15);
    setTest2(data4);
  };

  const HomeData = async () => {
    const res = await fetch("http://54.89.214.143:3000/home", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data.data[0].DestinationData);
    setDestinationData(data.data[0].DestinationData);
    setMost_lovaed_destionation(data.data[0].most_lovaed_destionation);
  };

  useEffect(() => {
    HomeData();
    fun();
  }, []);

  return (
    <div>
      <div style={{ marginBottom: "25px" }}>
        <h3 className="font">Are you looking for?</h3>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={-30}
        slidesPerView={4}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {destinationData.map((ele) => {
          return (
            <>
              <SwiperSlide
                className="pb-0"
                onClick={() => {
                  navigate(`/destination1/${ele._id}`);
                  setCategoryData(ele.category_name);
                }}
                style={{ cursor: "pointer" }}
              >
                <div>
                  <img
                    src={ele.photo}
                    alt=""
                    className="img-fluid w-75 "
                    style={{ cursor: "pointer" }}
                  />
                  <p className="name_c">{ele.category_name}</p>
                </div>
              </SwiperSlide>
            </>
          );
        })}

        <div style={{ margin: "25px 0" }}>
          <h3 className="font pt-5">Most Loved Destination!</h3>
        </div>
      </Swiper>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={20}
        slidesPerView={4}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {most_lovaed_destionation.map((ele) => {
          return (
            <>
              <SwiperSlide>
                <img
                  src={ele.place_to_visits}
                  alt=""
                  className=" text-center img_radius "
                  onClick={() => {
                    setGoToPage(true);
                  }}
                  style={{ cursor: "pointer" }}
                />
                <p className="name_ca">{ele.destination_name}</p>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
