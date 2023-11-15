import { api } from "~/utils/api";
import { useRouter } from "next/router";

type NavbarProps = {
  plain?: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ plain = false }) => {
  const router = useRouter();

  return (
    <div className="sticky top-0 z-50 bg-slate-800  text-white">
      <div className="container ">
        <div className="flex items-end justify-between gap-20  py-[25px]">
          <p
            className="cursor-pointer font-serif text-lg"
            onClick={() => router.push("/")}
          >
            {/* Independent FAIR Marking Agency */}
            Independent FAIR Rating Agency
          </p>

          <div className="flex gap-[40px] font-sans text-white">
            <p
              className="cursor-pointer hover:underline "
              onClick={() => router.push("/ranking")}
            >
              Dataset Rankings
            </p>
            <p
              className="cursor-pointer hover:underline"
              onClick={() => router.push("/about")}
            >
              About Us
            </p>

            <p
              className="cursor-pointer hover:underline"
              onClick={() => router.push("/contact")}
            >
              Contact Us
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
