document.getElementById("cam_but").addEventListener("click", function(event){
    event.preventDefault()
    let st=document.getElementById("cam_but");
    let state = st.getAttribute("name");
    if(state.localeCompare("stop")==0)
    {
        st.setAttribute("name","start");
        let cm_fm = document.getElementById("cam_frame");
        const startIp = 1;
        const endIp = 5;
        const ipBase = "192.168.4.";
        let sucessIP = "badluck";
        console.log("test");
            for (let i = startIp; i <= endIp; i++) {
                const ipAddress = ipBase + i;
                const xhr = new XMLHttpRequest();
                xhr.open("GET", `http://${ipAddress}`, true);
                xhr.timeout = 1000;
                xhr.onload = function () {
                if (xhr.status >= 200) {
                //  console.log(`Response from ${ipAddress}`);
                console.log(sucessIP);
                sucessIP=ipAddress;
                } else {
                //  console.log(`No response from ${ipAddress}`);
                console.log(sucessIP);
                }
                };
                xhr.onerror = function () {
                // console.log(`Error pinging ${ipAddress}`);
                sucessIP=ipAddress;
                console.log(sucessIP);
                };
                xhr.ontimeout = function () {
                // console.log(`Timeout pinging ${ipAddress}`);
                console.log(sucessIP);
                };
                xhr.send();
            }
       let df = document.getElementById("cam_frame");
       gh.setAttribute("src","http://"+sucessIP)



    }
    else{
        let df = document.getElementById("cam_frame");
       gh.setAttribute("src","")
        st.setAttribute("name","stop")
    }
    var password=document.getElementById("password").value
    localStorage.setItem("unaem", username);
    submit(username,password)
  });

