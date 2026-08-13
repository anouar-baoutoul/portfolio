export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>
          © {new Date().getFullYear()} Anouar Baoutoul –{" "}
          <a
            href="mailto:anoir.baoutoul@gmail.com"
            className="underline hover:text-primary"
          >
            anoir.baoutoul@gmail.com
          </a>
        </p>
        <p className="mt-2 text-sm">
          Built with <span className="text-primary">Next.js</span> +{" "}
          <span className="text-primary">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
