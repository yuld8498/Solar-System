//variables of page contents
let solarsystemImg =[];
let solarSystemParagraph = [];
let mercuryImg=[ "mercury1.jpg","mercury2.jpg","mercury3.jpg"] ;
let mercuryParagraph = ["The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon.",
"From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter. Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system.",
"Because of Mercury's elliptical - egg-shaped - orbit, and sluggish rotation, the Sun appears to rise briefly, set, and rise again from some parts of the planet's surface. The same thing happens in reverse at sunset."
];
let venusImg=["venus.jpg","https://solarsystem.nasa.gov/internal_resources/5363","venus3.png"];
let venusParagraph = ["Venus is the second planet from the Sun and is Earth's closest planetary neighbor. It's often called Earth's twin because it's similar in size and density. These are not identical twins, however - there are radical differences between the two worlds.",
"Venus has a thick, toxic atmosphere filled with carbon dioxide and it's perpetually shrouded in thick, yellowish clouds of sulfuric acid that trap heat, causing a runaway greenhouse effect.  ",
"It's the hottest planet in our solar system, even though Mercury is closer to the Sun. Surface temperatures on Venus are about 900 degrees Fahrenheit (475 degrees Celsius) - hot enough to melt lead.Venus has crushing air pressure at its surface - more than 90 times that of Earth - similar to the pressure you'd encounter a mile below the ocean on Earth.Another big difference from Earth - Venus rotates on its axis backward, compared to most of the other planets in the solar system. This means that, on Venus, the Sun rises in the west and sets in the east, opposite to what we experience on Earth.Venus was the first planet to be explored by a spacecraft"
]
let earthImg = ["earth1.jpg","earth2.jpg","earth3.jpg"];
let earthParagraph = ["Our home planet is the third planet from the Sun, and the only place we know of so far that's inhabited by living things.",
"While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal.",
"The name Earth is at least 1,000 years old. All of the planets, except for Earth, were named after Greek and Roman gods and goddesses. However, the name Earth is a Germanic word, which simply means 'the ground."]
let jupiterImg = ["jupiter1.jpg","jupiter2.jpg","jupiter3.jpg"];
let jupiterParagraph = ["Jupiter has a long history of surprising scientists - all the way back to 1610 when Galileo Galilei found the first moons beyond Earth. That discovery changed the way we see the universe.",
"Fifth in line from the Sun, Jupiter is, by far, the largest planet in the solar system - more than twice as massive as all the other planets combined.",
"Jupiter's familiar stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium. Jupiter's iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years."];
let marsImg = ["mars1.jpg","mars2.jpg","mars3.jpg"];
let marsParagraph = ["Mars is the fourth planet from the Sun - a dusty, cold, desert world with a very thin atmosphere. Mars is also a dynamic planet with seasons, polar ice caps, canyons, extinct volcanoes, and evidence that it was even more active in the past.<br>Mars is one of the most explored bodies in our solar system, and it's the only planet where we've sent rovers to roam the alien landscape.",
"Mars is one of the most explored bodies in our solar system, and it's the only planet where we've sent rovers to roam the alien landscape.<br>Perseverance rover - the largest, most advanced rover NASA has sent to another world - touched down on Mars on Feb. 18, 2021, after a 203-day journey traversing 293 million miles (472 million kilometers). The Ingenuity helicopter rode to Mars attached to the belly of Perseverance.",
"In May 2021, China became the second nation to ever land successfully on Mars when its Zhurong Mars rover touched down.<br>An international fleet of eight orbiters is studying the Red Planet from above including three NASA orbiters: 2001 Mars Odyssey, Mars Reconnaissance Orbiter, and MAVEN.<br>These robotic explorers have found lots of evidence that Mars was much wetter and warmer, with a thicker atmosphere, billions of years ago."];
let uranusImg = ["uranus1.png","uranus2.jpg","uranus3.jpg"];
let uranusParagraph = ["Like the classical planets, Uranus is visible to the naked eye, but it was never recognised as a planet by ancient observers because of its dimness and slow orbit.[25] Sir William Herschel first observed Uranus on 13 March 1781, leading to its discovery as a planet, expanding the known boundaries of the Solar System for the first time in history and making Uranus the first planet classified as such with the aid of a telescope.",
"Uranus is the seventh planet from the Sun, and has the third-largest diameter in our solar system. It was the first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star.",
"It was two years later that the object was universally accepted as a new planet, in part because of observations by astronomer Johann Elert Bode. Herschel tried unsuccessfully to name his discovery Georgium Sidus after King George III. Instead, the scientific community accepted Bode's suggestion to name it Uranus, the Greek god of the sky, as suggested by Bode.",];
let saturnImg = ["saturn1.jpg","saturn2.jpg","saturn3.jpg"];
let saturnParagraph = ["Saturn is the sixth planet from the Sun and the second-largest planet in our solar system.",
"Adorned with thousands of beautiful ringlets, Saturn is unique among the planets. It is not the only planet to have rings - made of chunks of ice and rock - but none are as spectacular or as complicated as Saturn's.",
"Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium."];
let neptuneImg = ["neptune1.jpg","neptune2.jpg","neptune3.jpg"];
let neptuneParagraph = ["Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, and slightly more massive than its near-twin Uranus. Neptune is denser and physically smaller than Uranus because its greater mass causes more gravitational compression of its atmosphere. It is referred to as one of the solar system's two ice giant planets (the other one being its Uranus).",
"Being composed primarily of gases and liquids, it has no well-defined solid surface. The planet orbits the Sun once every 164.8 years at an average distance of 30.1 AU (4.5 billion km; 2.8 billion mi). It is named after the Roman god of the sea and has the astronomical symbol representing Neptune's trident.",
"Like Jupiter and Saturn, Neptune's atmosphere is composed primarily of hydrogen and helium, along with traces of hydrocarbons and possibly nitrogen, though it contains a higher proportion of ices such as water, ammonia and methane. However, similar to Uranus, its interior is primarily composed of ices and rock; Uranus and Neptune are normally considered ice giants to emphasise this distinction.Traces of methane in the outermost regions in part account for the planet's blue appearance, though an unknown component is believed to color Neptune a deeper blue compared to Uranus.<br>In contrast to the hazy, relatively featureless atmosphere of Uranus, Neptune's atmosphere has active and visible weather patterns. "];
//auto change page value
let backgroundimg = ["planet.jpg","mercury.jpg","venus.jpg","earth.jpg","mars.jpg","jupiter.jpg","saturn.jpg","uranus.jpg","neptune.jpg"]
let destination = "Featured Destination";
let overView = ["The Solar System is the gravitationally bound system of the Sun and the objects that orbit it.The Solar System formed 4.6 billion years ago from the gravitational collapse of a giant interstellar molecular cloud.",
"Mercury—the smallest planet in our solar system and closest to the Sun—is only slightly larger than Earth's Moon. Mercury is the fastest planet, zipping around the Sun every 88 Earth days.",
"Venus spins slowly in the opposite direction from most planets. A thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system.",
"Earth—our home planet—is the only place we know of so far that's inhabited by living things. It's also the only planet in our solar system with liquid water on the surface.",
"Mars is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence Mars was—billions of years ago—wetter and warmer, with a thicker atmosphere.",
"Jupiter is more than twice as massive than the other planets of our solar system combined. The giant planet's Great Red spot is a centuries-old storm bigger than Earth.",
"Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular as Saturn's.",
"Uranus—seventh planet from the Sun—rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side.",
"Neptune—the eighth and most distant major planet orbiting our Sun—is dark, cold and whipped by supersonic winds. It was the first planet located through mathematical calculations, rather than by telescope.",]
//change background
let namePlanet = ["SolarSystem","Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"]
var count = 0;
let bgImage = document.querySelector("#container");
let changeimg = function changeReview(){
    var functionreadmore="";
    functionreadmore+=`<button class = "readmore1" onclick= show${slides[count].name}Info()>Read More</button>`
    document.querySelector(".readmore").innerHTML = functionreadmore;
    document.querySelector(".introduce").innerText = overView[count];
    document.querySelector(".destination").innerText = destination;
    document.querySelector(".planets_name").innerText = namePlanet[count];
    bgImage.style.backgroundImage = `url(${backgroundimg[count]})`;
    bgImage.style.transition = '.1s'
    if(count < namePlanet.length-1){
        count+=1;
    }else{
        count=0;
    }
}
setInterval(changeimg,2*1000)
//select system
let system_list = ["Out Solar System","Sun","Kuiper Belt","Oort Cloud"]
function ShowSystemList(){
    let infomation = "";
    infomation = "<ul class='systemlist'>";
    for(let i=0;i<system_list.length;i++){
        infomation +=`<li class="systemSelect">${system_list[i]}</li>`;
    }
    infomation+="</ul>"
    document.querySelector(".menu-system").innerHTML = infomation;
    let hide= document.querySelector(".menu-system");
    hide.style.display="block"
}
function hideSystemList(){
   let hide= document.querySelector(".menu-system");
   hide.style.display = "none";
}
//select planets
function ShowPlanetsList(){
    let infomation = "";
    infomation = "<ul class='planetslist'>";
    for(let i=1;i<namePlanet.length;i++){
        infomation +=`<li id="planetsSelect" onclick = show${namePlanet[i]}Info()>${namePlanet[i]}</li>`;
    }
    infomation+="</ul>"
    document.querySelector(".menu-planets").innerHTML = infomation;
    let hide= document.querySelector(".menu-planets");
    hide.style.display="block"
}
function hidePlanetsList(){
   let hide= document.querySelector(".menu-planets");
   hide.style.display = "none";
}
//select moon
// let moon_list = ["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"]
function ShowMoonList(){
    let infomation = "";
    infomation = "<ul class='moonlist'>";
    for(let i=1;i<namePlanet.length;i++){
        infomation +=`<li class="moonSelect">${namePlanet[i]}</li>`;
    } 
    infomation+="</ul>"
    document.querySelector(".menu-moon").innerHTML = infomation;
    let hide= document.querySelector(".menu-moon");
    hide.style.display="block"
}
function hideMoonList(){
   let hide= document.querySelector(".menu-moon");
   hide.style.display = "none";
}
// select page
function buttonshowcontent(){
    var functionreadmore="";
    functionreadmore+=`<button class = "readmore1" onclick= show${namePlanet[count]}Info()>Read More</button>`
    document.querySelector(".readmore").innerHTML = functionreadmore;
}
function page0(){
    count=0;
    buttonshowcontent();
    document.querySelector(".introduce").innerText = overView[0];
    document.querySelector(".destination").innerText = destination;
    document.querySelector(".planets_name").innerText = namePlanet[0];
    bgImage.style.backgroundImage = `url(${backgroundimg[0]})`;
    bgImage.style.transition = '.2s'
    contentofSolarSystem ();
}
function page1(){
    count=1;
    buttonshowcontent()
    document.querySelector(".introduce").innerText = overView[1];
    document.querySelector(".destination").innerText = destination;
    document.querySelector(".planets_name").innerText = namePlanet[1];
    bgImage.style.backgroundImage = `url(${backgroundimg[1]})`;
    bgImage.style.transition = '.2s'
    contentofMercury ();
}
function page2(){
    count=2;
    buttonshowcontent()
    document.querySelector(".introduce").innerText = overView[2];
    document.querySelector(".destination").innerText = destination;
    document.querySelector(".planets_name").innerText = namePlanet[2];
    bgImage.style.backgroundImage = `url(${backgroundimg[2]})`;
    bgImage.style.transition = '.2s'
    contentofVenus ();
}
function page3(){
    count=3;
    buttonshowcontent()
    document.querySelector(".introduce").innerText = overView[3];
    document.querySelector(".destination").innerText = destination;
    document.querySelector(".planets_name").innerText = namePlanet[3];
    bgImage.style.backgroundImage = `url(${backgroundimg[3]})`;
    bgImage.style.transition = '.2s'
    contentofEarth();
}
function page4(){
    count=4;
    buttonshowcontent()
    document.querySelector(".introduce").innerText = overView[4];
    document.querySelector(".destination").innerText = destination;
    document.querySelector(".planets_name").innerText = namePlanet[4];
    bgImage.style.backgroundImage = `url(${backgroundimg[4]})`;
    bgImage.style.transition = '.2s'
    contentofMars();
}
function page5(){
    count=5;
    buttonshowcontent()
    document.querySelector(".introduce").innerText = overView[5];
    document.querySelector(".destination").innerText = destination;
    document.querySelector(".planets_name").innerText = namePlanet[5];
    bgImage.style.backgroundImage = `url(${backgroundimg[5]})`;
    bgImage.style.transition = '.2s'
    contenofJupiter(); 
}
function page6(){
    count=6;
    buttonshowcontent()
    document.querySelector(".introduce").innerText = overView[6];
    document.querySelector(".destination").innerText = destination;
    document.querySelector(".planets_name").innerText = namePlanet[6];
    bgImage.style.backgroundImage = `url(${backgroundimg[6]})`;
    bgImage.style.transition = '.2s'
    contenofSaturn();
}
function page7(){
    count=7;
    buttonshowcontent()
    document.querySelector(".introduce").innerText = overView[7];
    document.querySelector(".destination").innerText = destination;
    document.querySelector(".planets_name").innerText = namePlanet[7];
    bgImage.style.backgroundImage = `url(${backgroundimg[7]})`;
    bgImage.style.transition = '.2s'
    contenofUranus();
}
function page8(){
    count=8;
    buttonshowcontent()
    document.querySelector(".introduce").innerText = overView[8];
    document.querySelector(".destination").innerText = destination;
    document.querySelector(".planets_name").innerText = namePlanet[8];
    bgImage.style.backgroundImage = `url(${backgroundimg[8]})`;
    bgImage.style.transition = '.2s'
    contenofNeptune();
}
// go to the next page
function arrowleft(){
    if (count==0) {
        count=namePlanet.length-1;
        `show${namePlanet[count]}Info();`
        buttonshowcontent()
        document.querySelector(".introduce").innerText = overView[count];
        document.querySelector(".destination").innerText = destination;
        document.querySelector(".planets_name").innerText = namePlanet[count];
        bgImage.style.backgroundImage = `url(${backgroundimg[count]})`;
        bgImage.style.transition = '.0,5s'
    } else {
        count=count-1;
        `show${namePlanet[count]}Info();`
        buttonshowcontent()
        document.querySelector(".introduce").innerText = overView[count];
        document.querySelector(".destination").innerText = destination;
        document.querySelector(".planets_name").innerText = namePlanet[count];
        bgImage.style.backgroundImage = `url(${backgroundimg[count]})`;
        bgImage.style.transition = '.0,5s'
    }
}
function arrowright(){
    if (count<(namePlanet.length-1)) {
        count+=1;
        `show${namePlanet[count]}Info();`
        buttonshowcontent()
        document.querySelector(".introduce").innerText = overView[count];
        document.querySelector(".destination").innerText = destination;
        document.querySelector(".planets_name").innerText = namePlanet[count];
        bgImage.style.backgroundImage = `url(${backgroundimg[count]})`;
        bgImage.style.transition = '.1s'
    } else {
        count=0;
        `show${namePlanet[count]}Info();`
        buttonshowcontent();
        document.querySelector(".introduce").innerText = overView[count];
        document.querySelector(".destination").innerText = destination;
        document.querySelector(".planets_name").innerText = namePlanet[count];
        bgImage.style.backgroundImage = `url(${backgroundimg[count]})`;
        bgImage.style.transition = '.1s'
    }
}
//hide page
let hidepage = document.querySelector("#hidepage");
let hideContent1 = document.querySelector(".hideContent1");
let hideImg1 = document.querySelector(".hideImg1");
let hideContent2 = document.querySelector(".hideContent2");
let hideImg2 = document.querySelector(".hideImg2");
let hideContent3 = document.querySelector(".hideContent3");
let hideImg3 = document.querySelector(".hideImg3");
function ShowHidePage(){
    hidepage.style.display = "block";
    
}
//contents of hide page
function showSolarSystemInfo(){
    ShowHidePage();
    contentofSolarSystem ();
}
function showMercuryInfo(){
    ShowHidePage();
    contentofMercury();
}
function showVenusInfo(){
    ShowHidePage();
    contentofVenus();
}
function showEarthInfo(){
    ShowHidePage();
    contentofEarth();
}
function showMarsInfo(){
    ShowHidePage();
    contentofMars();
}
function showJupiterInfo(){
    ShowHidePage();
    contenofJupiter();
}
function showSaturnInfo(){
    ShowHidePage();
    contenofSaturn();
    
}
function showUranusInfo(){
    ShowHidePage();
    contenofUranus();
}
function showNeptuneInfo(){
    ShowHidePage();
    contenofNeptune();
}
//function of show infomation
function contentofSolarSystem (){
    document.querySelector(".hidepagetitle").innerHTML = `${namePlanet[0]}`;
    hideContent1.innerHTML = solarSystemParagraph[0];
    hideImg1.style.backgroundImage = `url(${backgroundimg[0]})`;
    hideContent2.innerHTML = solarSystemParagraph[1];
    hideImg2.style.backgroundImage = `url(${backgroundimg[1]})`;
    hideContent3.innerHTML = solarSystemParagraph[2];
    hideImg3.style.backgroundImage = `url(${backgroundimg[2]})`;
}

