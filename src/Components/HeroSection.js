import React , {useContext} from "react";
import ThemeContext from "../Context/ThemeContext"
import AppTheme from "../colors";
import ThemeToggler from "./ThemeToggler";

const HeroSection = () => {
    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];
    return(
        <div 
        style={{
            padding: "1rem",
            backgroundColor: `${currentTheme.backgroundColor}`,
            color :`${currentTheme.textColor}`,
            textAlign: "center"
        }}
        >
            <h1>Context API theme togler</h1>
            <button
                style={{
                    backgroundColor: "#26ae60",
                    padding: "10px 150px",
                    fontSize :"20px",
                    color: "#FFF",
                    border: `${currentTheme.border}`
                }
            }
            >
            <ThemeToggler />
            </button>
        </div>
    )
}

export default HeroSection;