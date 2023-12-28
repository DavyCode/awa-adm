import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import DatePicker from "../DatePicker";

interface OptionsProps {
  label: string;
  value: string;
  icon?: JSX.Element;
  arrowIcon?: JSX.Element;
}

interface DropdownProps {
  options: OptionsProps[];
  name?: string;
  onSelect: (selectedOption: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, name, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <div className="relative inline-flex w-full rounded-md bg-primary">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex justify-between w-fit px-4 py-[10px] rounded-md px-4 py-2 text-sm font-medium text-white bg-[#386138]"
          >
            <div className="flex items-center">{selectedOption || name}</div>
            <ChevronDownIcon className="h-5 w-5 ml-2 text-gray-300" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute mt-2 w-full rounded-md bg-[#386138] ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => handleOptionClick(option.value)}
                className="p-2 flex justify-between items-center space-x-2 text-xs text-white w-full cursor-pointer"
              >
                {option.icon && <span>{option.icon}</span>}
                <span>{option.label}</span>
                {option.icon && <span>{option.arrowIcon}</span>}
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedOption === "Custom date" && (
        <div className="object-right absolute mt-2 right-0">
          <DatePicker />
        </div>
      )}
    </div>
  );
};

export default Dropdown;
