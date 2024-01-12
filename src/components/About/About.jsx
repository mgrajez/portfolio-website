import "./About.css";
import computer from "./../../assets/computer.png";

function About() {
  return (
    <>
      <section className="about-section">
        <div className="about-title">
          <h1 className="title-text">About</h1>
        </div>
        <div className="about-description">
          <p className="description-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
            aperiam modi dolorum mollitia rem error. Similique, unde soluta
            ipsum sit repudiandae ut. Perferendis magnam atque omnis vero
            similique asperiores iste, amet totam beatae incidunt maxime animi
            optio, voluptatibus nihil! Veritatis excepturi vel animi tempore?
            Quaerat quo cumque facere corrupti nisi magnam officia incidunt iste
            voluptatem ullam asperiores sapiente eveniet ut exercitationem
            labore repellat, vero enim! Numquam, repellendus. In, mollitia!
            Assumenda quos optio blanditiis, voluptatum tempora porro iste
            repellendus! Repudiandae illum iusto aspernatur ducimus placeat
            architecto molestiae et delectus doloribus! Possimus doloribus totam
            quibusdam architecto provident pariatur voluptas aliquam facilis
            reprehenderit!
          </p>
        </div>
        <div className="tech-section">
          <img className="computer-image" src={computer} alt="" />
          <p className="tech-text">Technologies I am using:</p>
          <div className="tech-icons">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
