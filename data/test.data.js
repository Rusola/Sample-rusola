module.exports = {

  client: {
    pageTitle: "Bug Tracker",
    faviconLink: 'https://reactbugtracker.com/favicon.ico'
  },

  globalHeader: {
    headerTitle: "BugTracker",
    headerColor: "rgba(0,0,0,0.125)",
    headerFontSize: "30px",
    fontWeight: "400",
    fontFamily: "segoe ui",
    fontColor: "#212529",
    imageSize: "30x30",
    textAlign: "center"
  },

  loginPageFunctionality: {
    minLength: 1,
    midLength: 22,
    maxLength: 45,
    noLoginOrPassError: 'Specify email and password',
    wrongLoginError: 'User with this email does not exist'
  },

  registrationPageFunctionality: {
    firstNameMinLength: 1,
    firstNameMaxLength: 20,
    lastNameMinLength: 1,
    lastNameMaxLength: 20,
    emptyFieldError: 'Please fill all the fields'
  },

    globalFooter: {
        footerTitle: new Date().getFullYear().toString() + " Bug Tracker by React Web Development",
        footerColor: "rgba(0,0,0,0.125)",
        footerFontSize: "16px",
        fontWeight: "400",
        fontFamily: "segoe ui",
        fontColor: "#212529"
    },

  bugReportFormDisabledState: {
    fontWeight: "700",
    fontFamily: "segoe ui",
    fontSize: "16px",
    fontColor: "rgba(33,37,41,1)",
    fontWeightValue: "400",
    fontFamilyValue: "segoe ui",
    fontSizeValue: "16px",
    fontColorValue: "rgba(0,0,0,0.49)"
  }
};