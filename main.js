var split = (function(a, b) {
  return a.split(b);
});

var map = (function(a, b) {
  return a.map(b);
});

var filter = (function(a, b) {
  return a.filter(b);
});

var tail = (function(a) {
  return a.slice(1);
});

var head = (function(a) {
  return (function() {
    if ((a === undefined)) {
      return [  ];
    } else {
      return (a)[0];
    }
  })();
});

var join = (function(a, b) {
  return b.join(a);
});

var indexOf = (function(a, b) {
  return a.indexOf(b);
});

var isGroupPart = (function(entry) {
  return (function() {
    if ((entry.indexOf("::") !== -1)) {
      return true;
    } else {
      return false;
    }
  })();
});

var getGroupPart = (function(entry) {
  return head(entry.split("::"));
});

var getEntryPart = (function(entry) {
  return head(tail(entry.split("::")));
});

var push = (function(a, b) {
  a.push(b);
  return a;
});

var pushFront = (function(a, b) {
  a.unshift(b);
  return a;
});

var hostsToString = (function(hosts) {
  return (function() {
    if ((hosts.length === 0)) {
      return "";
    } else {
      return (((head(hosts)).join(" ") + "\n") + hostsToString(tail(hosts)));
    }
  })();
});

var writeToFile = (function(fileName, hosts) {
  return fs.writeFileSync(fileName, hostsToString(hosts));
});


var split = (function(a, b) {
  return a.split(b);
});

var map = (function(a, b) {
  return a.map(b);
});

var filter = (function(a, b) {
  return a.filter(b);
});

var tail = (function(a) {
  return a.slice(1);
});

var head = (function(a) {
  return (function() {
    if ((a === undefined)) {
      return [  ];
    } else {
      return (a)[0];
    }
  })();
});

var join = (function(a, b) {
  return b.join(a);
});

var indexOf = (function(a, b) {
  return a.indexOf(b);
});

var isGroupPart = (function(entry) {
  return (function() {
    if ((entry.indexOf("::") !== -1)) {
      return true;
    } else {
      return false;
    }
  })();
});

var getGroupPart = (function(entry) {
  return head(entry.split("::"));
});

var getEntryPart = (function(entry) {
  return head(tail(entry.split("::")));
});

var push = (function(a, b) {
  a.push(b);
  return a;
});

var pushFront = (function(a, b) {
  a.unshift(b);
  return a;
});

var hostsToString = (function(hosts) {
  return (function() {
    if ((hosts.length === 0)) {
      return "";
    } else {
      return (((head(hosts)).join(" ") + "\n") + hostsToString(tail(hosts)));
    }
  })();
});

var writeToFile = (function(fileName, hosts) {
  return fs.writeFileSync(fileName, hostsToString(hosts));
});


var getGroup = (function(hosts, groupPart, inGroup) {
  if (arguments.length < 3)
    var inGroup = undefined;
  
  (function() {
    if ((!inGroup)) {
      return inGroup = false;
    }
  })();
  return (function() {
    if ((hosts.length === 0)) {
      return [  ];
    } else {
      return (function() {
        if ((inGroup === true)) {
          return (function() {
            if ((head(head(hosts)) === "#====")) {
              return [  ];
            } else {
              return pushFront(getGroup(tail(hosts), groupPart, true), head(hosts));
            }
          })();
        } else {
          return (function() {
            if (((head(head(hosts)) === "#====") && (head(tail(head(hosts))) === groupPart))) {
              return getGroup(tail(hosts), groupPart, true);
            } else {
              return getGroup(tail(hosts), groupPart, false);
            }
          })();
        }
      })();
    }
  })();
});

var getFromGroup = (function(hosts, groupPart, entry) {
  var group = getGroup(hosts, groupPart);
  return head(filter(group, (function(line) {
    return (function() {
      if ((line.indexOf(entry) !== -1)) {
        return true;
      } else {
        return false;
      }
    })();
  })));
});

var getFromAnywhere = (function(hosts, entry) {
  return (function() {
    if ((hosts.length === 0)) {
      return [  ];
    } else {
      return (function() {
        if ((indexOf(head(hosts), entry) === -1)) {
          return getFromAnywhere(tail(hosts), entry);
        } else {
          return head(hosts);
        }
      })();
    }
  })();
});

