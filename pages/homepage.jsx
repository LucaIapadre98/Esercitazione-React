import { NavLink } from "react-router-dom";
import {  useEffect, useState } from "react";

export default function Homepage(){
    const [data, setData] = useState([])

    async function Api() {
        try{
            const response = await fetch(`http://localhost:3333/destinations`)
            const data = await response.json();
            console.log("Dati:", data);
            setData(data)
        } catch (error){
            console.error("Messaggio di errore:", error);
        }
    }

    useEffect(() => {
        Api()
    }, [])

    return (
        <>
            <div className="header">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand" href="">Homepage</a>
                    </div> 
                </nav>
            </div>
            <div className="container-title">
                <div className="row g-2 bg-body-secondary position-relative mb-3">
                    <div className="col-md-3 mb-md-0 p-md-4">
                        <img src="./aereo.jpg"  alt="foto aereo" />
                    </div>
                    <div className="col-md-9 p-3 ps-md-0">
                        <h1 className="mt-0">WebApp Viaggio</h1>
                        <p>Pianifica il tuo prossimo viaggio in modo semplice, veloce e intelligente. La nostra webapp ti permette di scoprire nuove destinazioni, creare itinerari personalizzati e organizzare ogni dettaglio del tuo viaggio in un’unica piattaforma. Dalla scelta della meta alle attività da fare, tutto è progettato per aiutarti a vivere esperienze autentiche senza stress. Esplora il mondo, trova ispirazione e trasforma ogni viaggio in un’avventura indimenticabile. 🌍✈️</p>
                        <div className="group-btn">
                            <button className="text-bg-primary focus-ring">Europa</button>
                            <button className="text-bg-secondary focus-ring">Asia</button>
                            <button className="text-bg-success focus-ring">Africa</button>
                            <button className="text-bg-danger focus-ring">America</button>
                            <button className="text-bg-warning focus-ring">Oceania</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-main">
                <p className="d-inline-flex">
                    <button className="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        &#8594; Clicca qui &#8592;
                    </button>
                </p>
                <div className="collapse" id="collapseExample">
                    {data.map((data) => (
                        <div className="card card-body" key={data.id}>
                            <h1>{data.name}</h1>
                            <figcaption className="blockquote-footer">
                                {data.country}, {data.continent}
                            </figcaption>
                            <dl className="row">
                                <dt className="col-sm-3"><h6>Descrizione:</h6></dt>
                                <dd className="col-sm-9"><p>{data.description}</p></dd>
                                <dd className="col-sm-9">
                                    <button className="btn btn-warning" type="button">
                                        <NavLink to={`/details/${data.id}`} className="dettaglio" style={{padding: "8px 15px"}}>Dettaglio</NavLink>
                                    </button>
                                </dd>
                            </dl>
                        </div>
                    ))}
                </div> 
            </div>
        </>
    )
};