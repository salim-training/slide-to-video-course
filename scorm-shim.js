/**
 * Minimal SCORM API shim — no tracking, no persistence.
 * Satisfies scormdriver.js so a course launches standalone (e.g. on
 * GitHub Pages) without a real LMS behind it. Every call just returns
 * a "success" value; nothing is saved or reported anywhere.
 *
 * Include this BEFORE scormdriver.js loads — e.g. add
 *   <script src="scorm-shim.js"></script>
 * right above the existing scormdriver <script> tag in your launch
 * HTML file (often index.html or index_lms.html at the repo root).
 */

// ---- SCORM 1.2 ----
window.API = {
  LMSInitialize: function () { return "true"; },
  LMSFinish: function () { return "true"; },
  LMSGetValue: function () { return ""; },
  LMSSetValue: function () { return "true"; },
  LMSCommit: function () { return "true"; },
  LMSGetLastError: function () { return "0"; },
  LMSGetErrorString: function () { return "No error"; },
  LMSGetDiagnostic: function () { return "No error"; }
};

// ---- SCORM 2004 ----
window.API_1484_11 = {
  Initialize: function () { return "true"; },
  Terminate: function () { return "true"; },
  GetValue: function () { return ""; },
  SetValue: function () { return "true"; },
  Commit: function () { return "true"; },
  GetLastError: function () { return "0"; },
  GetErrorString: function () { return "No error"; },
  GetDiagnostic: function () { return "No error"; }
};
