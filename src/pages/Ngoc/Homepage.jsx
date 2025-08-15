
import HomeBanner from "../../components/Ngoc/HomeBanner";
import HomeProductList from "../../components/Ngoc/HomeProductList";
import HomeNewsletter from "../../components/Ngoc/HomeNewsletter";
import HomeAbout from "../../components/Ngoc/HomeAboutUs";
import HomeNews from "../../components/Ngoc/HomeNews";
import BestSeller from "../../components/Ngoc/BestSeller";

function Homepage() {
    return (
        <div>
            <div className="Maincontent">
                <div>
                    <HomeBanner />
                </div>
                <section className="container my-5">
                    <h4 className="mb-4">Category</h4>
                    <HomeProductList />
                </section>

                <section className="container my-5">
                    <h4 className="mb-4">Best Seller</h4>
                    <BestSeller />
                </section>

                <section className="container my-5">
                    <div className="row gy-4">
                        <div className="col-lg-6 col-md-12">
                            <h4>About Snowell Electric</h4>
                            <div><HomeAbout /></div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <h4>Hot news and blogs</h4>
                            <HomeNews />
                        </div>
                    </div>
                </section>

                <section className="container my-5">
                    <h4 className="mb-4">Newsletter</h4>
                    <HomeNewsletter />
                </section>
            </div>
        </div>

    );
}
export default Homepage;