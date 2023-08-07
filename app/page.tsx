import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Skills />

      <div className="mt-56 h-[35em] px-56">
        <h1 className="text-4xl text-center font-poppins font-bold ">
          About me
        </h1>
        <div className="grid grid-cols-2 mt-12">
          <div className="w-[135em] h-[35em]">
            {/* <svg
              id="visual"
              viewBox="0 0 900 600"
              width="900"
              height="600"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
            >
              <g transform="translate(478.5976012578832 332.54455840427363)">
                <path
                  d="M101.2 -120.7C131.7 -70.7 157.4 -35.4 167 9.7C176.7 54.7 170.4 109.4 139.9 140.9C109.4 172.4 54.7 180.7 -4.2 184.9C-63.2 189.2 -126.3 189.3 -167.7 157.8C-209 126.3 -228.5 63.2 -228.4 0.1C-228.3 -62.9 -208.5 -125.9 -167.2 -175.9C-125.9 -225.9 -62.9 -262.9 -13.8 -249.1C35.4 -235.4 70.7 -170.7 101.2 -120.7"
                  fill="#BB004B"
                ></path>
              </g>
              <g transform="translate(445.3086955795221 254.40157952576917)">
                <path
                  d="M140.6 -138.1C172.2 -108.9 181.1 -54.4 185.5 4.4C189.8 63.2 189.7 126.3 158 174.2C126.3 222 63.2 254.5 -3.8 258.3C-70.7 262 -141.4 237.1 -166.4 189.3C-191.4 141.4 -170.7 70.7 -156.5 14.3C-142.2 -42.2 -134.4 -84.4 -109.4 -113.5C-84.4 -142.7 -42.2 -158.9 6.1 -165C54.4 -171.1 108.9 -167.2 140.6 -138.1"
                  fill="#BB004B"
                ></path>
              </g>
            </svg> */}
            photo
          </div>
          <div className="text-justify">
            <p className="mb-2">
              Since 2020, I’ve been crafting UIs with React, specializing in
              creating interfaces and solving business tasks.{" "}
            </p>
            <p className="mb-2">
              My experience spans 3 years of working on an NLP project for a
              university, 2 years of commercial web development of a BPM system,
              participation in the development of mobile applications, as well
              as developing products individually or with friends.
            </p>
            <p className="mb-2">
              There are so many things in the world that I want to try to
              master, so in addition to programming, I am fond of photography,
              video filming, design, and I also constantly do handicrafts.{" "}
            </p>
            <p className="">
              If you’re interested in collaborating or have any project ideas,
              you can{" "}
              <a className="pointer underline hover:decoration-teal-400">
                write
              </a>{" "}
              me.
            </p>
          </div>
        </div>
      </div>

      {/* about me */}
      {/* work */}
      {/* contact */}
    </Layout>
  );
}
