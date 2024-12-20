import { clsx } from "clsx";
interface IProps {
  type: string;
  label?: string;
  placeholder?: string;
  name: string;
  register?: any;
  icon?: JSX.Element;
  error?: any;
  additionalClassname?: any;
  value?: any;
  disabled?: boolean;
}

const InputField = ({
  type,
  placeholder,
  name,
  error,
  register,
  label,
  icon,
  additionalClassname,
  disabled = false,
}: IProps): JSX.Element => {
  return (
    <div className="">
      <div className="w-full">
        <span className="text-base text-[#333] font-medium">{label}</span>
        <div
          className={clsx({
            ["flex justify-between items-center border border-solid border-gray-200 focus:border-gray-200 focus:outline-none placeholder:text-color-100 rounded-md overflow-hidden mt-1"]:
              true,
            [additionalClassname]: !!additionalClassname,
          })}
        >
          {register ? (
            <input
              type={type}
              id={name}
              placeholder={placeholder}
              disabled={disabled}
              className="w-full h-10 px-4 focus:outline-0 shadow appearance-none leading-tight"
              {...register(name)}
            />
          ) : (
            <input
              type={type}
              id={name}
              placeholder={placeholder}
              disabled={disabled}
              className="w-full h-10 px-4 focus:outline-0 shadow appearance-none leading-tight"
            />
          )}
          {icon !== undefined ? (
            <span className="px-2" aria-label="Open">
              {icon}
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
      {error ? (
        <p className="flex items-center lowercase text-[#ED2E7E] text-xs">
          {error}
        </p>
      ) : null}
    </div>
  );
};

export default InputField;
