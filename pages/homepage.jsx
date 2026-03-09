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
            <div className="container-main">
                <p className="d-inline-flex">
                    <button className="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Clicca qui
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
                                <button className="btn btn-info">
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