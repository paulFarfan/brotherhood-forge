import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
