let y=0;
let x=0;

let personaje = document.getElementById('personaje');
function movder(){
    x+=50;
    personaje.style.left = x+'px';
    personaje.src = 'personaje/p-right.png';
    console.log(`x = ${x}`);
}
function movizq(){
    x-=50;
    personaje.style.left = x+'px';
    personaje.src = 'personaje/p-left.png';
    console.log(`x = ${x}`);
}
function movarr(){
    y+=50;
    personaje.style.bottom = y+'px';
    console.log(`y = ${y}`);
}
function movaba(){
    y-=50;
    personaje.style.bottom = y+'px';
    console.log(`y = ${y}`);
}


function mover(event){
    if (event.key ==='d' || event.key ==='a'){
        if (x<=700 || x>=900){
            if (x<700 || x>900){
                if (event.key ==='d'){
                    movder();
                }
                if (event.key ==='a'){
                    movizq();
                }
            }
            if (x==700){
                if (event.key ==='a'){
                    movizq();
                }
                if (event.key ==='d'){
                    if(y>=100){
                        movder();
                    }
                } 
            }
            if (x==900){
                if (event.key ==='a'){
                    if(y>=100){
                    movizq();
                    }
                }
                if (event.key ==='d'){
                        movder();
                }
            } 
        }
        else{
            if(y>=100){
                if (event.key ==='a'){
                    movizq();
                }
                if (event.key ==='d'){
                    movder();
                }
            }
        }
    }

    if (event.key ==='w' || event.key ==='s'){
        if (event.key ==='w'){
            movarr();     
        }
    }
    if (event.key ==='s'){
        if (x<=700 || x>=900){
            if (y>50) movaba();
        }
        else{
            if (y>100) movaba();

        }
        
    }
}

window.onkeydown = mover;

