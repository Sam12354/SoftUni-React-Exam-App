export default function Sell() {
    return (
        <section className="page-section bg-light d-flex align-items-center justify-content-center vh-100"
        style={{ background: "url('/images/header-bg.jpg') center/cover no-repeat" }}>
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase" style={{ color: "#ffc800" }}>Sell</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="card shadow p-4 bg-white">
                            <form action="/sell" method="POST">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="title" name="title" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="brand" className="form-label">Brand</label>
                                    <input type="text" className="form-control" id="brand" name="brand" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="price" className="form-label">Price ($)</label>
                                    <input type="number" className="form-control" id="price" name="price" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="image" className="form-label">Image URL</label>
                                    <input type="text" className="form-control" id="image" name="image" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea className="form-control" id="description" name="description" required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Sell</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