var cmdGetSingle = (function(hosts, entry) {
  return (function() {
    if (isGroupPart(entry)) {
      return (function() {
        if ((getEntryPart(entry) === "")) {
          return console.log(getGroup(hosts, getGroupPart(entry)));
        } else {
          return console.log(getFromGroup(hosts, getGroupPart(entry), getEntryPart(entry)));
        }
      })();
    } else {
      return console.log(getFromAnywhere(hosts, entry));
    }
  })();
});

var cmdGet = (function(hosts, entries) {
  return entries.forEach((function(entry) {
    return cmdGetSingle(hosts, entry);
  }));
});


var split = (function(a, b) {
  return a.split(b);
});

var map = (function(a, b) {
  return a.map(b);
});

var filter = (function(a, b) {
  return a.filter(b);
});

var tail = (function(a) {
  return a.slice(1);
});

var head = (function(a) {
  return (function() {
    if ((a === undefined)) {
      return [  ];
    } else {
      return (a)[0];
    }
  })();
});

var join = (function(a, b) {
  return b.join(a);
});

var indexOf = (function(a, b) {
  return a.indexOf(b);
});

var isGroupPart = (function(entry) {
  return (function() {
    if ((entry.indexOf("::") !== -1)) {
      return true;
    } else {
      return false;
    }
  })();
});

var getGroupPart = (function(entry) {
  return head(entry.split("::"));
});

var getEntryPart = (function(entry) {
  return head(tail(entry.split("::")));
});

var push = (function(a, b) {
  a.push(b);
  return a;
});

var pushFront = (function(a, b) {
  a.unshift(b);
  return a;
});

var hostsToString = (function(hosts) {
  return (function() {
    if ((hosts.length === 0)) {
      return "";
    } else {
      return (((head(hosts)).join(" ") + "\n") + hostsToString(tail(hosts)));
    }
  })();
});

var writeToFile = (function(fileName, hosts) {
  return fs.writeFileSync(fileName, hostsToString(hosts));
});


var fs = require("fs");
var cmdSetReplace = (function(line, newIp) {
  return (function() {
    if ((head(line) === "#")) {
      return pushFront(pushFront(tail(tail(line)), newIp), head(line));
    } else {
      return pushFront(tail(line), newIp);
    }
  })();
});

var cmdSetNewEntry = (function(entry, ip) {
  return [ ip, entry ];
});

var cmdSetInGroup = (function(hosts, group, entry, ip, inGroup, done) {
  if (arguments.length < 6)
    var done = inGroup, inGroup = undefined;
  if (arguments.length < 5)
    var done = undefined;
  
  (function() {
    if ((!inGroup)) {
      return inGroup = false;
    }
  })();
  (function() {
    if ((!done)) {
      return done = false;
    }
  })();
  return (function() {
    if ((hosts.length === 0)) {
      return [  ];
    } else {
      return (function() {
        if (inGroup) {
          return (function() {
            if ((((hosts)[0])[0] === "#====")) {
              return (function() {
                if ((!done)) {
                  return pushFront(pushFront(cmdSetInGroup(tail(hosts), group, entry, ip, false, done), [ "#====" ]), cmdSetNewEntry(entry, ip));
                } else {
                  return pushFront(cmdSetInGroup(tail(hosts), group, entry, ip, false, done), head(hosts));
                }
              })();
            } else {
              return (function() {
                if (((done === true) || (indexOf(head(hosts), entry) === -1))) {
                  return pushFront(cmdSetInGroup(tail(hosts), group, entry, ip, inGroup, done), head(hosts));
                } else {
                  return pushFront(cmdSetInGroup(tail(hosts), group, entry, ip, inGroup, true), cmdSetReplace(head(hosts), ip));
                }
              })();
            }
          })();
        } else {
          return (function() {
            if (((head(head(hosts)) === "#====") && (head(tail(head(hosts))) === group))) {
              return pushFront(cmdSetInGroup(tail(hosts), group, entry, ip, true, done), head(hosts));
            } else {
              return pushFront(cmdSetInGroup(tail(hosts), group, entry, ip, inGroup, done), head(hosts));
            }
          })();
        }
      })();
    }
  })();
});

