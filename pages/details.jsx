import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default  function Details(){
    const { id } = useParams()
    const [data, setData] = useState([]);

    async function ApiId(id) {
        try{
            const responseId = await fetch (`http://localhost:3333/destinations/${id}`)
            const data = await responseId.json()
            setData([data]);
            console.log("Parametro singolo:", data);     
        } catch (error){
            console.error("Messaggio di errore:", error);
        }
    };
    useEffect(() => {
        ApiId(id)
    }, [id])

    return (
        <>

            <div className="header">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand" href="">Dettaglio</a>
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
                    <h2>Dettaglio Luogo</h2>
                </div>
                <div className="main">
                    {data.map((data) => (
                        <div className="card card-body" key={data.id} style={{margin: "10px"}}>
                            <h1>{data.name}</h1>
                            <figcaption className="blockquote-footer">
                                {data.country}, {data.continent}
                            </figcaption>
                            <dl className="row">
                                <dt className="col-sm-3"><h6>Le cose da vedere sono &#128301;:</h6></dt>
                                <dd className="col-sm-9"><p>{data.activities.join(" , ")}</p></dd>
                                <dt className="col-sm-3"><h6>La lingua parlata è il &#128100;:</h6></dt>
                                <dd className="col-sm-9"><p>{data.language}</p></dd>
                                <dt className="col-sm-3"><h6>I piatti locali sono &#127869;:</h6></dt>
                                <dd className="col-sm-9"><p>{data.local_dishes.join(" , ")}</p></dd>
                                <dt className="col-sm-3"><h6>Hanno una popolazione di &#128100;:</h6></dt>
                                <dd className="col-sm-9"><p>{data.population} persone</p></dd>
                                <dt className="col-sm-3"><h6>La loro valuta è &#128178;:</h6></dt>
                                <dd className="col-sm-9"><p>{data.currency}</p></dd>
                                <dt className="col-sm-3"><h6>Il periodo migliore per andarci &#127774;:</h6></dt>
                                <dd className="col-sm-9"><p>{data.best_time_to_visit}</p></dd>
                                <dt className="col-sm-3"><h6>Le attrazioni da vedere sono &#127905;:</h6></dt>
                                <dd className="col-sm-9"><p>{data.top_attractions.join(" , ")}</p></dd>
                                <dt className="col-sm-3"><h6>Possiamo descrivere la città &#127970;:</h6></dt>
                                <dd className="col-sm-9"><p>{data.description}</p></dd>
                                <dt className="col-sm-3"></dt>
                                <dd className="col-sm-9">
                                    <button className="btn btn-success">
                                        <NavLink to="/buy" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "white"}}>Per acquistare il biglietto</NavLink>
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