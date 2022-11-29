import React from "react";

function HeaderS() {
  
  return (
    <div>
      <div className="card">
        <div className="card-group">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">L1</h5>
              <div className="col text-center">
                <a href="/L1" className="btn btn-outline-primary mt-100">
                  See List
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">L2</h5>
              <div className="col text-center">
                <a href="/L2" className="btn btn-outline-primary mt-100">
                  See List
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">L3</h5>
              <div className="col text-center">
                <a href="/L3" className="btn btn-outline-primary mt-100">
                  See List
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">M1</h5>
              <div className="col text-center">
                <a href="/M1" className="btn btn-outline-primary mt-100">
                  See List
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">M2</h5>
              <div className="col text-center">
                <a href="/M2" className="btn btn-outline-primary mt-100">
                  See List
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderS;
