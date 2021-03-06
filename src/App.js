import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Footer } from "./components/footer.component";
import { Header } from "./components/header.component";
import theme from "./config/theme"
import { AboutPage } from "./pages/about.page";
import { CompanyPage } from "./pages/company.page";
import { ContactPage } from "./pages/contact.page";
import { ErrorPage } from "./pages/error.page";
import { HomePage } from "./pages/home.page";
import { PersonListPage } from "./pages/person_list.page";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/about" component={AboutPage}/>
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/company" component={CompanyPage} />
          <Route exact path="/person" component={PersonListPage} />
          <Route path="/*" component={ErrorPage}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
