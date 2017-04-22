/**
 * Created by Administrator on 2017/3/26 0026.
 */

/*后台调用php数据使用*/

function ajax(method,url,data,funSuc,funFail) {

  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = ActiveXObject("Microsoft.XMLHTTP");
    /*XMLHTTP全部大写*/
  }

  if (method.toLowerCase() == "get") {
    xhr.open(method, url + "?" + data, true);
    /*xhr.open(method,url+"?"+data,true)*/
    xhr.send();
  } else if (method.toLowerCase() == "post") {

    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');

    xhr.open(method, url, true);

    xhr.send(data);
    /*对于post的提交方式，在打开中不使用？连接数据，只写url，数据是单独send的*/
  }


  xhr.onreadystatechange = function () {

    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        if (funSuc) {
          funSuc(xhr.responseText);
        }
      }
      else {

        if (funFail) {
          funFail(xhr.status)
        }
      }
    }
  }
}

