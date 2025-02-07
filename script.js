	setInterval(function() {
            let randomAngle = Math.floor(Math.random() * 360);
            document.body.style.background = `linear-gradient(${randomAngle}deg, black, white)`;
        }, 2000);
