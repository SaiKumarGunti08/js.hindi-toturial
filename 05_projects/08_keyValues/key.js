const div=document.getElementById('container')

window.addEventListener('keydown',(e)=>{
div.innerHTML=

    `<table>
  <tr>
    <th>Key</th>
    <th>keyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key===" " ? "space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table> ` 
})