import { useEffect, useRef, useState } from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import SlideDown from '../components/slideDown';
import SlideUp from '../components/SlideUp';
import Blink from '../components/Blink';
import Parallax from '../components/Parallax';
import Loader from '../components/Loader';
import Card from '../components/Card'

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const navbarRef = useRef(null);

  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // durasi loading 1.5 detik
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    function handleScroll() {
      const nav = navbarRef.current?.getBoundingClientRect();
      if (!nav) return;

      let overlapFound = false;

      sectionRefs.forEach((ref) => {
        const sec = ref.current?.getBoundingClientRect();
        if (!sec) return;

        const isOverlap =
          sec.top <= nav.bottom && sec.bottom >= nav.top;

        if (isOverlap) overlapFound = true;
      });

      setIsDark(overlapFound);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {loading}
      <div className="w-full h-fit flex flex-col bg-[#EDEDEB]">
      <header className="fixed w-full h-fit flex flex-col z-15">
        <nav className="w-full h-fit px-6 md:px-12 py-2 md:py-6 flex">
          <div ref={navbarRef} className={`w-full h-fit flex items-center flex-row font-semibold transition-all duration-300
          ${isDark ? "text-white" : "text-black"}`}>
            <a href="/" className="w-full leading-[140%] text-base md:text-lg">Veste</a>
            <ul className="w-fit h-fit text-sm md:text-base flex flex-row text-[#757575] gap-x-8">
              <li><a href="/" className={`${isDark ? "text-white" : "text-black"} font-medium`}>Home</a></li>
              <li><a href="/" className="">About</a></li>
              <li><a href="/" className="">News</a></li>
              <li><a href="/" className="">Galery</a></li>
            </ul>
            <div className="w-full flex justify-end">
              <a href="/" className={`w-fit h-fit text-[10px] md:text-sm py-1 md:py-2 px-2 md:px-4
                ${isDark ? "text-black bg-white" : "text-white bg-black"}`}>Contact Us</a>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <section className="w-full h-fit pt-12 md:pt-[86px]">
          <div className="relative w-full h-fit bg-grid-pattern flex-1 px-6 md:px-12 pt-6 pb-12 overflow-hidden">
            <div className="w-full h-[780px] md:h-[630px] flex flex-col items-end">
              <div className="w-full flex-1 top-0 flex justify-center translate-y-[-16px] z-1">
                <SlideDown delayNum={0.8}>
                  <h1 className="text-[clamp(40px,15.4vw,220px)] leading-[83%] tracking-[-2px] w-max text-right font-semibold">
                    <span className="block">FALL/WINTER</span>
                    <span className="block">2025</span>
                  </h1>
                </SlideDown>
              </div>
              <div className="w-full h-full md:h-72 flex flex-col md:flex-row justify-between gap-12 md:gap-0 z-10">
                <div className="w-full Smd:w-max h-full">
                  <div className="w-full md:w-[480px] h-full flex flex-col gap-12 md:gap-0 md:justify-between">
                    <SlideUp delayNum={0.8}>
                      <div className="w-full md:w-fit h-fit flex flex-row justify-between">
                        <p className="w-42 md:w-72 h-fit text-sm md:text-base font-medium leading-[140%] text-[#757575]">
                          BLACKPINK member, solo artist and actor Jennie has reunited with Chanel, starring in the brand's new Fall/Winter 2025-26 pre-collection campaign.
                        </p>
                        <SlideDown delayNum={0.8}>
                          <p className="leading-[140%] block md:hidden text-lg font-semibold tracking-[0px]">ft. Jennie</p>
                        </SlideDown>
                      </div>
                    </SlideUp>
                    <SlideUp delayNum={0.8}>
                      <h2 className="w-42 md:w-64 h-fit text-[#757575] text-3xl md:text-5xl font-semibold">
                        CHANEL FOR FW25
                      </h2>
                    </SlideUp>
                  </div>
                </div>
                <div className="w-fit h-full flex flex-col text-right justify-between">
                  <SlideDown delayNum={0.8}>
                    <p className="leading-[140%] hidden md:block text-lg font-semibold tracking-[0px]">ft. Jennie</p>
                  </SlideDown>
                  <a href="w-fit h-fit flex flex-row">
                    <SlideUp delayNum={0.8}>
                      <div className="w-full md:w-48 h-96 md:h-32 bg-gray-300 overflow-hidden">
                        <img src="/public/images/herocard.png"
                        className="w-full h-fit" alt="herocard" />
                      </div>
                      <div className="w-full h-fit pt-2 md:pt-3 text-sm md:text-base font-medium flex flex-row justify-between items-center text-black">
                        <p className="leading-[140%]">View More</p>
                        <FontAwesomeIcon icon={faArrowUpLong}  className="rotate-45 text-sm" />
                      </div>
                    </SlideUp>
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute w-full flex-1 top-0 flex justify-center translate-y-[46px] md:translate-y-[32px] translate-x-[-44px] z-1">
              <img src="/public/images/hero.png"
              className="absolute top-0 z-5 w-[1000px]" alt="" />
            </div>
          </div>
        </section>
        <section ref={sectionRefs[0]} className="w-full h-fit bg-black text-white p-6 md:p-12 flex flex-col lg:flex-row gap-6 lg:gap-12">
          <div className="w-full flex flex-col gap-10 md:gap-20">
            <h2 className="w-full lg:w-[640px] text-3xl md:text-5xl leading-[120%] font-semibold">
              <span className="block">THE SINGLE</span>
              <span className="block">MOST—DISCUSSED</span>
            </h2>
            <div className="w-full h-fit md:h-[640px] flex flex-col gap-8">
              <div className="w-full h-fit flex flex-row justify-between">
                <h3 className="w-48 md:w-64 h-fit leading-[110%] text-lg md:text-2xl font-semibold">
                  The Best Celebrity Halloween Costumes of 2025
                </h3>
                <p className="w-44 md:w-72 h-fit leading-[120%] md:leading-[140%] text-sm md:text-base font-normal tracking-[0px] text-justify">
                  As the calendar turns to October, the fashion world anticipates not just seasonal trends, but the annual spectacle of transformation. This year proved to be the most dramatic and utterly viral yet.
                </p>
              </div>
              <div className="w-full h-full overflow-hidden">
                <Blink delayNum={0.3}>
                  <img src="/public/images/section2.1.jpg"
                  className="w-full h-full md:translate-y-[-64px] object-cover" alt="" />
                </Blink>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-96 h-auto flex flex-col gap-12 lg:gap-0 lg:justify-between">
            <div className="w-full h-fit flex flex-col gap-4 md:gap-8">
              <div className="w-full h-96 md:h-64 overflow-hidden">
                <Blink delayNum={0.1}>
                  <img src="/public/images/section2.2.jpg"
                className="w-full h-full translate-y-[-64px] object-cover" alt="" />
                </Blink>
              </div>
                <p className="w-full lg:w-72 h-fit leading-[120%] md:leading-[140%] text-sm md:text-base font-normal tracking-[0px] text-justify">
                  The meticulous effort went far beyond simple party clothes; it was an exercise in method dressing and cultural commentary. Our comprehensive review breaks down the artistry behind the viral ensembles, evaluating the sheer impact these looks had on social media discourse. This is the definitive breakdown of the most inspired moments, confirming which stars truly mastered the fashion performance of the year.
                </p>
            </div>
            <button className="w-full py-2 text-black bg-white justify-center text-sm md:text-base font-medium 
            hover:bg-black hover:text-white border border-white duration-300 transition-all cursor-pointer">View More</button>
          </div>
        </section>
        <section className="w-full h-fit p-6 md:p-12 flex flex-col gap-4 md:gap-8">
          <div className="w-full h-fit flex flex-row items-center justify-between">
            <h4 className="text-base md:text-lg font-semibold">RECENT EDITORIAL UPDATES</h4>
            <button className="w-fit px-10 py-2 text-white bg-black justify-center text-sm md:text-base font-medium 
            hover:bg-transparent hover:text-black border border-black duration-300 transition-all cursor-pointer">View More</button>
          </div>
          <div className="w-full h-fit flex flex-col md:flex-row gap-6 md:gap-12">
            <div className="w-full h-auto flex flex-col gap-5 md:gap-10">
              <h3 className="w-full md:w-96 h-fit text-3xl md:text-5xl leading-[120%] font-semibold">
                <span className="block">WHAT THE NEW</span>
                <span className="block">LOOK IS</span>
              </h3>
              <a href="/" className="w-full h-[480px] md:h-[640px] flex flex-col gap-2 ms:gap-5">
                <div className="w-full h-full overflow-hidden">
                  <Blink delayNum={0.2}>
                    <img src="/public/images/card1.png"
                    className="w-full translate-y-[-104px] md:translate-y-[-104px]" alt="" />
                  </Blink>
                </div>
                <p className="text-sm mdLtext-base font-medium leading-[120%]">Thom Browne Takes Us to the Country This Winter</p>
              </a>
              <a href="/" className="w-full h-full flex flex-col gap-2 md:gap-5">
                <div className="w-full h-[480px] md:h-[414px] overflow-hidden">
                    <Blink delayNum={0.3}>
                      <img src="/public/images/card2.png"
                      className="w-full translate-y-[0px]" alt="" />
                    </Blink>
                </div>
                <p className="text-sm md:text-base font-medium leading-[120%]">
                  Aimé Leon Dore Is Back With Another FW25 Release
                </p>
              </a>
            </div>
            <div className="w-full h-full flex flex-col gap-5 md:gap-10">
              <a href="/" className="w-full h-fit flex flex-col gap-2 md:gap-5">
                <div className="w-full h-[480px] md:h-96 overflow-hidden">
                  <Blink delayNum={0.2}>
                    <img src="/public/images/card3.png"
                    className="w-full translate-y-[0px]" alt="" />
                  </Blink>
                </div>
                <p className="text-sm md:text-base font-medium leading-[120%]">
                  Adidas and CLOT by Edison Chen Drop Another Perfect Collaboration
                </p>
              </a>
              <a href="/" className="w-full h-fit flex flex-col gap-2 md:gap-5">
                <div className="w-full h-[480px] md:h-[768px] overflow-hidden">
                  <Blink delayNum={0.4}>
                    <img src="/public/images/card4.png"
                    className="w-full translate-y-[0px]" alt="" />
                  </Blink>
                </div>
                <p className="text-sm md:text-base font-medium leading-[120%]">
                  Get the Hawkins Look With This Wrangler and Stranger Things Collaboration
                </p>
              </a>
            </div>
          </div>
        </section>
        <section className="w-full h-fit p-6 md:p-12 flex flex-col md:flex-col gap-8 overflow-hidden">
          <div className="w-full h-fit flex flex-col md:flex-row gap-3 md:gap-6 md:gap-12">
            <div className="w-full h-full">
              <h4 className="w-96 h-fit text-3xl md:text-5xl leading-[120%] font-semibold">EXPLORE YOUR ESSENTIAL STYLE PILARS</h4>
            </div>
            <p className="w-full h-auto flex items-center text-sm md:text-base font-medium leading-[120%] text-[#757575] text-justify">
              We curate the essential updates and critical analyses across all facets of elevated living. Our editorial team tirelessly tracks every collection and cultural shift to ensure your perspective remains sharp and always ahead of the curve. Explore our definitive pillars to discover the most stringent curation and authoritative content.
            </p>
          </div>
          <div className="w-full h-fit flex flex-col md:flex-row gap-6 md:gap-12">
            <div className="w-full h-96 overflow-hidden md:overflow-visible">
              <Blink delayNum={0.1}>
                <img src="/public/images/hero4.png"
                className="w-full translate-y-[-40px] md:translate-y-[0px]" alt="" />
              </Blink>
            </div>
            <div className="w-full h-fit flex flex-col gap-6 md:gap-12">
              <div className="w-full h-[540px] md:h-[720px] flex flex-col justify-between">
                <div className="w-full h-fit flex flex-col">
                  <Blink delayNum={0.1}>
                    <Card header={"Culture"}>
                      A critical lens on the defining intersections of art, literature, architecture, and social dynamics. We explore the influential movements that underpin contemporary aesthetics and global thought.
                    </Card>
                  </Blink>
                  <Blink delayNum={0.1}>
                    <Card header={"Fashion"}>
                      Definitive analysis of significant trends, runway critiques, and essential styling insights that shape your modern wardrobe decisions.
                    </Card>
                  </Blink>
                  <Blink delayNum={0.1}>
                    <Card header={"Beauty"}>
                      Expert analysis of skincare science, sophisticated cosmetic artistry, and modern wellness rituals. Discover the essential routines and product critiques necessary for an uncompromising personal regimen.
                    </Card>
                  </Blink>
                  <Blink delayNum={0.1}>
                    <Card header={"Lifestyle"}>
                        Curated guides to refined living, bespoke interior design, and architectural marvels. Experience the most exclusive luxury travel destinations through a perspective of exacting taste.
                    </Card>
                  </Blink>
                  <Blink delayNum={0.1}>
                    <Card header={"People"}>
                        In-depth interviews and candid profiles featuring the visionaries, designers, and influential figures currently driving creative and social change. Understand the voices that matter now.                    </Card>
                  </Blink>
                </div>
                <button className="w-full py-2 text-white bg-black justify-center text-sm md:text-base font-medium 
                hover:bg-transparent hover:text-black border border-black duration-300 transition-all cursor-pointer">View More</button>
              </div>
            </div>
          </div>
        </section>
        <section ref={sectionRefs[1]} className="w-full h-fit bg-black text-white p-6 md:p-12 flex flex-col md:flex-row gap-12">
          <div className="w-full h-fit flex flex-col gap-12 md:gap-32">
            <h5 className="w-full text-3xl md:text-5xl leading-[120%] font-semibold">
              <span className="block">DISCOVER VESTE</span>
              <span className="block">ESSENCE</span>
            </h5>
            <div className="w-full h-fit flex flex-col gap-4 md:gap-8">
              <p className="w-full h-fit leading-[140%] text-sm md:text-base font-normal tracking-[0px] text-justify">
                  Veste is the premier digital platform dedicated to the critical analysis and definitive curation of high-end fashion and refined lifestyle. Our editorial team meticulously tracks cultural shifts and industry movements to provide sophisticated, authoritative insights. We serve as the essential guide for those who view style, culture, and aesthetics as an intellectual pursuit.
              </p>
              <div className="w-full h-fit flex flex-row gap-6 md:gap-12">
                <div className="w-full md:h-52 overflow-hidden">
                  <Blink delayNum={0.1}>
                    <img src="/public/images/hero5.2.jpg"
                    className="w-full h-full object-cover" alt="" />
                  </Blink>
                </div>
                <div className="w-full md:w-[420px] h-auto flex flex-col justify-between">
                  <h6 className="w-full h-fit leading-[110%] text-base md:text-xl font-semibold">
                    Delve deeper into the core principles of Veste Journalism
                  </h6>
                  <button className="w-full py-2 text-black bg-white justify-center text-sm md:text-base font-medium 
                  hover:bg-black hover:text-white border border-white duration-300 transition-all cursor-pointer">Learn More</button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[596px] flex overflow-hidden">
            <Blink delayNum={0.3}>
              <img src="/public/images/hero5.1.jpg"
              className="w-full object-cover" alt="" />
            </Blink>
          </div>
        </section>
        <section ref={sectionRefs[2]} className="w-full h-fit bg-black text-white p-6 md:p-12 flex items-end flex-col md:flex-row justify-between gap-6 md:gap-0">
          <h6 className="w-full md:w-[800px] text-3xl md:text-5xl leading-[120%] font-semibold">
              Connect with our definitive perspective on style and culture.
          </h6>
          <button className="w-fit h-fit px-10 py-2 text-black bg-white justify-center text-sm md:text-base font-medium 
          hover:bg-black hover:text-white border border-white duration-300 transition-all cursor-pointer">Learn More</button>
        </section>
        <div className="w-full h-[640px] flex">
          <img src="/public/images/hero5.3.jpg"
          className="w-full object-cover" alt="" />
        </div>
        <footer className="w-full h-fit bg-black text-white p-6 md:p-12 flex flex-col gap-10">
          <div className="w-full h-fit flex flex-col md:flex-row gap-12 md:gap-0 justify-between">
            <div className="w-full h-fit md:h-auto flex flex-col gap-6  md:gap-0 justify-between">
              <h6 className="text-3xl md:text-5xl leading-[120%] font-semibold">Veste</h6>
              <div className="w-fit h-fit flex flex-row text-base gap-4">
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faXTwitter} />
                <FontAwesomeIcon icon={faTiktok} />
              </div>
            </div>
            <div className="w-fit h-fit flex flex-col md:flex-row gap-10">
              <div className="w-40 h-fit flex flex-col gap-3 md:gap-5">
                <p className="text-base font-semibold">Career</p>
                <div className="w-full h-fit flex flex-col gap-2">
                  <p className="text-sm font-normal">Opportunities</p>
                  <p className="text-sm font-normal">Internships</p>
                  <p className="text-sm font-normal">Advertise with Veste</p>
                  <p className="text-sm font-normal">Press Inquiries</p>
                </div>
              </div>
              <div className="w-40 h-fit flex flex-col gap-3 md:gap-5">
                <p className="text-base font-semibold">Support</p>
                <div className="w-full h-fit flex flex-col gap-2">
                  <p className="text-sm font-normal">Contact Customer Service</p>
                  <p className="text-sm font-normal">FAQ</p>
                  <p className="text-sm font-normal">Subscriptions</p>
                  <p className="text-sm font-normal">Site Map</p>
                </div>
              </div>
              <div className="w-36 h-fit flex flex-col gap-3 md:gap-5">
                <p className="text-base font-semibold">Legal</p>
                <div className="w-full h-fit flex flex-col gap-2">
                  <p className="text-sm font-normal">Privacy Policy</p>
                  <p className="text-sm font-normal">Terms of Use</p>
                  <p className="text-sm font-normal">Services</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-white"></div>
          <p className="text-sm font-normal">© Copyrigth Alright Reserved 2025</p>
        </footer>
      </main>
    </div>
    </>
  )
}
