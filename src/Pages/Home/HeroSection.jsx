import heroimage from "../../img/adarsh.jpg";
export default function HeroSection() {
  const openPDF = () => {
    window.open("https://adarsh0719.github.io/adarsh-portfolio/img/RESUME-3.pdf", "_blank"); // Replace with the actual PDF path
  };
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, this Adarsh</p>
          <h1 className="section-intro">Im
            <span style={{color:' #FF6666'}}> Developer</span>
</h1>
          <p className="hero--section-description">
            
            <br />
          </p>
        </div>
        <div className="section-description">I am a passionate Full-Stack Web Developer with expertise in building modern, responsive, and scalable web applications. With a strong foundation in frontend and backend technologies,
           I specialize in creating seamless user experiences and efficient system architectures.</div>
        <button 
        onClick={openPDF} 
        className="btn-pink"
      >
        Resume
      </button>      </div>
      <div className="hero--section--img">
        <img src= {heroimage} className="heroimage" alt="Hero Section" />
      </div>
    </section>
  );
}
