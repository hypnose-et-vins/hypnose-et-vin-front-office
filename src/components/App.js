import './App.scss';
import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Home from './Home/Home';
import AboutMorgane from './About/AboutMorgane';
import AboutAnimators from './About/AboutAnimators';
import Contact from './Contact/Contact';
import Faq from './Contact/Faq';
import Events from './Events/Events';
import EventDetails from './Events/Eventdetails';
import Products from './Products/Products';
import Reviews from './Reviews/Reviews';
import Login from './LogIns/Login';
import NewPassword from './LogIns/NewPassword';
import Register from './LogIns/Register';
import Basket from './Basket/Basket';
import ScrollButton from './Home/ScrollButton';
import OrderConfirmation from './Basket/OrderConfirmation';
import Disclaimer from './Basket/Disclaimer';
import Footer from './Home/Footer';
import Profile from './LogIns/Profile';
import ForgotPassword from './LogIns/ForgotPassword';
import NavBar from './Home/NavBar';
import MentionLegale from './MentionLegale/MentionLegale';
import LoginProvider from './Contexts/LoginContext';
import BasketProvider from './Contexts/BasketContext';
import ProfileInformation from './LogIns/ProfileInformation';
import ProfileEvents from './LogIns/ProfileEvents';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#8c0226',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider placement="bottom-center">
        <LoginProvider>
          <BasketProvider>
            <Router>
              <div className="App">
                <Helmet>
                  <meta charSet="utf-8" />
                  <title>Hypnose & Vins</title>
                </Helmet>
                <NavBar />
                <ScrollButton />
                <div className="main-div">
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/events" component={Events} />
                    <Route exact path="/events/:id" component={EventDetails} />
                    <Route exact path="/aboutme" component={AboutMorgane} />
                    <Route exact path="/animators" component={AboutAnimators} />
                    <Route exact path="/faq" component={Faq} />
                    <Route exact path="/reviews" component={Reviews} />
                    <Route exact path="/basket" component={Basket} />
                    <Route exact path="/products" component={Products} />
                    <Route exact path="/register" component={Register} />
                    <Route
                      exact
                      path="/order-confirmation"
                      component={OrderConfirmation}
                    />
                    <Route exact path="/disclaimer" component={Disclaimer} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/login" component={Login} />
                    <Route
                      exact
                      path="/reset/:userId/:token"
                      component={NewPassword}
                    />
                    <Route
                      exact
                      path="/forgot-password"
                      component={ForgotPassword}
                    />
                    <Route exact path="/profile" component={Profile} />
                    <Route
                      path="/profile/myinformation"
                      component={ProfileInformation}
                    />
                    <Route path="/profile/myevents" component={ProfileEvents} />
                    <Route
                      exact
                      path="/mentions-legales"
                      component={MentionLegale}
                    />
                  </Switch>
                </div>
                <Footer />
              </div>
            </Router>
          </BasketProvider>
        </LoginProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
