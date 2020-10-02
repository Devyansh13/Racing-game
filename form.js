class Form{
    constructor(){
        this.input=createInput("Name");
        this.button=createButton("Play");
        this.greeting=createElement("h2");
    }
hide(){
this.greeting.hide();
this.input.hide();
this.button.hide();
}

    display(){
        var title=createElement('h1');
        title.html("Racing Game");
        title.position(displayWidth/2-80,0);
        
        
        this.input.position(displayWidth/2-80,160);
        this.button.position(displayWidth/2-80,200);

        this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name=this.input.value();
        playerCount+=1;
        player.index=playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello "+player.name);
        this.greeting.position(130,160);
        }
        )
    }
}