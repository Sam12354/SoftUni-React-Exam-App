export default function Details() {
    return (
        <>
            <section className="details-section d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="details-content text-center d-flex flex-column align-items-center">
                                <h2 className="text-uppercase">Project Name</h2>
                                <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                <img className="img-fluid d-block mx-auto" src="images/portfolio/1.jpg" alt="Project" />
                                <p>
                                    Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia 
                                    expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!
                                </p>
                                <ul className="list-inline">
                                    <li><strong>Client:</strong> Threads</li>
                                    <li><strong>Category:</strong> Illustration</li>
                                </ul>
                                <button className="btn btn-primary btn-xl text-uppercase mt-3" type="button">
                                    <i className="fas fa-arrow-left me-1"></i> Back to Catalog
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
