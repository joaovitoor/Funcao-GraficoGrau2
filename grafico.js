
    function f(ctxR, x, d, e, j)
    {
        var result = yt(d*(Math.pow(x,2))+(e*x)+(j*1));
       
        return result

    }

    function arcoRaiz(ctxArco, xr){
        ctxArco.beginPath();
        ctxArco.arc(xr*25,0,5,0,2*Math.PI);
        ctxArco.stroke();
        ctxArco.closePath();
    }
    function arcoVertice(ctxVert,xv,yv){
        ctxVert.beginPath();
        ctxVert.arc(xv*25,(-(yv*5)/2),5,0,2*Math.PI);
        ctxVert.stroke();
        
        ctxVert.font = "15px Arial";
        ctxVert.fillText(['Vertíce',xv,yv],xv+50,yv+50);
        ctxVert.closePath();
    }
    function yt(y)
    {
        return -5*y/2;
    }

    function xt(x)
    {
        return 25*x;
    }

    
    function grafico1() 
    {
        let a = document.getElementById("a");
        let b = document.getElementById("b");
        let c = document.getElementById("c");
        /*let x1 = document.getElementById("x1");
        let x2 = document.getElementById("x2"); 
        Não sei porque, mas não consegui usar como raízes para a marcação dos arcos "x1" e "x2".
        */

        let coef1 = parseInt(a.value);
        let coef2 = parseInt(b.value);
        let coef3 = parseInt(c.value);
        
        let vdelta = ((Math.pow(coef2,2))-4*coef1*coef3);
        let bhskara1 = ((-(coef2)+(Math.sqrt(vdelta)))/(2*coef1));
        let bhskara2 = ((-(coef2)-(Math.sqrt(vdelta)))/(2*coef1));
        
        var raiz1 = bhskara1;
        var raiz2 = bhskara2;
        // Calculando novamente as raízes da equação.
       
        var minmax1 = -(coef2)/(2*coef1); 
        var minmax2 = -(vdelta)/(4*coef1);
        // Calculando x e y do vertice.

        var canvas, ctx, w, h;
        w = 500;
        h = 500;
        canvas = document.getElementById("canvas1");
        ctx = canvas.getContext("2d");
        var x0 = -10;
        var xf = 10;
        var y0 = -100;
        var yf = 100;
        var dx = 0.1;
        var x = x0;
        ctx.save();
        ctx.translate(250, 250);
       
        ctx.beginPath();
        ctx.moveTo(xt(x0), yt(0));
        ctx.lineTo(xt(xf), yt(0));
        ctx.moveTo(xt(0), yt(y0));
        ctx.lineTo(xt(0), yt(yf));
        ctx.stroke();
        ctx.closePath();
        // Criando eixo x e y

        var i = -10;
        ctx.beginPath()
        while (x<xf){
            ctx.moveTo(xt(x),yt(5));
            ctx.lineTo(xt(x),yt(-5));
            ctx.stroke();
            ctx.fillText(i,xt(x),yt(0));
            i+=1;
            x+=1;
        }
        ctx.closePath();
        // Criando numeração no eixo x
        
        x0 = -10;
        xf = 10;
        y0 = -100;
        yf = 100;
        dx = 0.1;
        x = x0;
        ctx.beginPath();
        ctx.moveTo(xt(x), f(ctx,x,coef1,coef2,coef3))
        x+= dx;
        while(x<xf){
            ctx.lineTo(xt(x), f(ctx,x,coef1,coef2,coef3));
            
            x+= dx;
        }
        ctx.stroke();
        // criando grafico
        
        arcoRaiz(ctx,raiz1);
        arcoRaiz(ctx,raiz2);
        arcoVertice(ctx,minmax1,minmax2);
        // Marcando Raízes e vertice

        ctx.restore();
        
        
       
    }
function limpar(){
    c = document.getElementById("canvas1");
    ctx = c.getContext("2d");
    ctx.clearRect(xt(-10),xt(0),500,500);
    ctx.clearRect(xt(10),xt(0),500,500);
}