var cmdSetGroup = (function(hosts, group, ip, inGroup) {
  if (arguments.length < 4)
    var inGroup = undefined;
  
  (function() {
    if ((!inGroup)) {
      return inGroup = false;
    }
  })();
  return (function() {
    if ((hosts.length === 0)) {
      return [  ];
    } else {
      return (function() {
        if (inGroup) {
          return (function() {
            if ((((hosts)[0])[0] === "#====")) {
              return pushFront(cmdSetGroup(tail(hosts), group, ip, false), head(hosts));
            } else {
              return pushFront(cmdSetGroup(tail(hosts), group, ip, inGroup), cmdSetReplace(head(hosts), ip));
            }
          })();
        } else {
          return (function() {
            if (((head(head(hosts)) === "#====") && (head(tail(head(hosts))) === group))) {
              return pushFront(cmdSetGroup(tail(hosts), group, ip, true), head(hosts));
            } else {
              return pushFront(cmdSetGroup(tail(hosts), group, ip, inGroup), head(hosts));
            }
          })();
        }
      })();
    }
  })();
});

var cmdSetNoGroup = (function(hosts, entry, ip, done) {
  if (arguments.length < 4)
    var done = undefined;
  
  (function() {
    if ((!done)) {
      return done = false;
    }
  })();
  return (function() {
    if ((hosts.length === 0)) {
      return (function() {
        if ((!done)) {
          return [ [ ip, entry ] ];
        } else {
          return [  ];
        }
      })();
    } else {
      return (function() {
        if (((done === true) || (indexOf(head(hosts), entry) === -1))) {
          return pushFront(cmdSetNoGroup(tail(hosts), entry, ip, done), head(hosts));
        } else {
          return pushFront(cmdSetNoGroup(tail(hosts), entry, ip, true), cmdSetReplace(head(hosts), ip));
        }
      })();
    }
  })();
});

var cmdSet = (function(hosts, fileName, args) {
  var newHosts = undefined;
  return (function() {
    if ((args.length !== 2)) {
      return null;
    } else {
      (function() {
        if (isGroupPart((args)[0])) {
          return (function() {
            if ((getEntryPart((args)[0]) !== "")) {
              return newHosts = cmdSetInGroup(hosts, getGroupPart((args)[0]), getEntryPart((args)[0]), (args.slice(-1))[0]);
            } else {
              return newHosts = cmdSetGroup(hosts, getGroupPart((args)[0]), (args.slice(-1))[0]);
            }
          })();
        } else {
          return newHosts = cmdSetNoGroup(hosts, (args)[0], (args.slice(-1))[0]);
        }
      })();
      console.log(newHosts);
      return writeToFile(fileName, newHosts);
    }
  })();
});


var split = (function(a, b) {
  return a.split(b);
});

var map = (function(a, b) {
  return a.map(b);
});

var filter = (function(a, b) {
  return a.filter(b);
});

var tail = (function(a) {
  return a.slice(1);
});

var head = (function(a) {
  return (function() {
    if ((a === undefined)) {
      return [  ];
    } else {
      return (a)[0];
    }
  })();
});

var join = (function(a, b) {
  return b.join(a);
});

var indexOf = (function(a, b) {
  return a.indexOf(b);
});

var isGroupPart = (function(entry) {
  return (function() {
    if ((entry.indexOf("::") !== -1)) {
      return true;
    } else {
      return false;
    }
  })();
});

var getGroupPart = (function(entry) {
  return head(entry.split("::"));
});

var getEntryPart = (function(entry) {
  return head(tail(entry.split("::")));
});

var push = (function(a, b) {
  a.push(b);
  return a;
});

var pushFront = (function(a, b) {
  a.unshift(b);
  return a;
});

var hostsToString = (function(hosts) {
  return (function() {
    if ((hosts.length === 0)) {
      return "";
    } else {
      return (((head(hosts)).join(" ") + "\n") + hostsToString(tail(hosts)));
    }
  })();
});

var writeToFile = (function(fileName, hosts) {
  return fs.writeFileSync(fileName, hostsToString(hosts));
});


var cmdEnableEnableEntry = (function(line) {
  return (function() {
    if (((line)[0] === "#")) {
      return tail(line);
    } else {
      return line;
    }
  })();
});

