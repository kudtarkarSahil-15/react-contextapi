import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"
import AppTheme from "../Colors"


const About = () => {

    const theme = useContext(ThemeContext)[0]
    const currTheme = AppTheme[theme]

    return (
        <>
        <div style = {{
            backgroundColor: `${currTheme.backgroundColor}`,
            color: `${currTheme.textColor}`
        }} className="my-2">
                <div style={{ backgroundColor: `${currTheme.aboutBgColor}`}} className="px-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-xxl-8">
                            <div className="text-center abt-container">
                                <h2 className="display-5 fw-bolder px-5 my-5"><span className="text-gradient d-inline">About Me</span></h2>
                                <p style= {{ color: `${currTheme.abtTextColor}`}} className="lead fw-bold mb-4">My name is Ron and I help brands grow.</p>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolorum itaque qui unde quisquam consequatur autem. Eveniet quasi nobis aliquid cumque officiis sed rem iure ipsa! Praesentium ratione atque dolorem?</p>
                                <div className="d-flex justify-content-center fs-2 gap-4">
                                    <a className="text-gradient" href="#!"><i className="bi bi-twitter"></i></a>
                                    <a className="text-gradient" href="#!"><i className="bi bi-linkedin"></i></a>
                                    <a className="text-gradient" href="#!"><i className="bi bi-github"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About