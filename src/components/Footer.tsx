export const Footer = () => {
  const year = new Date().getFullYear();

  return (
      <div className="py-5 px-5 bg-zinc-800/[0.75] rounded-md space-y-2">
          <p className="text-sm">
              © {year} attivo.dev / All rights reserved.
          </p>
      </div>
  );
};