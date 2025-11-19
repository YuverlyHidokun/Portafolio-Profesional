import './globals.css'

export const metadata = {
  title: "Portafolio de Hidokun",
  description: "Desarrollador de Software y Programador.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}