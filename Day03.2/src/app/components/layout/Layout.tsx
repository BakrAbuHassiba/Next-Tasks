import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 text-red-400">
  <Navbar />
  <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
  <Footer />
</div>

  );
}