var cmdEnableGroup = (function(hosts, group, inGroup) {
  if (arguments.length < 3)
    var inGroup = undefined;
  
  (function() {
    if ((!inGroup)) {
      return inGroup = false;
    }
  })();
  return (function() {
    if ((hosts.length === 0)) {
      return [  ];
    } else {
      return (function() {
        if (inGroup) {
          return (function() {
            if ((((hosts)[0])[0] === "#====")) {
              return pushFront(cmdEnableGroup(tail(hosts), group, false), (hosts)[0]);
            } else {
              return pushFront(cmdEnableGroup(tail(hosts), group, inGroup), cmdEnableEnableEntry((hosts)[0]));
            }
          })();
        } else {
          return (function() {
            if (((((hosts)[0])[0] === "#====") && ((tail((hosts)[0]))[0] === group))) {
              return pushFront(cmdEnableGroup(tail(hosts), group, true), (hosts)[0]);
            } else {
              return pushFront(cmdEnableGroup(tail(hosts), group, inGroup), (hosts)[0]);
            }
          })();
        }
      })();
    }
  })();
});

var cmdEnableGroupEntry = (function(hosts, group, entry, inGroup, done) {
  if (arguments.length < 5)
    var done = inGroup, inGroup = undefined;
  if (arguments.length < 4)
    var done = undefined;
  
  (function() {
    if ((!inGroup)) {
      return inGroup = false;
    }
  })();
  (function() {
    if ((!done)) {
      return done = false;
    }
  })();
  return (function() {
    if ((hosts.length === 0)) {
      return [  ];
    } else {
      return (function() {
        if (inGroup) {
          return (function() {
            if ((((hosts)[0])[0] === "#====")) {
              return pushFront(cmdEnableGroupEntry(tail(hosts), group, entry, false, done), head(hosts));
            } else {
              return (function() {
                if (((done === true) || (indexOf(head(hosts), entry) === -1))) {
                  return pushFront(cmdEnableGroupEntry(tail(hosts), group, entry, inGroup, done), head(hosts));
                } else {
                  return pushFront(cmdEnableGroupEntry(tail(hosts), group, entry, inGroup, true), cmdEnableEnableEntry((hosts)[0]));
                }
              })();
            }
          })();
        } else {
          return (function() {
            if (((((hosts)[0])[0] === "#====") && ((tail((hosts)[0]))[0] === group))) {
              return pushFront(cmdEnableGroupEntry(tail(hosts), group, entry, true, done), head(hosts));
            } else {
              return pushFront(cmdEnableGroupEntry(tail(hosts), group, entry, inGroup, done), head(hosts));
            }
          })();
        }
      })();
    }
  })();
});

var cmdEnableEntry = (function(hosts, entry, done) {
  if (arguments.length < 3)
    var done = undefined;
  
  (function() {
    if ((!done)) {
      return done = false;
    }
  })();
  return (function() {
    if ((hosts.length === 0)) {
      return [  ];
    } else {
      return (function() {
        if (((done === true) || (indexOf(head(hosts), entry) === -1))) {
          return pushFront(cmdEnableEntry(tail(hosts), entry, done), (hosts)[0]);
        } else {
          return pushFront(cmdEnableEntry(tail(hosts), entry, true), cmdEnableEnableEntry((hosts)[0]));
        }
      })();
    }
  })();
});

var cmdEnableSingle = (function(hosts, fileName, entry) {
  return (function() {
    if (isGroupPart(entry)) {
      return (function() {
        if ((getEntryPart(entry) === "")) {
          return cmdEnableGroup(hosts, getGroupPart(entry));
        } else {
          return cmdEnableGroupEntry(hosts, getGroupPart(entry), getEntryPart(entry));
        }
      })();
    } else {
      return cmdEnableEntry(hosts, entry);
    }
  })();
});

var cmdEnable = (function(hosts, fileName, entries) {
  return (function() {
    if ((entries.length === 0)) {
      console.log(hosts);
      return writeToFile(fileName, hosts);
    } else {
      return (function() {
        if ((entries.length === 0)) {
          return null;
        } else {
          return cmdEnable(cmdEnableSingle(hosts, fileName, (entries)[0]), fileName, tail(entries));
        }
      })();
    }
  })();
});


var split = (function(a, b) {
  return a.split(b);
});

var map = (function(a, b) {
  return a.map(b);
});

var filter = (function(a, b) {
  return a.filter(b);
});

var tail = (function(a) {
  return a.slice(1);
});

var head = (function(a) {
  return (function() {
    if ((a === undefined)) {
      return [  ];
    } else {
      return (a)[0];
    }
  })();
});

var join = (function(a, b) {
  return b.join(a);
});

