import logo from "./logo.svg";
import "./App.css";
import {Box} from "@mui/material";
import Lecture10 from "./Lectureres/Lecture10";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import theme from "./Theme";
import Lecture12 from "./Lectureres/Lecture12";
import Lecture13 from "./Lectureres/Lecture13";
import Lecture14 from "./Lectureres/Lecture14";
import Lecture15 from "./Lectureres/Lecture15";
import Lecture16 from "./Lectureres/Lecturte16";
import Lecturer18 from "./Lectureres/Lecturer18";
import Lesson18 from "./Lectureres/Lesson18";
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Lesson18 />
      </ThemeProvider>
    </div>
  );
}

export default App;
