interface ResetPasswordProps {
  label: string;
  name: string;
  value: string;
}

interface NavMenuProps {
  label: string;
  href: string;
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
