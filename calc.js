function soma(){
    let a = document.getElementById("a");
    let b = document.getElementById("b");
    let c = document.getElementById("c");
    let x1 = document.getElementById("x1");
    let x2 = document.getElementById("x2");
    let resultado2 = document.getElementById("resultado2");
    
   
    let va = parseInt(a.value);
    let vb = parseInt(b.value);
    let vc = parseInt(c.value);
    let vdelta = ((Math.pow(vb,2))-4*va*vc);
    
    if(vdelta>0){
        let bhskara1 = ((-(vb)+(Math.sqrt(vdelta)))/(2*va));
        let bhskara2 = ((-(vb)-(Math.sqrt(vdelta)))/(2*va));
        x1.textContent = bhskara1;
        x2.textContent = bhskara2;
        
    }
    if(vdelta<0){
        resultado2.textContent = "NÃO EXISTE RAIZ REAL";
    }
    if(vdelta==0){
        let bhskara = (-(vb)/(2*va));
        resultado2.textContent = "Tem uma raíz real"+bhskara;
    }
    
    
    
}