var indexOf = (function(a, b) {
  return a.indexOf(b);
});

var isGroupPart = (function(entry) {
  return (function() {
    if ((entry.indexOf("::") !== -1)) {
      return true;
    } else {
      return false;
    }
  })();
});

var getGroupPart = (function(entry) {
  return head(entry.split("::"));
});

var getEntryPart = (function(entry) {
  return head(tail(entry.split("::")));
});

var push = (function(a, b) {
  a.push(b);
  return a;
});

var pushFront = (function(a, b) {
  a.unshift(b);
  return a;
});

var hostsToString = (function(hosts) {
  return (function() {
    if ((hosts.length === 0)) {
      return "";
    } else {
      return (((head(hosts)).join(" ") + "\n") + hostsToString(tail(hosts)));
    }
  })();
});

var writeToFile = (function(fileName, hosts) {
  return fs.writeFileSync(fileName, hostsToString(hosts));
});


var cmdDisableDisableEntry = (function(line) {
  return (function() {
    if (((line)[0] === "#")) {
      return line;
    } else {
      return pushFront(line, "#");
    }
  })();
});

var cmdDisableGroup = (function(hosts, group, inGroup) {
  if (arguments.length < 3)
    var inGroup = undefined;
  
  (function() {
    if ((!inGroup)) {
      return inGroup = false;
    }
  })();
  return (function() {
    if ((hosts.length === 0)) {
      return [  ];
    } else {
      return (function() {
        if (inGroup) {
          return (function() {
            if ((((hosts)[0])[0] === "#====")) {
              return pushFront(cmdDisableGroup(tail(hosts), group, false), (hosts)[0]);
            } else {
              return pushFront(cmdDisableGroup(tail(hosts), group, inGroup), cmdDisableDisableEntry((hosts)[0]));
            }
          })();
        } else {
          return (function() {
            if (((((hosts)[0])[0] === "#====") && ((tail((hosts)[0]))[0] === group))) {
              return pushFront(cmdDisableGroup(tail(hosts), group, true), (hosts)[0]);
            } else {
              return pushFront(cmdDisableGroup(tail(hosts), group, inGroup), (hosts)[0]);
            }
          })();
        }
      })();
    }
  })();
});

var cmdDisableGroupEntry = (function(hosts, group, entry, inGroup, done) {
  if (arguments.length < 5)
    var done = inGroup, inGroup = undefined;
  if (arguments.length < 4)
    var done = undefined;
  
  (function() {
    if ((!inGroup)) {
      return inGroup = false;
    }
  })();
  (function() {
    if ((!done)) {
      return done = false;
    }
  })();
  return (function() {
    if ((hosts.length === 0)) {
      return [  ];
    } else {
      return (function() {
        if (inGroup) {
          return (function() {
            if ((((hosts)[0])[0] === "#====")) {
              return pushFront(cmdDisableGroupEntry(tail(hosts), group, entry, false, done), head(hosts));
            } else {
              return (function() {
                if (((done === true) || (indexOf(head(hosts), entry) === -1))) {
                  return pushFront(cmdDisableGroupEntry(tail(hosts), group, entry, inGroup, done), head(hosts));
                } else {
                  return pushFront(cmdDisableGroupEntry(tail(hosts), group, entry, inGroup, true), cmdDisableDisableEntry((hosts)[0]));
                }
              })();
            }
          })();
        } else {
          return (function() {
            if (((((hosts)[0])[0] === "#====") && ((tail((hosts)[0]))[0] === group))) {
              return pushFront(cmdDisableGroupEntry(tail(hosts), group, entry, true, done), head(hosts));
            } else {
              return pushFront(cmdDisableGroupEntry(tail(hosts), group, entry, inGroup, done), head(hosts));
            }
          })();
        }
      })();
    }
  })();
});

var cmdDisableEntry = (function(hosts, entry, done) {
  if (arguments.length < 3)
    var done = undefined;
  
  (function() {
    if ((!done)) {
      return done = false;
    }
  })();
  return (function() {
    if ((hosts.length === 0)) {
      return [  ];
    } else {
      return (function() {
        if (((done === true) || (indexOf(head(hosts), entry) === -1))) {
          return pushFront(cmdDisableEntry(tail(hosts), entry, done), (hosts)[0]);
        } else {
          return pushFront(cmdDisableEntry(tail(hosts), entry, true), cmdDisableDisableEntry((hosts)[0]));
        }
      })();
    }
  })();
});

