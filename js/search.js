function search_gallery() { 
    let input = document.getElementById('searchbar').value 
    input= input.toLowerCase(); 
    let x = document.getElementsByTagName('A'); 
      

    for (i = 0; i < x.length; i++) {  
        if (x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="block"; 
            
        } 
        else { 
            x[i].style.display="none";                  
        } 
    } 
} 
console.log(document.getElementsByTagName('A')[11]);
