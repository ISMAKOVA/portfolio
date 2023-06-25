import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import { skills } from "@/data/config";
export default function Home() {
  return (
    <Layout>
      {/* banner part */}
      <Banner />
      {/* skills */}
      {/*         <div className="relative flex overflow-x-hidden">
          <div className="py-12 animate-marquee whitespace-nowrap ">
            {skills.map((skill) => (
              <a
                href={skill.link}
                className="py-2.5 px-8 mx-2 rounded-large border border-white shadow-md backdrop-blur-sm bg-white/30 drop-shadow-lg"
              >
                {skill.caption}
              </a>
            ))}
          </div>

          <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap ">
            {skills.map((skill) => (
              <a
                href={skill.link}
                className="py-2.5 px-8 mx-2 rounded-large border border-white shadow-md backdrop-blur-sm bg-white/30 drop-shadow-lg"
              >
                {skill.caption}
              </a>
            ))}
          </div>
        
        </div>

        <div className=" w-60 h-60 text-neutral-200 text-9xl">
            skills
          </div> */}
      {/* about me */}
      {/* work */}
      {/* contact */}
    </Layout>
  );
}
