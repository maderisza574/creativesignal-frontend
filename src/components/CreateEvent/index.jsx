import Header from "../Header";
import ProfileLeft from "../ProfileLeft";
import Footer from "../Footer";
import ListEvent from "../ListEvent";

function CreateEvent() {
  return (
    <div>
      <Header />
      <div className="card px-0">
        <div className="row">
          <div className="left col col-md-3">
            <ProfileLeft />
          </div>
          <div className="right col bg-light py-5">
            <div className="container justify-content-center w-70 rounded bg-white ">
              <div className="row">
                <div className="col text-left">Manage Event</div>
                <div className="col col-md-3 ">
                  <button className="btn btn-primary"> Create</button>
                </div>
              </div>

              <ListEvent />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CreateEvent;
