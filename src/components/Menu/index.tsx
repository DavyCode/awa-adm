import Link from "next/link";
import clsx from "clsx";

interface IProps {
  data: any;
  ActiveMenu: string;
}

const Menu: React.FC<IProps> = ({ data, ActiveMenu }) => {
  const { label, href } = data;

  const labelChars = ActiveMenu.split("/");

  return (
    <Link
      href={`/${href}`}
      className="flex flex-col items-center text-sm text-white"
    >
      <span
        className={clsx("mb-1 font-normal whitespace-nowrap", {
          "!font-bold": labelChars[1] === href,
        })}
      >
        {label}
      </span>
      {labelChars[1] === href && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
        >
          <circle cx="4" cy="4" r="4" fill="white" />
        </svg>
      )}
    </Link>
  );
};

export default Menu;
