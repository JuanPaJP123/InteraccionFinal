import "../styles/banner.css"

export default function Banner() {
    function handleClick(index) {
      const banners = document.querySelectorAll(".banner-item");
      banners.forEach((banner, i) => {
        if (i === index) {
          banner.classList.add("active");
        } else {
          banner.classList.remove("active");
        }
      });
    }
  
    return (
      <>
        <div className="banner mx-12 md:columns-2">
          
          <div className="relative banner-item">
            <img
              className="imagenesBanner w-full h-96 object-cover mb-3"
              src="https://image.freepik.com/vector-gratis/banner-ropa-mujer_1284-9334.jpg"
              alt=""
            />
            <div className="absolute inset-0 flex flex-col items-start justify-center mx-14 my-5">
                <span className="bg-orange-400 text-white text-xl rounded-md font-bold px-11 py-1 mb-4 uppercase">
                  Catalogo
                </span>
                <span className="text-white text-7xl font-bold mb-5">-20%</span>
                <span className="text-white text-3xl">Ropa</span>
            </div>
          </div>

          <div className="relative banner-item">
            <img
              className="imagenesBanner w-full h-96 object-cover mb-3"
              src="https://th.bing.com/th/id/OIP.ocm0K03EnA6uVKBXM1opNQHaE7?rs=1&pid=ImgDetMain"
              alt=""
            />
           <div className="absolute inset-0 flex flex-col items-start justify-center mx-14 my-5">
                <span className="bg-orange-400 text-white text-xl rounded-md font-bold px-11 py-1 mb-4 uppercase">
                  Catalogo
                </span>
                <span className="text-white text-7xl font-bold mb-5">-20%</span>
                <span className="text-white text-3xl">Accesorios</span>
            </div>
          </div>
          <div className="relative banner-item">
            <img
              className="imagenesBanner w-full h-96 object-cover mb-3"
              src="https://th.bing.com/th/id/OIP.vQEBmLL01B3PGNljeklfPAHaEL?rs=1&pid=ImgDetMain"
              alt=""
            />
            <div className="absolute inset-0 flex flex-col items-start justify-center mx-14 my-5 mb-1">
            
            <span className="text-white text-6xl font-bold my-5">Joyeria</span>
  
                <span className="bg-orange-400 text-white text-xl rounded-md font-bold px-11 py-1 mb-4 uppercase">
                  Catalogo
                </span>
            </div>
          </div>
          <div className="relative banner-item">
            <img
              className="imagenesBanner w-full h-96 object-cover mb-3"
              src="https://4.bp.blogspot.com/-TBIA_Eq-uaM/VNe-S6ZjYwI/AAAAAAAAABI/AhT4b93hIik/s1600/6067.jpg"
              alt=""
            />
             <div className="absolute inset-0 flex flex-col items-start justify-center mx-14 my-5 mb-1">
            
            <span className="text-white text-6xl font-bold my-5">Electronica</span>
  
                <span className="bg-orange-400 text-white text-xl rounded-md font-bold px-11 py-1 mb-4 uppercase">
                  Catalogo
                </span>
            </div>
          </div>
        </div>
      </>
    );
  }