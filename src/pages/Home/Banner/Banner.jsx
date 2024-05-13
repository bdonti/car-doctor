import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full my-5 h-[550px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-xl" />
        <div className="absolute h-full -left-1 flex items-center right-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl">
          <div className="space-y-7 text-white w-1/3 px-10 py-10">
            <h1 className="text-5xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p className="font-medium w-[450px]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-6">
              <button className="btn bg-red-600 font-bold">
                Discover More
              </button>
              <button className="btn btn-outline btn-secondary">
                Discover More
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-xl" />
        <div className="absolute h-full -left-1 flex items-center right-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl">
          <div className="space-y-7 text-white w-1/3 px-10 py-10">
            <h1 className="text-5xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p className="font-medium w-[450px]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-6">
              <button className="btn bg-red-600 font-bold">
                Discover More
              </button>
              <button className="btn btn-outline btn-secondary">
                Discover More
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-xl" />
        <div className="absolute h-full -left-1 flex items-center right-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl">
          <div className="space-y-7 text-white w-1/3 px-10 py-10">
            <h1 className="text-5xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p className="font-medium w-[450px]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-6">
              <button className="btn bg-red-600 font-bold">
                Discover More
              </button>
              <button className="btn btn-outline btn-secondary">
                Discover More
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-xl" />
        <div className="absolute h-full -left-1 flex items-center right-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl">
          <div className="space-y-7 text-white w-1/3 px-10 py-10">
            <h1 className="text-5xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p className="font-medium w-[450px]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-6">
              <button className="btn bg-red-600 font-bold">
                Discover More
              </button>
              <button className="btn btn-outline btn-secondary">
                Discover More
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={img5} className="w-full rounded-xl" />
        <div className="absolute h-full -left-1 flex items-center right-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl">
          <div className="space-y-7 text-white w-1/3 px-10 py-10">
            <h1 className="text-5xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p className="font-medium w-[450px]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-6">
              <button className="btn bg-red-600 font-bold">
                Discover More
              </button>
              <button className="btn btn-outline btn-secondary">
                Discover More
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={img6} className="w-full rounded-xl" />
        <div className="absolute h-full -left-1 flex items-center right-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl">
          <div className="space-y-7 text-white w-1/3 px-10 py-10">
            <h1 className="text-5xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p className="font-medium w-[450px]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-6">
              <button className="btn bg-red-600 font-bold">
                Discover More
              </button>
              <button className="btn btn-outline btn-secondary">
                Discover More
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
