interface ResetPasswordProps {
  label: string;
  name: string;
  value: string;
}

interface NavMenuProps {
  label: string;
  href: string;
}

interface OptionsProps {
  label: string;
  value: string;
}

export const ResetPasswordOptions: ResetPasswordProps[] = [
  {
    label: "Phone number",
    name: "resetOption",
    value: "Phone number",
  },
  {
    label: "Email address",
    name: "resetOption",
    value: "Email address",
  },
];

export const NavBarMenu: NavMenuProps[] = [
  { label: "Dashboard", href: "dashboard" },
  { label: "Customers", href: "customers" },
  { label: "Transaction History", href: "transaction-history" },
  { label: "Upload Logs", href: "upload-logs" },
];

export const SortByOptions: OptionsProps[] = [
  { label: "Option 1", value: "Option 1" },
  { label: "Option 2", value: "Option 2" },
  { label: "Option 3", value: "Option 3" },
  { label: "Option 4", value: "Option 4" },
];
export const FilterByOptions: OptionsProps[] = [
  { label: "Filter 1", value: "Filter 1" },
  { label: "Option 2", value: "Option 2" },
  { label: "Option 3", value: "Option 3" },
  { label: "Option 4", value: "Option 4" },
];
