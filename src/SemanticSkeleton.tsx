// This component demonstrates a purely semantic HTML skeleton
// as described in the exercise. It doesn't contain any layout
// styling or real content yet – the focus is on the correct
// tags (header, nav, main, section, footer, etc.).

export function SemanticSkeleton() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hakkimda">
          <h2>Hakkimda</h2>
          <div className="about-content">
            <figure>
              <img src="https://ui-avatars.com/api/?name=F+K&background=030213&color=fff&size=200" alt="Profil resmi" />
            </figure>
            <div>
              <p>
                Merhaba, ben modern web teknolojileri (React, TypeScript) kullanarak erisilebilir,
                hizli ve kullanici dostu arayuzler gelistiren bir frontend gelistiricisiyim.
              </p>
              <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          {/* icerik buraya */}
        </section>

        <section id="iletisim">
          <h2>Iletisim</h2>
          <form action="#" method="POST" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="ad">Ad Soyad</label>
              <input type="text" id="ad" name="ad" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-posta</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="mesaj">Mesajiniz</label>
              <textarea id="mesaj" name="mesaj" rows={4} required></textarea>
            </div>
            <button type="submit">Mesaj Gonder</button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Fatma Nur Karagöz. Tum haklari saklidir.</p>
      </footer>
    </>
  );
}
