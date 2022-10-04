import { useEffect, useState } from "react";
import moment from "moment";
import "./index.css";

export default function App() {
  const [dateShow, setDateShow] = useState(moment().format("YYYY-MM-DD")); // 2022-10-04
  const [listDateShow, setListDateShow] = useState([]);

  useEffect(() => {
    generateDate();
  }, [dateShow]);

  const generateDate = () => {
    let listDate = [
      moment(dateShow).subtract(2, "days"),
      moment(dateShow).subtract(1, "days"),
      dateShow,
      moment(dateShow).subtract(-1, "days"),
      moment(dateShow).subtract(-2, "days"),
    ];
    setListDateShow(listDate);
  };

  const selectDate = (date) => {
    setDateShow(date);
  };

  //   console.log("DATE ACTIVE = " + dateShow);

  return (
    <div className="App">
      <h1>Handle Date Show</h1>
      <hr />
      {listDateShow.map((item, index) => (
        <button
          key={index}
          style={{ margin: "0 10px" }}
          className={index === 2 ? "active" : ""}
          onClick={() => {
            selectDate(moment(item).format("YYYY-MM-DD"));
          }}
        >
          <div>{moment(item).format("DD")}</div>
          <small>{moment(item).format("ddd")}</small>
        </button>
      ))}
    </div>
  );
}
