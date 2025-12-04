import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export default function layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
