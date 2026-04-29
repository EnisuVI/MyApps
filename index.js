import React from 'react';

// --- CONFIGURATION FACILE ---
// C'est ici que tu ajoutes tes apps. 
// Pour l'image, remplace null par "/nom-image.png" (à placer dans le dossier public)
const apps = [
  { name: "My Drive", url: "https://drive.enisuvi.cloud", image: null },
  { name: "Status", url: "https://status.enisuvi.cloud", image: null },
];

export default function Portal() {
  return (
    <div className="container">
      <header>
        <h1 className="logo">enisuvi.cloud</h1>
      </header>

      <main className="grid">
        {apps.map((app, index) => (
          <a key={index} href={app.url} className="card-container">
            <div className="card">
              {app.image ? (
                <img src={app.image} alt={app.name} className="app-image" />
              ) : (
                <span className="app-name-inner">{app.name}</span>
              )}
            </div>
            <p className="app-domain">{app.url.replace('https://', '')}</p>
          </a>
        ))}
      </main>

      <style jsx global>{`
        @font-face {
          font-family: 'PorscheNext';
          src: url('/fonts/Design System B W01 Regular.ttf') format('ttf'); /* Assure-toi d'avoir le fichier font */
        }

        body {
          background-color: #0a0a0a;
          color: white;
          font-family: 'PorscheNext', 'Inter', sans-serif;
          margin: 0;
          display: flex;
          justify-content: center;
          min-height: 100vh;
        }

        .container {
          width: 100%;
          max-width: 1000px;
          padding: 60px 20px;
        }

        header {
          margin-bottom: 50px;
        }

        .logo {
          font-size: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 700;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 30px;
          max-width: 900px; /* Limite à environ 3 colonnes */
        }

        .card-container {
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.3s ease;
        }

        .card-container:hover {
          transform: scale(1.05);
        }

        .card {
          width: 100%;
          aspect-ratio: 1 / 1;
          background: #161616;
          border: 1px solid #252525;
          border-radius: 24px; /* Angles ronds comme Status */
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        .app-name-inner {
          font-size: 1.2rem;
          font-weight: 600;
          opacity: 0.8;
        }

        .app-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .app-domain {
          margin-top: 15px;
          font-size: 0.85rem;
          color: #666;
          letter-spacing: 0.5px;
        }
      `}</style>
    </div>
  );
}