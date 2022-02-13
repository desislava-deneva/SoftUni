function createAssemblyLine(params) {

    return  {
        
        hasClima:(car) => {
            car.temp= 21;
            car. tempSettings= 21;
            car.adjustTemp = function () {
                return this.temp < this.tempSettings ? this.temp++ : this.temp--;
            }
        },

        hasAudio: (car)=> {
            car.currentTrack = {name : '', artist:''}

            car.nowPlaying = ()=> {
                if (car.currentTrack != null) {
                    console.log(`Now playing '${car.currentTrack.name}' by ${car.currentTrack.artist}`);
                }
            }
        },

        hasParktronic: (car) => {
            car.checkDistance = (distance)=>{
                if (distance < 0.1) {
                    return console.log("Beep! Beep! Beep!");
                }else if (distance >= 0.1 && distance < 0.25) {
                    return console.log("Beep! Beep!")
                }else if(distance >= 0.25 && distance< 0.50){
                    return console.log("Beep!");
                }else {
                    console.log("");
                }
            }
        }
    }
}