var cmdDisableSingle = (function(hosts, fileName, entry) {
  return (function() {
    if (isGroupPart(entry)) {
      return (function() {
        if ((getEntryPart(entry) === "")) {
          return cmdDisableGroup(hosts, getGroupPart(entry));
        } else {
          return cmdDisableGroupEntry(hosts, getGroupPart(entry), getEntryPart(entry));
        }
      })();
    } else {
      return cmdDisableEntry(hosts, entry);
    }
  })();
});

var cmdDisable = (function(hosts, fileName, entries) {
  return (function() {
    if ((entries.length === 0)) {
      console.log(hosts);
      return writeToFile(fileName, hosts);
    } else {
      return (function() {
        if ((entries.length === 0)) {
          return null;
        } else {
          return cmdDisable(cmdDisableSingle(hosts, fileName, (entries)[0]), fileName, tail(entries));
        }
      })();
    }
  })();
});


var split = (function(a, b) {
  return a.split(b);
});

var map = (function(a, b) {
  return a.map(b);
});

var filter = (function(a, b) {
  return a.filter(b);
});

var tail = (function(a) {
  return a.slice(1);
});

var head = (function(a) {
  return (function() {
    if ((a === undefined)) {
      return [  ];
    } else {
      return (a)[0];
    }
  })();
});

var join = (function(a, b) {
  return b.join(a);
});

var indexOf = (function(a, b) {
  return a.indexOf(b);
});

var isGroupPart = (function(entry) {
  return (function() {
    if ((entry.indexOf("::") !== -1)) {
      return true;
    } else {
      return false;
    }
  })();
});

var getGroupPart = (function(entry) {
  return head(entry.split("::"));
});

var getEntryPart = (function(entry) {
  return head(tail(entry.split("::")));
});

var push = (function(a, b) {
  a.push(b);
  return a;
});

var pushFront = (function(a, b) {
  a.unshift(b);
  return a;
});

var hostsToString = (function(hosts) {
  return (function() {
    if ((hosts.length === 0)) {
      return "";
    } else {
      return (((head(hosts)).join(" ") + "\n") + hostsToString(tail(hosts)));
    }
  })();
});

var writeToFile = (function(fileName, hosts) {
  return fs.writeFileSync(fileName, hostsToString(hosts));
});


var cmdList = (function(hosts) {
  return console.log(hosts);
});


var split = (function(a, b) {
  return a.split(b);
});

var map = (function(a, b) {
  return a.map(b);
});

var filter = (function(a, b) {
  return a.filter(b);
});

var tail = (function(a) {
  return a.slice(1);
});

var head = (function(a) {
  return (function() {
    if ((a === undefined)) {
      return [  ];
    } else {
      return (a)[0];
    }
  })();
});

var join = (function(a, b) {
  return b.join(a);
});

var indexOf = (function(a, b) {
  return a.indexOf(b);
});

var isGroupPart = (function(entry) {
  return (function() {
    if ((entry.indexOf("::") !== -1)) {
      return true;
    } else {
      return false;
    }
  })();
});

var getGroupPart = (function(entry) {
  return head(entry.split("::"));
});

var getEntryPart = (function(entry) {
  return head(tail(entry.split("::")));
});

var push = (function(a, b) {
  a.push(b);
  return a;
});

var pushFront = (function(a, b) {
  a.unshift(b);
  return a;
});

var hostsToString = (function(hosts) {
  return (function() {
    if ((hosts.length === 0)) {
      return "";
    } else {
      return (((head(hosts)).join(" ") + "\n") + hostsToString(tail(hosts)));
    }
  })();
});

var writeToFile = (function(fileName, hosts) {
  return fs.writeFileSync(fileName, hostsToString(hosts));
});


var help = "Usage : ./hosts <cmd> ...\n" +
"\n" +
"  \tget     (<group::> | <group::item> | <item> ...)\n" +
"  \tset     (<group::> | <group::item> | <item>) <value>\n" +
"  \tcreate  <group>\n" +
"  \tenable  (<group::> | <group::item> | <item> ...)\n" +
"  \tdisable (<group::> | <group::item> | <item> ...)\n" +
"  \tlist\n" +
"  \thelp\n" +
"  ";
var cmdHelp = (function() {
  return console.log(help);
});


