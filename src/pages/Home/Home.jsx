import Certifications from "../../components/Certifications/Certifications";
import Hero from "../../components/Hero/Hero";
import LandingPageAboutIntro from "../../components/LandingPageAboutIntro/LandingPageAboutIntro";
import Layout from "../../components/Layout/Layout";

const Home = () => {
  const headerText = "Start your journey on the right ";
  return (
    <Layout>
      <h1>Positive Pup</h1>
      <Hero
        header={
          <h2 className="hero__header">
            {headerText}
            <span className="hero__header-highlight">paw.</span>
          </h2>
        }
        subheaderText={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut orci diam malesuada pellentesque aenean sed ut egestas"
        }
        buttonText={"What We Offer"}
        link={"/services"}
      />
      <Certifications showText={false} />
      <LandingPageAboutIntro />
    </Layout>
  );
};

export default Home;
