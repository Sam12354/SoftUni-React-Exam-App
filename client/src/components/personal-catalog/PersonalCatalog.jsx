export default function PersonalCatalog() {
    return (
        <section className="page-section personal-catalog">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">My Products</h2>
                    <h3 className="section-subheading text-muted">Manage your uploaded products.</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <img className="img-fluid" src="/images/portfolio/1.jpg" alt="Product 1" />
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Product 1</div>
                                <div className="portfolio-caption-subheading text-muted">Category: Illustration</div>
                                <button className="btn btn-primary btn-sm mt-2">Edit</button>
                                <button className="btn btn-danger btn-sm mt-2 ms-2">Delete</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <img className="img-fluid" src="/images/portfolio/2.jpg" alt="Product 2" />
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Product 2</div>
                                <div className="portfolio-caption-subheading text-muted">Category: Graphic Design</div>
                                <button className="btn btn-primary btn-sm mt-2">Edit</button>
                                <button className="btn btn-danger btn-sm mt-2 ms-2">Delete</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <img className="img-fluid" src="/images/portfolio/3.jpg" alt="Product 3" />
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Product 3</div>
                                <div className="portfolio-caption-subheading text-muted">Category: Photography</div>
                                <button className="btn btn-primary btn-sm mt-2">Edit</button>
                                <button className="btn btn-danger btn-sm mt-2 ms-2">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

