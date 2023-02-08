AFRAME.registerComponent("terrain_map_rotation", {
    schema: {
        speed_rotation: {type:"number", default:0}
    },
    init: function(){
        window.addEventListener("keydown", (e) =>{
            if(e.key == "ArrowLeft"){
                if(this.data.speed_rotation > -0.1){
                    this.data.speed_rotation = this.data.speed_rotation +0.01;
                }
            }
            if(e.key == "ArrowRight"){
                if(this.data.speed_rotation < 0.1){
                    this.data.speed_rotation = this.data.speed_rotation + 0.01
                }
            }

        })
    },
    tick: function(){
        var map_rotation = this.el.getAttribute("rotation")
        map_rotation.y += this.data.speed_rotation
        this.el.setAttribute("rotation", {
            x: map_rotation.x,
            y: map_rotation.y,
            z:map_rotation.z
        });

    }
});
AFRAME.registerComponent("diver_rotation", {
    schema: {
        move_rotation: {type:"number", default:0},
        move_position: {type:"number", default:0}
    },
    init: function(){
        window.addEventListener("keydown", (e) =>{
            this.data.move_rotation = this.el.getAttribute("rotation")
            this.data.move_position = this.el.getAttribute("position")
            var diver_rotation = this.data.move_rotation
            var diver_position =  this.data.move_position
            if(e.key == "ArrowRight"){
                if(diver_rotation.x < 10){
                    diver_rotation.x = diver_rotation.x + 0.05
                    this.el.setAttribute("rotation", diver_rotation)
                }
            }
            if(e.key == "ArrowLeft"){
                if(diver_rotation.x > -10){
                    diver_rotation.x = diver_rotation.x - 0.05
                    this.el.setAttribute("rotation", diver_rotation)
                }
            }
            if(e.key == "ArrowUp"){
                if(diver_rotation.z < 20){
                    diver_rotation.z = diver_rotation.z + 0.05
                    this.el.setAttribute("rotation", diver_rotation)
                }
                if(diver_position.y < 2){
                    diver_position.y = diver_position.y + 0.05
                    this.el.setAttribute("position", diver_position)
                }

            }
            if(e.key == "ArrowDown"){
                if(diver_rotation.z > -20){
                    diver_rotation.z = diver_rotation.z + 0.05
                    this.el.setAttribute("rotation", diver_rotation)
                }
                if(diver_position.x > -2){
                    diver_position.x = diver_position.x + 0.05
                    this.el.setAttribute("position", diver_position)
                }
            }
        })
    }
})