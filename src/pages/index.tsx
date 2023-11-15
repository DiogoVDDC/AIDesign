import Head from "next/head";
import Link from "next/link";
import Navbar from "~/components/Navbar";

import { api } from "~/utils/api";
import { useRouter } from "next/router";

const MainCTA = () => {
  return (
    <>
      <div className="container pb-[70px] text-center">
        <p className="mb-[30px]  font-serif text-5xl">
          The easy way to make your data <br></br>FAIR compliant.
        </p>
        <p className="mb-[50px] text-lg text-slate-500">
          We help you make your data fair compliant, give advice on best
          <br></br> practices, and issue FAIR certification.
        </p>
        <div className="w-100 flex justify-center gap-6">
          <button className="btn btn-primary w-[300px]">
            Get your FAIR rating now
          </button>
          <button className="btn btn-primary w-[300px]">
            Get advice on FAIR compliance
          </button>
          {/* <button className="btn btn-primary">See our data rankings</button> */}
        </div>
      </div>
    </>
  );
};

const FAIRRankingCatalog = () => {
  const router = useRouter();

  return (
    <div className="container pb-[120px]">
      <div className="flex items-center">
        <div className="me-[150px] text-left">
          <p className="mb-[20px] font-serif text-3xl">
            The FAIR Ranking Catalog
          </p>
          <p>
            The dataset below are ranked according to their FAIR score.{" "}
            <br></br> The dataset ranked are public dataset ranked by our
            experts.
          </p>
          <button
            className="btn btn-primary mt-6"
            onClick={() => router.push("/ranking")}
          >
            View entire catalog
          </button>
        </div>

        <div className="max-w-[800px] flex-grow">
          <table className="table  text-lg">
            {/* head */}
            <thead className="text-lg">
              <tr>
                <th></th>
                <th>Dataset Name</th>
                <th>FAIR Score</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>
                  <div
                    className="radial-progress text-success"
                    style={{
                      ["--value" as any]: "92",
                      ["--size" as any]: "60px",
                      ["--thickness" as any]: "3px",
                    }}
                  >
                    9.2
                  </div>
                </td>
              </tr>

              {/* row 3 */}
              <tr>
                <th>2</th>
                <td>Brice Swyre</td>
                <td>
                  <div
                    className="radial-progress text-warning"
                    style={{
                      ["--value" as any]: "56",
                      ["--size" as any]: "60px",
                      ["--thickness" as any]: "3px",
                    }}
                  >
                    5.6
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const PostCard = () => {
  return (
    <div className="flex max-w-[400px] cursor-pointer gap-10 rounded-2xl bg-slate-100 p-[50px] transition-all hover:scale-105 hover:shadow-lg">
      <div>
        <div className="mb-5 h-[200px] rounded-xl bg-slate-400"></div>
        <p className="mb-4 text-xl">What is FAIR?</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        </p>
      </div>
    </div>
  );
};

const BlogPost = () => {
  return (
    <div className="container">
      <p className="mb-[80px] text-center font-serif text-3xl">
        Post about FAIR compliance
      </p>
      <div className="flex gap-20">
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="border-top-[1px] py-[80px]">
      <div className="container ">
        <div className="flex justify-between">
          <div className="flex flex-col gap-10"></div>
        </div>
      </div>
    </div>
  );
};

const OurProcess = () => {
  return (
    <div className="container">
      <p className="mb-[20px] mt-[120px] font-serif text-3xl">
        How we evaluate your dataset
      </p>
      <div className="flex flex-col gap-10">
        <div className="flex items-center">
          <div className="relative h-[40px] w-[40px] rounded-full bg-primary">
            <p className="absolute left-[16px] top-[8px] justify-center text-white ">
              1
            </p>
          </div>
          <p className="ms-5">
            Upload your data and fill in form and pay for FAIR compliance
            evaluation
          </p>
        </div>
        <div className="flex items-center">
          <div className="relative h-[40px] w-[40px] rounded-full bg-primary">
            <p className="absolute left-[16px] top-[8px] justify-center text-white ">
              2
            </p>
          </div>
          <p className="ms-5">Information gets reviewed by our experts</p>
        </div>
        <div className="flex items-center">
          <div className="relative h-[40px] w-[40px] rounded-full bg-primary">
            <p className="absolute left-[16px] top-[8px] justify-center text-white ">
              3
            </p>
          </div>
          <p className="ms-5">You receive your FAIR score</p>
        </div>
        <div className="flex items-center">
          <div className="relative h-[40px] w-[40px] rounded-full bg-primary">
            <p className="absolute left-[16px] top-[8px] justify-center text-white ">
              4
            </p>
          </div>
          <p className="ms-5">Upload your data and fill in form</p>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  // const { data, isLoading } = api.post.getAll.useQuery();
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Independent FAIR rating agency</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative flex flex-col gap-[180px]">
        <Navbar />
        <MainCTA />
        <FAIRRankingCatalog />
        <BlogPost />
        <OurProcess />
        <Footer />
      </div>
    </>
  );
}
