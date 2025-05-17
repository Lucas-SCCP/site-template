import ReactGA from 'react-ga4';

class AnalyticsService {
  initialize() {
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
  }

  logPageView() {
    ReactGA.logPageView();
  }

  send(params) {
    ReactGA.send({
      hitType: params.hitType,
      page: params.path,
      title: params.title
    });
  }
}

const analyticsService = new AnalyticsService();

export default analyticsService;