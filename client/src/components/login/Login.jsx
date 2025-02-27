export default function Login() {
    return (
        <section className="page-section bg-light d-flex align-items-center justify-content-center vh-100"
        style={{ background: "url('/images/header-bg.jpg') center/cover no-repeat" }}>
            <div className="container">
                <div className="text-center">
                <h2 className="section-heading text-uppercase" style={{ color: "#ffc800" }}>Login</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="card shadow p-4 bg-white">
                            <form action="/login" method="POST">
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input type="email" className="form-control" id="email" name="email" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" name="password" required />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Login</button>
                                <p className="text-center mt-3">Don't have an account? <a href="#register">Register here</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