function contentofMercury(){
    document.querySelector(".hidepagetitle").innerHTML = `${namePlanet[1]}`;
    hideContent1.innerHTML = mercuryParagraph[0];
    hideImg1.style.backgroundImage = `url(${backgroundimg[0]})`;
    hideContent2.innerHTML = mercuryParagraph[1];
    hideImg2.style.backgroundImage = `url(${backgroundimg[1]})`;
    hideContent3.innerHTML = mercuryParagraph[2];
    hideImg3.style.backgroundImage = `url(${backgroundimg[2]})`;
}

function contentofVenus(){
    document.querySelector(".hidepagetitle").innerHTML = `${namePlanet[2]}`;
    hideContent1.innerHTML = venusParagraph[0];
    hideImg1.style.backgroundImage = `url(${venusImg[0]})`;
    hideContent2.innerHTML = venusParagraph[1];
    hideImg2.style.backgroundImage = `url(${venusImg[1]})`;
    hideContent3.innerHTML = venusParagraph[2];
    hideImg3.style.backgroundImage = `url(${venusImg[2]})`;
}
function contentofEarth(){
    document.querySelector(".hidepagetitle").innerHTML = `${namePlanet[3]}`;
    hideContent1.innerHTML = earthParagraph[0];
    hideImg1.style.backgroundImage = `url(${earthImg[1]})`;
    hideContent2.innerHTML = earthParagraph[1];
    hideImg2.style.backgroundImage = `url(${earthImg[1]})`;
    hideContent3.innerHTML = earthParagraph[2];
    hideImg3.style.backgroundImage = `url(${earthImg[2]})`;
}

