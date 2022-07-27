$(document).ready(function() {    
    function Minute(color, height, start,state) {
        this.color = color;
        this.height = height;
        this.start = start;
        this.state = state;
      }

      let days = new Array();
     for (let day = 0; day< 30; day++) {
        const container = document.querySelector("#chart-container");
        container.innerHTML += `
        <div class="day day${day}">
        <div class="date">
        ${day} jan
        </div>
        </div>
    `
    console.log("outer for")
        for (let index = 0; index < 50; index++) {
            const height = Math.floor(Math.random() * 100) + 1;
            const width = Math.floor(Math.random() * 30) + 1
            const newMinute = new Minute("red",`${height}%`,index,true);
            days.push(newMinute ); 
            document.querySelector(`.day${day}`).innerHTML += ` 
                                       
                                       <div class="minute" style="height:${newMinute.height}; width:${width}%">            
                                       </div>`;
                                      
                                       
          }

        
    }  
    
    
    });  
