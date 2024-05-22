import "../main/main.css"
import "../main/responsive.css"
export default function Main() {
    return (
        <div className="main">
            <div className="componentstwo">
                <div className="aboutme">
                    <h1>SOBRE MIM</h1>
                    <p>Tenho 19 anos, sou desenvolvedora
                        frond-end apaixonada por criar
                        experiências digitais excepcionais.
                        Com habilidades sólidas em HTML,
                        CSS, e JavaScrip e experiência no
                        desenvolvimento de interfaces
                        responsivas, estou comprometida em
                        integrar design e funcionalidade para
                        imoulsionar a usabilidade e a
                        estética.
                    </p>
                </div>

                <div className="education">
                    <h1>EDUCAÇÃO</h1>
                    <h2>Ensino Médio Completo - Conclusão: 2022</h2>
                    <p>Colégio São Francisco - Alagoinhas-Ba</p>
                    <h3>Sistema de Informação - FSSS (Faculdade Santíssimo Sacramento)</h3>
                    <p>Ensino Superior - Conclusão Prevista 2028</p>
                </div>


                <div className="languages">
                    <h1>IDIOMAS</h1>
                    <p>Português: Nativo</p>
                    <p>Inglês: Básico (somente escrito)</p>
                </div>

                <div className="skills">
                    <h1>HABILIDADES</h1>
                    <p>◦ Linguagens: HTML, CSS, JavaScript</p>
                    <p>◦ Design responsivo. Figma, Canva</p>
                    <p>◦ Fraweworks Frond-End: React.js</p>
                </div>

              
            </div>
           
        </div>
    )
}