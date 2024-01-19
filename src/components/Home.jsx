import home from "../images/home.png";
import Navbar from "./navbar";

export default function Home() {
  return (
    <section>
      <img
        src={home}
        alt="Background Image"
        className="relative object-cover w-full h-screen"
      />
      <Navbar />
    </section>
  );
}
