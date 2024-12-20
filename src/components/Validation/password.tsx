import ValidatedIcon from "@/assets/icons/ValidatedIcon";

interface ValidatedIconProps {
  isValid?: boolean;
  message?: any;
}
const PasswordValidation: React.FC<ValidatedIconProps> = ({
  isValid = true,
  message,
}) => {
  return (
    <ul className="flex flex-col gap-2 mt-2">
      <li className="flex items-center gap-2">
        <ValidatedIcon stroke={isValid ? "#3D663D" : ""} />
        <span className={isValid ? "text-[#3D663D]" : ""}>
          At least one Lowercase
        </span>
      </li>
      <li className="flex items-center gap-2">
        <ValidatedIcon stroke={isValid ? "#3D663D" : ""} />
        <span className={isValid ? "text-[#3D663D]" : ""}>
          At least one Uppercase
        </span>
      </li>
      <li className="flex items-center gap-2">
        <ValidatedIcon stroke={isValid ? "#3D663D" : ""} />
        <span>At least one number</span>
      </li>
      <li className="flex items-center gap-2">
        <ValidatedIcon stroke={isValid ? "#3D663D" : ""} />
        <span>At least one special number</span>
      </li>
    </ul>
  );
};

export default PasswordValidation;
