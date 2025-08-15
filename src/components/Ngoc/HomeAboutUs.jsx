import { Link } from "react-router-dom";

const imgStyles = {
  backgroundImage: `linear-gradient(rgba(60, 60, 60, 0.5), rgba(60, 60, 60, 0.5)),url(${process.env.PUBLIC_URL + "/img/Aboutus-SnowellBuilding.png"})`,
  minHeight: '400px',
  backgroundSize: 'cover',        // hoặc 'contain' nếu muốn toàn bộ ảnh lọt trong khung
  backgroundPosition: 'center',   // canh giữa ảnh
  backgroundRepeat: 'no-repeat',  // không lặp ảnh
  width: '100%',                  // chiếm toàn bộ chiều ngang container

}

function HomeAbout() {
  return (
    <div className="bg-light p-3 h-100 rounded shadow-sm" style={imgStyles}>
      
      <div
        style={{
          color: "white",
          display: "flex",
          flexDirection: "column",   // xếp h5 và p theo cột
          justifyContent: "center",  // canh giữa theo chiều dọc
          alignItems: "center",      // canh giữa theo chiều ngang
          minHeight: "433px",        // cùng chiều cao với background
          
        }}
      >
        <h5><strong>Introduction about Snowell Electric</strong></h5>
        <p>
          <strong>Snowell Electric</strong> as a modern household appliance brand offering smart, efficient, and elegant solutions for everyday living. We aim to bring the comfort of advances technology into every home.
          {/* See More */}
      <div className="mt-3">
        <Link to ="/Aboutus" className="text-white text-decoration-underline">See More....</Link>
      </div>
         
        </p>
      </div>

    </div>
  );
};

export default HomeAbout;
