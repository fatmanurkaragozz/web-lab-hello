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
          {/* icerik buraya */}
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          {/* icerik buraya */}
        </section>

        <section id="iletisim">
          <h2>Iletisim</h2>
          {/* form buraya */}
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Fatma Nur Karagöz. Tum haklari saklidir.</p>
      </footer>
    </>
  );
}
