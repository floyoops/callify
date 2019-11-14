console.log('callify', 'started');
browser.contextMenus.create({"title": "Callify"});
browser.contextMenus.onClicked.addListener((info, tab) => {
  console.log('callify', 'menu clicked !');
  console.log('selectionText', info.selectionText);
  const ipPhone = '192.168.5.175';
  const passCode = 'admin123';
  const phoneNumber = info.selectionText;
  const urlPhone = `http://${ipPhone}/cgi-bin/api-make_call?passcode=${passCode}&phonenumber=${phoneNumber}`;
  const request = new Request(urlPhone);
  console.log('callify', 'request', request);
  fetch(request)
    .then(response => {
      console.log('callify', 'response', response);
    });
});
