import CardEvent from "../../components/Cardevent/index";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import { useEffect, useState } from "react";

function Landing() {
  const navigate = useNavigate();
  // const data = [
  //   { id: 1, name: "Tea", category: "Drink" },
  //   { id: 2, name: "Milk", category: "Drink" },
  //   { id: 3, name: "Coffee", category: "Drink" },
  // ];
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(1);

  useEffect(() => {
    getDataProduct();
  }, []);

  useEffect(() => {
    getDataProduct();
  }, [page]);
  const getDataProduct = async () => {
    try {
      const result = await axios.get(
        `api/product?searchName=&sort=&limit=4&page=${page}&searchDateCreated=`
      );
      setData(result.data.data);
      setPagination(result.data.pagination);

      // console.log(result);
    } catch (error) {
      // console.error(error);
    }
  };

  const handleDetailProduct = (id) => {
    navigate(`/detail/${id}`);
  };
  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <>
      <main className="container d-flex gap-3">
        {data.length > 0 ? (
          data.map((item) => (
            <div key={item.id}>
              <CardEvent
                data={item}
                newData="Data Baru nih"
                handleDetail={handleDetailProduct}
              />
            </div>
          ))
        ) : (
          <div className="text-center">
            <h3>Data Not Found !</h3>
          </div>
        )}
      </main>
      <div className="d-flex gap-2 justify-content-center w-100 my-5">
        <button className="btn btn-primary" onClick={handlePrevPage}>
          &lt;
        </button>
        <button
          className="btn btn-primary"
          onClick={handleNextPage}
          disabled={page === pagination.totalPage ? true : false}
        >
          &gt;
        </button>
      </div>

      {/* END MAIN */}
    </>
  );
}
export default Landing;
