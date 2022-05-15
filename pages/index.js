import Header from "../components/Header";
import Services from "../components/Services";
import Software from "../components/Software";
import Mobile from "../components/mobile";
import DigitalMedia from "../components/media";
import Team from "../components/team";

export default function Home() {
  return (
    <div className="Home">
      <Header />
      <Services />
      <Software />
      <Mobile />
      <DigitalMedia />
      <Team />
    </div>
  );
}
