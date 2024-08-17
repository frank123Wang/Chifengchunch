

function processFormData() {
  const numberElement = document.getElementById('number');
  const number = numberElement.value;
  
  
  
  var requestURL = 'https://sheets.googleapis.com/v4/spreadsheets/165HaBQcIjOSR6CyqrfV17MKvKbJxVMGpnYykUTCUQwI/values/sheet1?alt=json&key=AIzaSyABXORNjvgs0YuO43pOlOsNzIgvQKOJz_A';
  var request = new XMLHttpRequest();
  request.open('get', requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
  console.log(request.response) 
  
  console.log(request.response.values[number]);
  alert('對應的號碼/姓名 ' + request.response.values[number]);
  
  } /*座號顯示*/
   





}

function processFormName() {
  const nameElement = document.getElementById('name');
  const name = nameElement.value;
  
  
  
  var requestURL = 'https://sheets.googleapis.com/v4/spreadsheets/165HaBQcIjOSR6CyqrfV17MKvKbJxVMGpnYykUTCUQwI/values/sheet1?alt=json&key=AIzaSyABXORNjvgs0YuO43pOlOsNzIgvQKOJz_A';
  var request = new XMLHttpRequest();
  request.open('get', requestURL);
  request.responseType = 'json';
  
  request.send();
  
  request.onload = function() {
  console.log(request.response) //輸出全部
  
  for (i=1;i<152;i++)
  {
    if(request.response.values[i][1]==name) //依照輸入的名字 顯示對應的號碼
  {
    alert('對應的號碼是'+request.response.values[i][0])
  }
  }

  } 
   
  

}











