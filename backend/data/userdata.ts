import bcrypt from "bcryptjs";

const userdata = [
    // 5. Lebron
    {
        "name": "KingJames",
        "display_name": "Lebron James",
        "email": "KingJames@gmail.com",
        password: bcrypt.hashSync("12345", 10),

        "bio": "EST. AKRON - ST.V/M Class of '03 http://LeBronJamesFamilyFoundation.org #IPROMISE",
        "profile_banners": "https://pbs.twimg.com/profile_banners/23083404/1529843462/600x200",
        "followers_count": 0,
        "following_count": 0,

        "createdAt": "1/14/2020",
        "verified": true,
        "profile_image_url": "https://pbs.twimg.com/profile_images/1421530540063092736/xqtcu8HX_400x400.jpg",
        "language": "English",
        "profession": "Community",
        location: "Follow me for a cookie",
        website: "feastables.com"
    },
    // 5. Mr Beast
    {
        "name": "MrBeast",
        "display_name": "MrBeast.",
        "email": "MrBeast@gmail.com",
        password: bcrypt.hashSync("12345", 10),

        "bio": "X Super Official CEO",
        "profile_banners": "https://pbs.twimg.com/profile_banners/2455740283/1601560191/600x200",
        "followers_count": 0,
        "following_count": 0,

        "createdAt": "1/14/2020",
        "verified": true,
        "profile_image_url": "https://pbs.twimg.com/profile_images/994592419705274369/RLplF55e_400x400.jpg",
        "language": "English",
        "profession": "Community",
        location: "Follow me for a cookie",
        website: "feastables.com"
    },
    // 5. MCallofDuty
    {
        "name": "CallofDuty",
        "display_name": "CallofDuty.",
        "email": "CallofDuty@gmail.com",
        password: bcrypt.hashSync("12345", 10),

        "bio": "ESRB Rating: MATURE with Blood and Gore, Use of Drugs, Intense Violence, Strong Language, and Suggestive Themes. Play Call of Duty #Warzone and #MW3 now 🔥",
        "profile_banners": "https://pbs.twimg.com/profile_banners/290097288/1701381064/600x200",
        "followers_count": 0,
        "following_count": 0,

        "createdAt": "1/14/2020",
        "verified": true,
        "profile_image_url": "https://pbs.twimg.com/profile_images/1669029786780598272/L6kr4ldh_400x400.jpg",
        "language": "English",
        "profession": "Community",
        location: "Follow me for a cookie",
        website: "feastables.com"
    },
    {
        "name": "centredevils",
        "display_name": "centredevils.",
        "email": "centredevils@gmail.com",
        password: bcrypt.hashSync("12345", 10),

        "bio": "📲 An all-round coverage of Manchester United.",
        "profile_banners": "https://pbs.twimg.com/profile_banners/1222239337548435456/1694552092/1500x500",
        "followers_count": 0,
        "following_count": 0,
      
        "createdAt": "1/14/2020",
        "verified": true,
        "profile_image_url": "https://pbs.twimg.com/profile_images/1531275838364307456/c09EuRtq_400x400.jpg",
        "language": "English",
        "profession": "Community",
        location: "Manchester, UK",
        website: "centredevils.co.uk"
    },
    // edidiesky
    {
        "name": "edidiesky",
        "display_name": "Big Eddy.",
        "email": "edidiesky@gmail.com",
        password: bcrypt.hashSync("12345", 10),
        "bio": "A software developer - Full Stack Engineer",
        "profile_banners":"https://pbs.twimg.com/profile_banners/181280529/1528985965/600x200",
        "followers_count": 0,
        "following_count": 0,
      
        "createdAt": "1/14/2011",
        "verified": false,
        "profile_image_url": "./eddy.jpeg", 
        "language": "English",
        "profession": "Community",
        location: "London, England",
        website: ""
    },
    // Babjide
    {
        "name": "CRawkeen12",
        "display_name": "Babájídé B𝗹𝘂𝗻𝘁",
        "email": "CRawkeen1236@gmail.com",
        password: bcrypt.hashSync("12345", 10),

        "bio": "Hi✋|I write just about anything|I use stories to sell ice to Eskimos and create brand awareness|𝗜 𝘀𝗲𝗹𝗹 𝗥𝗲𝗮𝗹 𝗘𝘀𝘁𝗮𝘁𝗲🏘| Use link for inquiry👇|💙❤️",
        "profile_banners": "",
        "followers_count": 0,
        "following_count": 0,
      
        "createdAt": "1/14/2011",
        "verified": false,
        "profile_image_url": "https://pbs.twimg.com/media/F6kgrZPXAAAUDrT?format=jpg&name=240x240",
        "language": "English",
        "profession": "Real Estate",
        location: "Songhai empire2K",
        website: "wa.link/ow3eqx"
    },
    // Marquess Brownloee
    {
        "name": "Marques",
        "display_name": "Marques Brownlee2",
        "email": "Marques@gmail.com",
        password: bcrypt.hashSync("12345", 10),

        "bio": "Web Video Producer | ⋈ | Pro Ultimate Frisbee Player | Host of @WVFRM @TheStudio",
        "profile_banners": "https://pbs.twimg.com/profile_banners/29873662/1642786557/1500x500",
        "followers_count": 0,
        "following_count": 0,
      
        "createdAt": "1/14/2011",
        "verified": false,
        "profile_image_url": "https://pbs.twimg.com/profile_images/1468001914302390278/B_Xv_8gu_400x400.jpg",
        "language": "English",
        "profession": "Community",
        location: "Manchester, UK",
        website: ""
    },
    // Fabrizio Romano
    {
        "name": "FabrizioRomano",
        "display_name": "Fabrizio Romano",
        "email": "FabrizioRomano@gmail.com",
        password: bcrypt.hashSync("12345", 10),

        "bio": "Here we go! ©",
        "profile_banners": "https://pbs.twimg.com/profile_banners/330262748/1635957145/1500x500",
        "followers_count": 0,
        "following_count": 0,
      
        "createdAt": "1/14/2011",
        "verified": false,
        "profile_image_url": "https://pbs.twimg.com/profile_images/1486761402853380113/3ifAqala_400x400.jpg",
        "language": "English",
        "profession": "Community",
        location: "Milano, Italia",
        website: "m.youtube.com/@FabrizioRoman…"
    },
    // Barca Times
    {
        "name": "BarçaTimes",
        "display_name": "BarçaTimes.",
        "email": "BarçaTimes@gmail.com",
        password: bcrypt.hashSync("12345", 10),

        "bio": "Your premier one-stop source for 24/7 FC Barcelona and La Masia updates. For business inquiries, email us at info@barcatimes.com or send us a message 📲",
        "profile_banners": "https://pbs.twimg.com/profile_banners/1603887084/1689605707/1500x500",
        "followers_count": 0,
        "following_count": 0,
      
        "createdAt": "1/14/2011",
        "verified": false,
        "profile_image_url": "https://pbs.twimg.com/profile_images/1680955089236922368/9ojiEUiD_400x400.jpg",
        "language": "English",
        "profession": "Community",
        location: "London, England",
        website: "barcaTimes.com"
    },
]


export default userdata