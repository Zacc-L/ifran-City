export default function Footer() {
  return (
    <footer id="contact" className="py-10 bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900 text-center text-white">
      <p className="text-lg font-semibold">
        Fait avec ❤️ depuis Tanger
      </p>
      <p className="text-sm mt-2">
        © {new Date().getFullYear()} Explore Tanger. Tous droits réservés.
      </p>
    </footer>
  );
}
