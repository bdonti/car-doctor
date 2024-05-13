import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen my-4">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2 border-8 border-white"
          />
        </div>
        <div className="w-1/2 space-y-4">
          <p className="text-[#FF3811] text-[20px] font-bold">About us</p>
          <h1 className="text-[45px] font-bold">
            We are qualified & of experience in this field
          </h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="bg-[#FF3811] font-bold px-8 py-4 rounded-xl">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