function contentofMars(){
    document.querySelector(".hidepagetitle").innerHTML = `${namePlanet[4]}`;
    hideContent1.innerHTML = marsParagraph[0];
    hideImg1.style.backgroundImage = `url(${marsImg[1]})`;
    hideContent2.innerHTML = marsParagraph[1];
    hideImg2.style.backgroundImage = `url(${marsImg[1]})`;
    hideContent3.innerHTML = marsParagraph[2];
    hideImg3.style.backgroundImage = `url(${marsImg[2]})`;
}

function contenofJupiter(){
    document.querySelector(".hidepagetitle").innerHTML = `${namePlanet[5]}`;
    hideContent1.innerHTML = jupiterParagraph[0];
    hideImg1.style.backgroundImage = `url(${jupiterImg[0]})`;
    hideContent2.innerHTML = jupiterParagraph[1];
    hideImg2.style.backgroundImage = `url(${jupiterImg[1]})`;
    hideContent3.innerHTML = jupiterParagraph[2];
    hideImg3.style.backgroundImage = `url(${jupiterImg[2]})`;
}

function contenofSaturn(){
    document.querySelector(".hidepagetitle").innerHTML = `${namePlanet[6]}`;
    hideContent1.innerHTML = saturnParagraph[0];
    hideImg1.style.backgroundImage = `url(${saturnImg[0]})`;
    hideContent2.innerHTML = saturnParagraph[1];
    hideImg2.style.backgroundImage = `url(${saturnImg[1]})`;
    hideContent3.innerHTML = saturnParagraph[2];
    hideImg3.style.backgroundImage = `url(${saturnImg[2]})`;
}

