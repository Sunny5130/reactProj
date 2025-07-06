function Bootstrap() {
  return (
    <>
      <div className="container mt-4" >
        <h2 className="text-center mb-4">My Bootstrap Cards</h2>
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-4 mb-3">
            <div className="card">
              <img
                src="https://placehold.co/300x200"
                className="card-img-top"
                alt="Image 1"
              />
              <div className="card-body">
                <h5 className="card-title">Card Title 1</h5>
                <p className="card-text">Some description for card 1.</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
<br /><br /><hr />
          {/* Card 2 */}
          <div className="col-md-4 mb-3">
            <div className="card">
              <img
                src="https://placehold.co/300x200"
                className="card-img-top"
                alt="Image 2"
              />
              <div className="card-body">
                <h5 className="card-title">Card Title 2</h5>
                <p className="card-text">Some description for card 2.</p>
                <a href="#" className="btn btn-success">
                  Learn More
                </a>
              </div>
            </div>
          </div>
<br /><br /><hr />
          {/* Card 3 */}
          <div className="col-md-4 mb-3">
            <div className="card">
              <img
                src="https://placehold.co/300x200"
                className="card-img-top"
                alt="Image 3"
              />
              <div className="card-body">
                <h5 className="card-title">Card Title 3</h5>
                <p className="card-text">Some description for card 3.</p>
                <a href="#" className="btn btn-warning">
                  Details
                </a>
              </div>
            </div>
          </div>
        </div>
        <br /><br /><hr />
<button type="button" className="btn btn-primary">Primary</button>
<button type="button" className="btn btn-secondary">Secondary</button>
<button type="button" className="btn btn-success">Success</button>
<button type="button" className="btn btn-danger">Danger</button>
<button type="button" className="btn btn-warning">Warning</button>
<button type="button" className="btn btn-info">Info</button>
<button type="button" className="btn btn-light">Light</button>
<button type="button" className="btn btn-dark">Dark</button>
<button type="button" className="btn btn-link">Link</button>      </div>
    </>
  );
}

export default Bootstrap;
