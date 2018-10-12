module.exports = {

  client: {
    header: '.custom-header',
    app: '.container .p-5',
    footer: '.custom-footer',
    favicon: '#favicon'
  },

  globalHeader: {
    header: '.custom-header',
    headerText: '.custom-header span',
    headerImage: '.custom-header span img'
  },

  loginPage: {
    email: '#email',
    password: '#pass',
    loginButton: '#login',
    errorMessage: '.alert-danger',
    registrationButton: '#registration'
  },

  registrationPage : {
    firstName: '#fname',
    lastName: '#lname',
    errorMessage: '.alert-danger',
    registerButton: '#registration'
  },

    globalFooter: {
        footer: '.custom-footer',
        footerText: 'body .custom-footer',
    },

  bugReportFormDisabledState: {
    titleFont: '#summary_title',
    valueFont: '#summary_value',
    email: '#email',
    password: '#pass',
    loginButton: '#login',
    allIssues: '#all_issues',
    bugSummary: '#summary'
  }
};