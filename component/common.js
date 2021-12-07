function common(){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Anonymous+Pro&display=swap" rel="stylesheet">
        
    </head>
    <body>
        <div id="navdiv">
            <div id="box" class="spinner">
            </div>
            <ul id="navbar">
                <a href="index.html"><li class="navItem">
                <img src="images/aquaHome.png" alt="home">
                </li></a>

                <a href="study.html"><li class="navItem">
                <img src="images/aquaStudy.png" alt="study">
                </li></a>

                <a href="like.html"><li class="navItem">
                <img src="images/aquaIdo.png" alt="things i do">
                </li></a>

                <a href="about.html"><li class="navItem">
                <img src="images/aquaAbout.png" alt="about">
                </li></a>
            </ul>
        </div>
        
        <img id="mypic" src="images/mypic.png" alt="">
        <div id="container">
        </div>
            <ul id="footer">
                <span id="reachOut">Reach out to me: </span>
                <li class="footernavItem">
                    <a href="https://www.instagram.com/nkp_45_/"><img src="images/aquaInstagram.png" alt="insta"></a>
                </li>
                <li class="footernavItem">
                    <a href=""><img src="images/aquaFacebook.png" alt="facebook"></a>
                </li>
                <li class="footernavItem">
                    <a href=""><img src="images/aquaTwitter.png" alt="twitter"></a>
                </li>
                <li class="footernavItem">
                    <a href=""><img src="images/aquaLinkedin.png" alt="linkedin"></a>
                </li>
                <li class="footernavItem">
                    <a href=""><img src="images/aquaMail.png" alt="mail"></a>
                </li>
            </ul>
             
    </body>
    </html>

    `
}

export default common;