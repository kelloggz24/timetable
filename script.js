function highlight(className){
    var element = document.getElementsByClassName(className);
    for(let i=0; i < element.length; i++){
        if(element[i].bgColor==="#ffd966"){
            element[i].bgColor="#d6d6d6";
        }else{element[i].bgColor="#ffd966"}
    }
}
const clname = ['NSI','Maths', 'PC', 'FR', 'Anglais', 'HG', 'Allemand', 'ES', 'EPS']
for(let j=0; j < clname.length; j++){
    var elmt = document.getElementsByClassName(clname[j]);
        for(let i=0; i < elmt.length; i++){
            elmt[i].addEventListener("mouseover", function(){highlight(clname[j])})
            elmt[i].addEventListener("mouseout", function(){highlight(clname[j])})
        }
    }

