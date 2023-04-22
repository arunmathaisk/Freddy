let cm_fm = document.getElementById("cam_frame");
        const startIp = 2;
        const endIp = 5;
        const ipBase = "192.168.4.";
        let sucessIP = "badluck";
        console.log("test");
        for (let i = startIp; i <= endIp; i++) {
                const ipAddress = ipBase + i;
                const xhr = new XMLHttpRequest();
                xhr.open("GET", `http://${ipAddress}`, true);
                xhr.timeout = 200;
                xhr.onload = function () {
                if (xhr.status >= 200) {
                //  console.log(`Response from ${ipAddress}`);
                // console.log(sucessIP);
                // sucessIP=ipAddress;
                // let df = document.getElementById("cam_frame");
                // df.setAttribute("src","http://"+sucessIP)
                } else {
                //  console.log(`No response from ${ipAddress}`);
                console.log(sucessIP);
                }
                };
                xhr.onerror = function () {
                sucessIP=ipAddress;
                console.log(sucessIP);
                let df = document.getElementById("cam_frame");
                df.setAttribute("src","http://"+sucessIP)
                };
                xhr.ontimeout = function () {
                // console.log(`Timeout pinging ${ipAddress}`);
                console.log(sucessIP);
                };
                xhr.send();
         }
