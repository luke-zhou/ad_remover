var iframe_nodes = document.getElementsByTagName("iframe");
console.log("iframe num:"+iframe_nodes.length);
for (var i=0;i<iframe_nodes.length;) {
    //console.log(i+":"+iframe_nodes[i]);
    console.log(i+":"+iframe_nodes[i].nodeName);
    //console.log(i+":"+iframe_nodes[i].innerHTML);
    //console.log(i+":"+iframe_nodes[i].parentElement);
    console.log(i+":"+iframe_nodes[i].parentElement.nodeName);
    if(iframe_nodes[i].parentElement.nodeName=="DIV")
      {
        console.log(i+":"+iframe_nodes[i].parentElement.innerHTML);
        iframe_nodes[i].parentElement.remove();
        console.log(i+":remove parent");
      }
      else
        {
          console.log(i+":"+iframe_nodes[i].innerHTML);
        iframe_nodes[i].remove();
        console.log(i+":remove self");
        }

}
