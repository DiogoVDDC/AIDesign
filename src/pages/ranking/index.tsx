import React from "react";
import Navbar from "~/components/Navbar";
import { useForm } from "react-hook-form";
import { api } from "~/utils/api";
import { useRouter } from "next/router";

interface RankingDataItem {
  doi: string;
  title: string;
  description: string;
  fair_score: number;
}

const ranking_data: RankingDataItem[] = [
  {
    doi: "10.5281/zenodo.5527086",
    title: "COVID-19 Open Research Dataset Challenge (CORD-19)",
    description:
      "CORD-19 is a resource of over 500,000 scholarly articles, including over 150,000 with full text, about COVID-19, SARS-CoV-2, and related coronaviruses. This freely available dataset is provided to the global research community to apply recent advances in natural language processing and other AI techniques to generate new insights in support of the ongoing fight against this infectious disease. There is a growing urgency for these approaches because of the rapid acceleration in new coronavirus literature, making it difficult for the medical research community to keep up.",
    fair_score: 0.8,
  },
  {
    doi: "10.5281/zenodo.5527086",
    title: "COVID-19 Open Research Dataset Challenge (CORD-19)",
    description:
      "CORD-19 is a resource of over 500,000 scholarly articles, including over 150,000 with full text, about COVID-19, SARS-CoV-2, and related coronaviruses. This freely available dataset is provided to the global research community to apply recent advances in natural language processing and other AI techniques to generate new insights in support of the ongoing fight against this infectious disease. There is a growing urgency for these approaches because of the rapid acceleration in new coronavirus literature, making it difficult for the medical research community to keep up.",
    fair_score: 0.8,
  },
];

const Ranking = () => {
  const ctx = api.useContext();
  const router = useRouter();
  return (
    <div>
      <Navbar />
      <div className="container py-[80px]">
        <p className="mb-[50px]  font-serif text-3xl ">Dataset FAIR ranking</p>

        <div className="w-100">
          <div className="my-3 grid grid-cols-3 items-center gap-4 pe-5">
            <p className="col-span-2">Name:</p>
            <p>Fair Score:</p>
          </div>
        </div>

        {ranking_data.map((data, index) => {
          return (
            <details className=" collapse-arrow collapse rounded-none border-t-[1px] border-gray-300 font-normal">
              <summary className="collapse-title py-7 pe-5 ps-0 text-xl font-medium">
                <div className="grid grid-cols-3 items-center gap-4">
                  <p className="col-span-2 text-base">
                    {index + 1}- {data.title}
                  </p>
                  {/* <p className="text-lg">{String(data.fair_score * 10).}</p> */}
                  <div
                    className="radial-progress text-lg text-success"
                    style={{
                      ["--value" as any]: `${data.fair_score * 100}`,
                      ["--size" as any]: "50px",
                      ["--thickness" as any]: "3px",
                    }}
                  >
                    9.2
                  </div>
                </div>
              </summary>
              <div className="collapse-content">
                <div className="flex gap-[50px]">
                  <div>
                    <p className="mb-1 text-sm text-slate-400 underline">
                      DOI:{" "}
                    </p>
                    <p className="cursor-pointer underline">{data.doi}</p>
                  </div>
                  <div>
                    <p className="mb-1 text-sm text-slate-400 underline">
                      Description:{" "}
                    </p>
                    <p>{data.description}</p>
                  </div>
                </div>
              </div>
            </details>
          );
        })}
      </div>
    </div>
  );
};

export default Ranking;
