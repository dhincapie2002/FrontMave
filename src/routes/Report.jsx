import { React, useEffect } from "react";
import "../styles/Table.css"
import Navbar from "../components/Navbar";
import Cookies from "universal-cookie";
import { GetReportInitial } from "../hooks/Grafics";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { username } from "../querys/User.query";
import "jspdf-autotable";

function Report() {
    const cook = new Cookies()
    let idUsuario = cook.get('id')

    useEffect(() => {
        if (!cook) {
            navigate('/time-out') // Hay que crear la ruta time out que es el cierre de sesioón
        }
    }, [])
    const { data: result, isSuccess, isLoading } = GetReportInitial(idUsuario)
    const questions = isSuccess ? result.data.question : []
    const answer = isSuccess ? result.data.answer : []
    const score = isSuccess ? result.data.score : []
    const respuestas = [
        { opcion: isSuccess && questions[0], respuesta: isSuccess && answer[0], puntaje: isSuccess && score[0] },
        { opcion: isSuccess && questions[1], respuesta: isSuccess && answer[1], puntaje: isSuccess && score[1] },
        { opcion: isSuccess && questions[2], respuesta: isSuccess && answer[2], puntaje: isSuccess && score[2] },
        { opcion: isSuccess && questions[3], respuesta: isSuccess && answer[3], puntaje: isSuccess && score[3] },
        { opcion: isSuccess && questions[4], respuesta: isSuccess && answer[4], puntaje: isSuccess && score[4] },
        { opcion: isSuccess && questions[5], respuesta: isSuccess && answer[5], puntaje: isSuccess && score[5] },
        { opcion: isSuccess && questions[6], respuesta: isSuccess && answer[6], puntaje: isSuccess && score[6] },
        { opcion: isSuccess && questions[7], respuesta: isSuccess && answer[7], puntaje: isSuccess && score[7] },
        { opcion: isSuccess && questions[8], respuesta: isSuccess && answer[8], puntaje: isSuccess && score[8] },
        { opcion: isSuccess && questions[9], respuesta: isSuccess && answer[9], puntaje: isSuccess && score[9] },
        { opcion: isSuccess && questions[10], respuesta: isSuccess && answer[10], puntaje: isSuccess && score[10] },
        { opcion: isSuccess && questions[11], respuesta: isSuccess && answer[11], puntaje: isSuccess && score[11] },
        { opcion: isSuccess && questions[12], respuesta: isSuccess && answer[12], puntaje: isSuccess && score[12] },
        { opcion: isSuccess && questions[13], respuesta: isSuccess && answer[13], puntaje: isSuccess && score[13] },
        { opcion: isSuccess && questions[14], respuesta: isSuccess && answer[14], puntaje: isSuccess && score[14] },
        { opcion: isSuccess && questions[15], respuesta: isSuccess && answer[15], puntaje: isSuccess && score[15] },
        { opcion: isSuccess && questions[16], respuesta: isSuccess && answer[16], puntaje: isSuccess && score[16] },
        { opcion: isSuccess && questions[17], respuesta: isSuccess && answer[17], puntaje: isSuccess && score[17] },
        { opcion: isSuccess && questions[18], respuesta: isSuccess && answer[18], puntaje: isSuccess && score[18] },
        { opcion: isSuccess && questions[19], respuesta: isSuccess && answer[19], puntaje: isSuccess && score[19] },
        { opcion: isSuccess && questions[20], respuesta: isSuccess && answer[20], puntaje: isSuccess && score[20] },
        { opcion: isSuccess && questions[21], respuesta: isSuccess && answer[21], puntaje: isSuccess && score[21] },
        { opcion: isSuccess && questions[22], respuesta: isSuccess && answer[22], puntaje: isSuccess && score[22] },
        { opcion: isSuccess && questions[23], respuesta: isSuccess && answer[23], puntaje: isSuccess && score[23] },
    ];

    const generatePDF = () => {
        const doc = new jsPDF();
        const pageHeight = doc.internal.pageSize.height;
        const pageWidth = doc.internal.pageSize.width;
        
        // Set the title and other details
        const title = `Reporte de estadísticas del usuario ${username}`;
        const ach = "MAVE";
        const description = [
            { text: "D: Dominante" },
            { text: "I: Influyente" },
            { text: "S: Estable" },
            { text: "C: Concienzudo" }
        ];

        // Add title
        
        doc.setFontSize(26);
        doc.text(title, pageWidth / 2, 20, { align: 'center' });

        // add Achronium
        doc.setFontSize(32)
        doc.text(ach,pageWidth / 2, 10, { align: 'center' });
        // Add description
        doc.setFontSize(12);
        description.forEach((desc, i) => {
            doc.text(desc.text, 10, 30 + i * 10);
        });

        // Define columns and rows for the table
        const columns = ["Opcion N°", "Respuesta", "Puntaje"];
        const rows = respuestas.map(rta => [rta.opcion, rta.respuesta, rta.puntaje]);

        // Add table
        doc.autoTable({
            head: [columns],
            body: rows,
            startY: 70, // Position the table below the description
            theme: 'grid',
            margin: { top: 10 },
        });

        doc.save("Estadistic_Report.pdf");
    };

    return (
        <>
            <header>
                <Navbar />
            </header>
            <div id="print-vis" className="table1">
                <div id="complete">
                    <div>
                        <h1 className="h11">Reporte de estadisticas del usuario {username}</h1>
                        <img
                            src="https://imgur.com/C86LPG8.png"
                            alt="Logo"
                            className="logo"
                            id="print-logo"
                        ></img>
                        <h1 style={{marginLeft: 300}} id="print-h1">MAVE</h1>
                    </div>
                    <div id="description">
                        <h2>D: Dominante</h2>
                        <h2>I: Influyente</h2>
                        <h2>S: Estable</h2>
                        <h2>C: Concienzudo</h2>
                    </div>
                    <table id="table">
                        <thead>
                            <tr id="table-title">
                                <th>Opcion N°</th>
                                <th>Respuesta</th>
                                <th>Puntaje</th>
                            </tr>
                        </thead>
                        <tbody>
                            {isLoading ? <span><img className="Loading" src="https://mvalma.com/inicio/public/include/img/ImagenesTL/paginaTL/Cargando.gif" alt="Cargando" /></span> :
                                respuestas.map((rta, index) => (
                                    <tr key={index}>
                                        <td>{rta.opcion}</td>
                                        <td>{rta.respuesta}</td>
                                        <td>{rta.puntaje}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
                <button className="button" onClick={generatePDF}>Generar PDF</button>
            </div>
        </>

    );
};
export default Report