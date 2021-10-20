import { RiGithubFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className={`container bg-gray-700 text-xl py-5 text-white lg:mx-auto lg:w-1/2`}>
      <span className={`flex justify-center`}>Made by Grzegorz Niemas</span>
      <a href="https://github.com/Brodway1">
        <RiGithubFill size={"2em"} className={`mx-auto my-5`}/>
      </a>
    </div>
  );
};

export default Footer;
