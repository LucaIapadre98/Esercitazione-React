import { NavLink } from "react-router-dom";

export default function Buy(){

    
    return(
        <> 
        <div className="header">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand" href="">Acquisto</a>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/" style={{textDecoration: "none", margin: "0 10px", color: "black"}}>HomePage</NavLink>
                                </li>
                                
                            </ul>
                        </div>
                    </div> 
                </nav>
            </div>
            <div className="main">
                <div className="title">
                    <h2>Acquisto biglietti</h2>
                </div>
                <div className="main-buy">
                    <form className="row needs-validation" noValidate>
                        <div className="col-md-3">
                            <label htmlFor="validationCustom01" className="form-label" style={{color: "red", fontWeight: "bold"}}>Nome</label>
                            <input type="text" className="form-control" id="validationCustom01" placeholder="Mario" required />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="validationCustom02" className="form-label" style={{color: "red", fontWeight: "bold"}}>Cognome</label>
                            <input type="text" className="form-control" id="validationCustom02" placeholder="Rossi" required />
                        </div>
                        <div className="col-md-6">
                           <label for="exampleFormControlInput1" class="form-label" style={{color: "red", fontWeight: "bold"}}>Email</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="validationCustom03" className="form-label" style={{color: "red", fontWeight: "bold"}}>Città</label>
                            <input type="text" className="form-control" id="validationCustom03" required placeholder="Roma" />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="validationCustom05" className="form-label" style={{color: "red", fontWeight: "bold"}}>Numero</label>
                            <input type="text" className="form-control" id="validationCustom05" required  placeholder="332 66 48 123"/>
                        </div> 
                        <div className="col-md-4">
                            <label htmlFor="validationCustom05" className="form-label" style={{color: "red", fontWeight: "bold"}}>Data di nascita</label>
                            <input type="date" className="form-control" id="validationCustom05" required  placeholder="dd/mm/yyyy"/> 
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom05" className="form-label" style={{color: "red", fontWeight: "bold"}}>Prezzo </label>
                            <input type="text" className="form-control" id="validationCustom05" required  placeholder="€"/>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom05" className="form-label" style={{color: "red", fontWeight: "bold"}}>Data del viaggio</label>
                            <input type="date" className="form-control" id="validationCustom05" required  placeholder="dd/mm/yyyy"/> 
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom05" className="form-label" style={{color: "red", fontWeight: "bold"}}>Metodo di pagamento</label>
                            <input type="text" className="form-control" id="validationCustom05" required  placeholder="Carta di credito"/>
                        </div>
                        <div className="col-12" style={{margin: "10px 0"}}>
                            <div className="form-check form-switch">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1" style={{color: "red", fontWeight: "bold"}}>Privacy</label>
                            </div>
                        </div>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Invio</button>
                        
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Acquisto effettuato!</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        Grazie per aver effettuato l'acquisto, ti aspettiamo per il tuo viaggio!
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Chiudi</button>
                                        <button type="button" className="btn btn-success" data-bs-dismiss="modal">Conferma</button>
                                    </div>
                                </div> 
                            </div> 
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}