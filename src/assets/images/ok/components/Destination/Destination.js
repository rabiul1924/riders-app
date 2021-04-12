import React, { useState } from "react";
import { Form, ListGroup } from "react-bootstrap";
import { useParams } from "react-router";
import "./Destination.css";
import fakedata from "../../fakedata/Fakedata";

import Map from "../Map/Map";

const Destination = () => {
  const { name } = useParams();
  const vehicles = fakedata;

  const [state, setState] = useState(false);
  const handleSearch = () => {
    return setState(true);
  };

  const found = vehicles.find((v) => v.name === name);
  console.log(found);
  return (
    <div style={{ height: "100vh", backgroundColor: "#3aafa9" }}>
    
      <div className="container">
        <div className="row">
          <div className="col-md-3 p-5">
            <Form>
              <div className="form-group">
                <label>Pick From</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="From"
                  required
                />
              </div>
              <div className="form-group">
                <label>Pick To</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="To"
                  required
                />
              </div>
            </Form>
            <button
              onClick={handleSearch}
              className="btn btn-primary btn-block"
            >
              Search
            </button>
            {state && (
              <ListGroup className=" py-3">
                <ListGroup.Item className="d-flex p-2 my-3" variant="primary">
                  <img className="img mr-3" src={found.img} alt="" />{" "}
                  <h3 className="mr-2">{found.name}</h3> <h3>100tk</h3>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex p-2 my-3" variant="primary">
                  <img className="img mr-3" src={found.img} alt="" />{" "}
                  <h3 className="mr-2">{found.name}</h3> <h3>200tk</h3>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex p-2 my-3" variant="primary">
                  <img className="img mr-3" src={found.img} alt="" />{" "}
                  <h3 className="mr-2">{found.name}</h3> <h3>300tk</h3>
                </ListGroup.Item>
              </ListGroup>
            )}
          </div>
          <div className="col-md-9 py-5">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