function contenofUranus(){
    document.querySelector(".hidepagetitle").innerHTML = `${namePlanet[7]}`;
    hideContent1.innerHTML = uranusParagraph[0];
    hideImg1.style.backgroundImage = `url(${uranusImg[0]})`;
    hideContent2.innerHTML = uranusParagraph[1];
    hideImg2.style.backgroundImage = `url(${uranusImg[1]})`;
    hideContent3.innerHTML = uranusParagraph[2];
    hideImg3.style.backgroundImage = `url(${uranusImg[2]})`;
}

function contenofNeptune(){
    document.querySelector(".hidepagetitle").innerHTML = `${namePlanet[8]}`;
    hideContent1.innerHTML = neptuneParagraph[0];
    hideImg1.style.backgroundImage = `url(${neptuneImg[0]})`;
    hideContent2.innerHTML = neptuneParagraph[1];
    hideImg2.style.backgroundImage = `url(${neptuneImg[1]})`;
    hideContent3.innerHTML = neptuneParagraph[2];
    hideImg3.style.backgroundImage = `url(${neptuneImg[2]})`;
}
//esc hidepage
document.addEventListener("keydown",function(){
    hidepagereview();
})
function hidepagereview(){
    hidepage.style.display = "none";
}
//add, change, delete content
let nameChange = document.querySelector(".addNamePlanets");
let contentChange = document.querySelector(".addContentPlanets");
let backgroundChange = document.querySelector(".addBackgroundPlanets");
//add new button
let addbutton = "";
let chosepagebasic = document.querySelector("#chosepage")
function submit1(){
    var storageKey = "namePlanet";
localStorage.setItem(storageKey,namePlanet)
    let i= namePlanet.length+1;
        addbutton += `<button class="page0" style="border: 1px solid white; width: 10px; cursor: pointer; height: 10px; margin: 3px;border-radius: 5px ; " onclick="page${i}(){}"></button>`
    chosepagebasic.innerHTML+=addbutton;
    namePlanet.push(nameChange.value);
    overView.push(contentChange.value);
    backgroundimg.push(backgroundChange.value);
    ShowPlanetsList()
}
//login by Admin
function showlogintable(){
    let tablelogin = `<div id="loginbyadmin>`;
    tablelogin += `<label style="font-size:16px " class="logintab">ID<input type="text" class="loginId" style="width:100px"></label><br>`;
    tablelogin += `<label style="font-size:16px " class="logintab">PW<input type="password" class="loginPw" style="width:100px"></label>`;
    tablelogin += `<label style="font-size:16px " class="logintab"><input type="button" class="loginbutton" style="width:100px" value="login" onclick="loginbyid()"></label></div>`;
    document.querySelector(".loginbutton1").innerHTML = tablelogin;
}
function logouttable(){
    showlogintable();
    document.querySelector("#boxchange").style.display = "none";
    document.querySelector(".logintab").style.display = "none";
    document.querySelector(".loginbutton").src = "https://cdn.pixabay.com/photo/2017/11/10/04/47/user-2935373_960_720.png"
}
function loginbyid(){
    let idlogin = document.querySelector(".loginId").value;
    let pwlogin = document.querySelector(".loginPw").value;
    if (idlogin == "Admin" && pwlogin == "Admin") {
        alert("Hello, Master!")
        tablelogout = `<button onclick='logouttable()'>Log Out<button>`
        document.querySelector(".loginbutton1").innerHTML = tablelogout;
        document.querySelector("#boxchange").style.display = "block";
        document.querySelector(".loginbutton").src = "https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_960_720.png"
    } else {
        alert("Who are you?")
    }
}
//local
//change content
function submit2(){
    let valueofselect = document.querySelector(".choseplanets").value;
    if (document.querySelector(".changeBackgroundPlanets").value == ""|| document.querySelector(".changeContentPlanets").value =="") {
        alert("Vui lòng nhập dữ liệu thay đổi")
    } else {
        for (let namepl  in namePlanet){
            if(namePlanet[namepl] == valueofselect){
                backgroundimg[namepl] = document.querySelector(".changeBackgroundPlanets").value;
                overView[namepl] = document.querySelector(".changeContentPlanets").value;
                alert("Đã cập nhật content over view");
                document.querySelector(".changeContentPlanets").value = ""
            }
    } 
    }
}




        
 
        
        
        
