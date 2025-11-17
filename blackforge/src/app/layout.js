export const metadata = {
  title: "Blackforge",
  description: "Forging the next wave of meme innovation",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
