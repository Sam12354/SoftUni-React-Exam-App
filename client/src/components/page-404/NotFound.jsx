import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <section className="d-flex align-items-center justify-content-center vh-100 text-center">
            <div>
                <h1 className="display-1 text-danger">404</h1>
                <h2 className="mb-4">Page Not Found</h2>
                <p className="mb-4">The page you are looking for does not exist.</p>
                <Link to="/" className="btn btn-primary">Go Home</Link>
            </div>
        </section>
    );
}