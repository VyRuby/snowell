export default function Aboutus() {
    return (
        <div>
            {/* About us */}
            <div className="container my-5">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h3>About Snowell Electric</h3>
                        <p> 
                            <strong>Snowell Electric</strong> is a trusted name in the world of home and commercial electrical appliances, dedicated to delivering innovative, and reliable solutions for modern living. With a passion for enhancing comfort and convenience, we provide a wide range of products—from air purifiers and fans to advanced home cleaning systems—that blend cutting-edge technology with sleek, user-friendly designs.

Rooted in quality craftsmanship and customer satisfaction, Snowell Electric stands as a symbol of reliability, offering products that not only perform exceptionally but also contribute to a sustainable future.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img
                            src={process.env.PUBLIC_URL + "/img/Aboutus-SnowellBuilding.png"}
                            alt="Snowell Building"
                            className="img-fluid w-75" />
                    </div>
                </div>
            </div>
            {/* Vision and mission */}
            <div className="container my-4">
                <h4>Our Vision</h4>
                <p>
                    To become a global leader in innovative electrical appliances, setting the standard for quality, sustainability, and design excellence—empowering households and businesses to live smarter, cleaner, and more efficiently.
                </p>
                <h4>Our Mission</h4>
                <p>
                    <ul>
                        <li>  Innovate with Purpose: Continuously develop advanced products that improve everyday living. </li>
                        <li>
                            Deliver Excellence: Uphold the highest standards in quality, safety, and customer service.
                        </li>
                        <li>
                            Inspire Trust: Build long-lasting relationships with customers through reliability and integrity.
                        </li>
                    </ul>
                </p>
            </div>
            {/* team section */}
            <div className="container my-5">
                <h4 className="mb-4">Meet Our Web Team</h4>
                <div className="row">
                    <div className="col-12 col-md-6 mb-4">
                        <div className="card h-100 text-center">
                            <img src="" className="card-img-top" alt="Nguyen Hong Ngoc" />
                            <div className="card-body">
                                <h5 className="card-title">Nguyen Hong Ngoc</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mb-4">
                        <div className="card h-100 text-center">
                            <img src="" className="card-img-top" alt="Nguyen Huu Tri" />
                            <div className="card-body">
                                <h5 className="card-title">Nguyen Huu Tri</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}