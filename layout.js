export const metadata = {
  title: "Blackforge — Luxury Edition",
  description: "Blackforge — Elite. Forged in gold.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-bfBlack text-white antialiased">{children}</body>
    </html>
  );
}
