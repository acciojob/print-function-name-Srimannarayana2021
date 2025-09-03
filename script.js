function functionName() {
  alert(arguments.callee.name);
}

function AccioJob() {
  alert(arguments.callee.name);
}

functionName();  // alerts "functionName"
AccioJob();      // alerts "AccioJob"
