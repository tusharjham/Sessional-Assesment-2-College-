window.onload = function () {
  var x = new XMLHttpRequest();
  x.onload = function () {
    var json = JSON.parse(x.response);
    console.log(json);
    for (let i = 0; i < json.length; i++) {
      let ele = document.createElement("div");
      let heading = document.createElement("div");
      let content = document.createElement("div");
      heading.innerHTML = `<h4>${json[i].title}</h4>`;
      content.innerHTML = `<h5>${json[i].body}</h5>`;
      ele.style.cssText =
        "background-color:black;width:75vw;border:2px solid black;border-radius:10px 10px 10px 10px;margin-top:0.5rem";
      heading.style.cssText = "color:red";
      content.style.cssText = "color:whitesmoke";
      ele.appendChild(heading);
      ele.appendChild(content);
      document.getElementById("data").appendChild(ele);
    }
    console.log(typeof json[2].body);
  };
  x.open(
    "get",
    "https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09"
  );
  x.send();
};
