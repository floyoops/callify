console.log('callify', 'started');

// Config
const cfg_ipPhone = '192.168.5.175';
const cfg_passCode = 'admin123';

// App
const appName = 'Callify';
const idMenuC2C = 'm_c2c';

// Send the request to device.
function requestCall(ipPhone, passCode, phoneNumber) {
  return new Promise((resolve, reject) => {
    const urlPhone = `http://${ipPhone}/cgi-bin/api-make_call?passcode=${passCode}&phonenumber=${phoneNumber}`;
    const request = new Request(urlPhone);
    fetch(request)
      .then(response => {
        console.log('callify', 'response', response);
        resolve(response);
      }).catch((e) => {
        reject(e);
    });
  });
}

// Init item menu.
browser.contextMenus.create({
  id: idMenuC2C,
  title: appName
});

// Check text selected and send the call.
browser.contextMenus.onClicked.addListener((info, tab) => {
  console.log('callify', 'menu clicked !');
  const phoneNumber = info.selectionText;
  console.log(appName, 'phoneNumber', phoneNumber);
  requestCall(cfg_ipPhone, cfg_passCode, phoneNumber)
    .then(() => {
      console.log('success send call');
    })
    .catch((e) => {
      console.log('error send call', e);
    });

});
