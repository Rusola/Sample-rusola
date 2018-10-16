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
    requiredText: '.text-sm-left',
    registrationButton: '#registration'
  },

  registrationPage: {
    firstName: '#fname',
    lastName: '#lname',
    errorMessage: '.alert-danger',
    registerButton: '#registration',
    email: '#email',
    password: '#pass'
  },

  newBugReportPage: {
    summaryTxtFld: '.input-group.mb-2>input',
    assigneeTxtFld: '.Dropdown-placeholder',
    bugReportForm: '#bug-form',
    summaryField: '#summary',
    stepsToReproduce: '#str',
    actualResult: '#actual',
    expectedResult: '#expected',
    attachmentLink: '#attachment',
    assigneeDropDown: '#assignee div.Dropdown-root',
    priorities: '#priority div.Dropdown-root',
    severities: '#severity div.Dropdown-root',
    assigneeDropDownPlaceHolder: '#assignee .Dropdown-placeholder',
    priorityDropDownPlaceHolder: '#priority .Dropdown-placeholder',
    severityDropDownPlaceHolder: '#severity .Dropdown-placeholder',
    reproDropDownPlaceHolder: '#repro .Dropdown-placeholder',
    versionDropDownPlaceHolder: '#version .Dropdown-placeholder',
    requiredFieldText: '.text-sm-left'
  },

  navigationBar: {
    newBugButton: '#new_bug',
    allIssuesButton: '#all_issues',
    logoutButton: '#logout',
    navigetionBar: '[class="card-footer text-center mb-3"] .input-group-append',
    cardFooter: '.card-footer',
    submitButton: '#bug_add',
    issuesTable: '.table'
  },

  globalFooter: {
    footer: '.custom-footer',
    footerText: 'body .custom-footer'
  },

  bugReportFormDisabledState: {
    bugTitle: '#bug',
    bugReportDisbForm: '.badge',
    attachment: '#attach_link',
    textArea: '#str_value',
    titleFont: '#summary_title',
    valueFont: '#summary_value',
    email: '#email',
    password: '#pass',
    loginButton: '#login',
    allIssues: '#all_issues',
    bugSummary: '#summary'
  },

  commentsModule: {
    input: '#summary',
    inputActRes: '#actual',
    allIssuesBtn: '#all_issues',
    btn: '.btn-primary.btn-block',
    btnAdd: '.btn.mt-2',
    bugTitle: 'span.text-left=Register button has wrong text',
    txtArea: '#str',
    commentsTitle: '#comments_title',
    registerButton: '#registration',
    newCommentsTextArea: '#new_comment',
    comments: '#comments',
    noComments: '#no_comments',
    bugTitleEmpty: 'span.text-left=Test. Empty comments bug report.'
  },

  bugList: {
    bodyBugList: '#bug_list_page',
    headerTable: 'thead',
    bodyTable: 'tbody tr',
    bugSummaryTitle: '#bug_summary',
    bugPriorityTitle: '#bug_priority',
    bugStatusTitle: '#bug_status',
    bugReporterTitle: '#bug_reporter',
    titleTable: '.table thead p',
    fontfamilyTitle: '.font-segoe-ui',
    textSummary: '.btn-link',
    textPriority: 'tbody #priority',
    textStatus: 'tbody #status',
    textReporter: 'tbody #reporter'

  },

  bugReportEditMode: {
    input: '#summary',
    inputActRes: '#actual',
    inputExpRes: '#expected',
    inputAtach: '#attachment',
    btnAllIssues: '#all_issues',
    btnEdit: '#edit',
    bugTitle: '#bug',
    txtArea: '#str',
    reporter: '.text-gray'
  },

  loginPage: {
    email: '#email',
    password: '#pass',
    loginButton: '#login',
    errorMessage: '.alert-danger',
    registrationButton: '#registration'
  },

  registrationPage: {
    firstName: '#fname',
    lastName: '#lname',
    errorMessage: '.alert-danger',
    registerButton: '#registration'
  },

  globalFooter: {
    footer: '.custom-footer',
    footerText: 'body .custom-footer',
  },

  bugReportTitles: {
    summary: '#summary_title',
    stepsToRep: '#str_title',
    actRes: '#actual_title',
    expRes: '#expected=title',
    attach: '#attach_title',
    assignee: '#assignee_title',
    reporter: '#reporter_title',
    version: '#version_title',
    priority: '#priority_title',
    severity: '#severity_value',
    repro: '#repro_title',
    comments: '#comments_title',
    allIssuesBtn: '#all_issues',
    btn: '#edit',
    bugTitle: '#summary',
    txtArea: '#str',
    registerButton: '#registration'
  },

  logout: {
    loginButton: '#login',
    bugReportForm: '#bug-form',
    logoutButton: '#logout',
  },

  controlBarFunctionality: {
    bugReportFormDisabled: '#bug_report_disabled',
    bugReportFormEdit: '#edit-mode-form',
    controlBar: '#edit-mode-form',
    cancelBtnDis: '#cancel',
    cancelBtnEdit: '#cancel_edit',
    editBtn: '#edit',
    submitBtn: '#submit',
    anyInput: 'input',
    anyDropDown: '#edit-mode-form .Dropdown-control',
    anyDropInControlBar: 'tbody .Dropdown-control',
    textAreaDis: '#str_value',
    textAreaEdt: '#str',
    bugSummary: '#summary',
    badgeDropDownEdt: '#edit-mode-form tbody .Dropdown-control'
  }

};
