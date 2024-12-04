import "bootstrap/dist/css/bootstrap-grid.css"
import "bootstrap/dist/js/bootstrap"

function App() {
  return (
      <>
          <div className="container">
              <header className="row">
                  <div className="col-8">
                      Ważenie pojazdów
                  </div>
                  <div className="col-4">
                      Obrazek
                  </div>
              </header>

              <div className="row">
                  <div className="col-3">
                      Lokalizacje
                  </div>
                  <div className="col-5">
                      Tabelka
                  </div>
                  <div className="col-4">
                      Obrazek
                  </div>
              </div>

              <footer className="row">
                  <div className="col-12">
                      Footer
                  </div>
              </footer>
          </div>
      </>
  )
}

export default App;