var split = (function(a, b) {
  return a.split(b);
});

var map = (function(a, b) {
  return a.map(b);
});

var filter = (function(a, b) {
  return a.filter(b);
});

var tail = (function(a) {
  return a.slice(1);
});

var head = (function(a) {
  return (function() {
    if ((a === undefined)) {
      return [  ];
    } else {
      return (a)[0];
    }
  })();
});

var join = (function(a, b) {
  return b.join(a);
});

var indexOf = (function(a, b) {
  return a.indexOf(b);
});

var isGroupPart = (function(entry) {
  return (function() {
    if ((entry.indexOf("::") !== -1)) {
      return true;
    } else {
      return false;
    }
  })();
});

var getGroupPart = (function(entry) {
  return head(entry.split("::"));
});

var getEntryPart = (function(entry) {
  return head(tail(entry.split("::")));
});

var push = (function(a, b) {
  a.push(b);
  return a;
});

var pushFront = (function(a, b) {
  a.unshift(b);
  return a;
});

var hostsToString = (function(hosts) {
  return (function() {
    if ((hosts.length === 0)) {
      return "";
    } else {
      return (((head(hosts)).join(" ") + "\n") + hostsToString(tail(hosts)));
    }
  })();
});

var writeToFile = (function(fileName, hosts) {
  return fs.writeFileSync(fileName, hostsToString(hosts));
});


var cmdCreateSingle = (function(hosts, group, exists__QUERY) {
  if (arguments.length < 3)
    var exists__QUERY = undefined;
  
  (function() {
    if ((!exists__QUERY)) {
      return exists__QUERY = false;
    }
  })();
  return (function() {
    if ((hosts.length === 0)) {
      return (function() {
        if ((exists__QUERY === true)) {
          return [  ];
        } else {
          return [ [ "#====", group ], [ "#====" ] ];
        }
      })();
    } else {
      return (function() {
        if (((((hosts)[0])[0] === "#====") && ((tail((hosts)[0]))[0] === group))) {
          return pushFront(cmdCreateSingle(tail(hosts), group, true), head(hosts));
        } else {
          return pushFront(cmdCreateSingle(tail(hosts), group, exists__QUERY), head(hosts));
        }
      })();
    }
  })();
});

var cmdCreate = (function(hosts, fileName, groups) {
  return (function() {
    if ((groups.length === 0)) {
      console.log(hosts);
      return writeToFile(fileName, hosts);
    } else {
      return cmdCreate(cmdCreateSingle(hosts, (groups)[0]), fileName, tail(groups));
    }
  })();
});


var fs = require("fs");
var hostsFilePath = "/etc/hosts";
var getHosts = (function(fileName) {
  var lineToArray = (function(line) {
    return filter(split(line.replace(/\t/g, " "), " "), (function(val) {
      return (val !== "");
    }));
  });
  ;
  var openAndSplit = (function(fileName, splitter) {
    return split(fs.readFileSync(fileName, "ascii"), splitter);
  });
  ;
  var splitWordsInArray = (function(arr) {
    return filter(map(arr, lineToArray), (function(val) {
      return (val.length !== 0);
    }));
  });
  ;
  return splitWordsInArray(openAndSplit(fileName, "\n"));
});

var getOptions = (function(argv) {
  var cleanArgv = (function(argv) {
    return tail(tail(argv));
  });
  ;
  var getCmd = (function(argv) {
    return head(cleanArgv(argv));
  });
  ;
  var getArgs = (function(argv) {
    return tail(cleanArgv(argv));
  });
  ;
  return {
    "cmd": getCmd(argv),
    "args": getArgs(argv)
  };
});

(function() {
  var hosts = getHosts(hostsFilePath);
  var options = getOptions(process.argv);
  return (function() {
    switch((options)["cmd"]) {
    case "get":
      return cmdGet(hosts, (options)["args"]);
    
    case "set":
      return cmdSet(hosts, hostsFilePath, (options)["args"]);
    
    case "create":
      return cmdCreate(hosts, hostsFilePath, (options)["args"]);
    
    case "enable":
      return cmdEnable(hosts, hostsFilePath, (options)["args"]);
    
    case "disable":
      return cmdDisable(hosts, hostsFilePath, (options)["args"]);
    
    case "list":
      return cmdList(hosts);
    
    default:
      return cmdHelp();
    }
  })();
})()
