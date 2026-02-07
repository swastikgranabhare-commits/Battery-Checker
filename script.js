navigator.getBattery().then(function(battery) {
            function updateBattery() {
                const level = Math.floor(battery.level * 100);
                document.getElementById('level').style.width = level + '%';
                document.getElementById('info').innerText =
                    `Battery Level: ${level}% ${battery.charging ? "(Charging)" : ""}`;
            }

            updateBattery();

            battery.addEventListener('levelchange', updateBattery); 
            battery.addEventListener('chargingchange', updateBattery); 
        });