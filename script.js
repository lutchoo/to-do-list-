//-------------------------------- compteur de tache: conterVal = tache enregistrer , validtask = tache valider----------------------
let counterVal = 0;
let validtask = 0;

// -------------------------------button ajouter une tache: qui cree 3 bouttons + la tache renter dans l'input-----------------------
let btn = document.querySelector('#btn');
btn.addEventListener('click', function(){
    let li = document.querySelector('#list').value;
    updateDisplay(++counterVal);
    console.log(li);
    let title = document.createElement('article');
    title.innerText = (li);
    let root = document.querySelector('#root');
    root.appendChild(title)
    //function pour actualiser le comteur de tache en cour pour le bouton remove et le bouton ajouter une tache-------------------------------
    function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;    
    }
    //------------------------------------creation du bouton remove-------------------------------------------------------------
    let button = document.createElement("button");
    //button.innerText= ("X");
    button.className = "one"
    let left = document.querySelector("#left")
    left.appendChild(button)
    button.addEventListener("click", function(){
        //fonction pour actualiser le comteur de tache fini pour le bouton remove-------------------------------
        function updatDisplay(valU) {
            document.getElementById("valid-task").innerText = valU;
        }
        title.remove()
        buton.remove()
        button.remove()
        button_3.remove()
        if(buton.style.backgroundColor == "white" ){ 
        updateDisplay(--counterVal)
        }else {
            updatDisplay(--validtask)
            updateDisplay(--counterVal)
        }
        //console.log(validtask)
    })
    // ----------------------------------------------------------------creation du bouton valider------------------------------------
    let buton = document.createElement("button");
    buton.style.backgroundColor = "white"
    buton.className = "two"
    let right = document.querySelector("#right")
    right.appendChild(buton)
    buton.addEventListener("click",function(){
        //fonction pour update le comteur de tache fini pour le bouton valider  ---------------------------------------
        function updatDisplay(valU) {
            document.getElementById("valid-task").innerHTML = valU;
        }
        if(title.style.color =="red" && title.style.textDecoration == "line-through"){
            updatDisplay(--validtask);
            title.style.color = "black"
            title.style.textDecoration = "none"
            buton.style.backgroundColor = "white"
        }else{
            updatDisplay(++validtask);
            title.style.color = "red"
            title.style.textDecoration = "line-through"
            buton.style.backgroundColor = "green"
        }
    })
    //------------------------------------------------------------creation du bouton modifier------------------------------------------
    let button_3 = document.createElement("button");
    button_3.innerText= ("Modifier");
    button_3.className = "three"
    title.appendChild(button_3)
    button_3.addEventListener("click",function(){
        let update = prompt('modifier le texte')
        title.firstChild.replaceWith(update)
        //titre.replaceWith(update)
        //console.log(titre)
    })
    
}) 
