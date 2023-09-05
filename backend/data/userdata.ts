import bcrypt from "bcryptjs";



const userdata = [
    // edgar
    {
        "username": "allenakinkunle123",
        "display_name": "Edgar Allen Poe",
        "email": "allenakinkunle123@gmail.com",
        password: bcrypt.hashSync("12345", 10),

        "bio": "Building http://TechPad.ink, @contentreio| Founder @master_backend | Author of http://EnterpriseVue.dev | I help you become a great Backend Engineer and make money",
        "profile_banners": "",
        "website": "linktr.ee/allenakinkunle123",
        "followers_count": 0,
        "following_count": 0,
        "tweets_count": 0,
        "createdAt": "1/14/2011",
        "verified": true,
        "profile_image_url": "https://i.pinimg.com/236x/80/5f/69/805f6966f9ff13b3dad64b3c10f823b8.jpg",
        "language": "English",
        "profession": "Entrepreneur"
    },
    // eddy
    {
        "username": "bigEDDY",
        "display_name": "Big Eddy",
        "email": "bigEDDY@gmail.com",
        password: bcrypt.hashSync("12345", 10),

        "bio": "Founder at @fonoster . Building the open-source alternative to Twilio.",
        "location": "World",
        "profile_banners": "https://pbs.twimg.com/profile_banners/739107184148107264/1688746705/600x200",
        "website": "linktr.ee/bigEDDY",
        "followers_count": 0,
        "following_count": 0,
        "tweets_count": 0,
        "createdAt": "8/15/2002",
        "verified": false,
        "profile_image_url": "",
        "language": ["English"]
    },
    {
        "username": "daominique",
        "display_name": "dom",
        "email": "daominique@gmail.com",
        password: bcrypt.hashSync("12345", 10),

        "bio": "Teacher 👨🏻‍🏫 to Tech 👨🏻‍💻 in 1.5 yrs ~ Fullstack SWE ~ C#/.Net ~ SQL ~ Python ~ DevOps ~ Ironman Triathlon ‘24 🏊🏼‍♂️🚴🏼‍♂️🏃🏻~ Coram Deo 🕊️",
        "location": "Colorados, USA",
        "profile_banners": "https://pbs.twimg.com/profile_banners/739107184148107264/1688746705/600x200",
        "website": "linktr.ee/daominique",
        "followers_count": 0,
        "following_count": 0,
        "tweets_count": 0,
        "createdAt": "8/15/2002",
        "verified": false,
        "profile_image_url": "https://i.pinimg.com/236x/d6/fb/a8/d6fba80c63c6852632a91ac7edb2aa07.jpg",
        "language": ["Spanish"]
    },
    {
        "username": "DeniTechh",
        "display_name": "denis",
        "email": "DeniTechh@gmail.com",
        password: bcrypt.hashSync("12345", 10),

        "bio": "I’m a  @DevAtTheBeachh. ????? @Hashnode.  Building @SetupsProject s4 n&w @_buildspace • Become a (better) developer: http://denitech.dev/#/portal/signup",
        "location": "HashNode",
        "profile_banners": "https://pbs.twimg.com/profile_banners/1440785614673113093/1691059305/600x200",
        "website": "linktr.ee/DeniTechh",
        "followers_count": 0,
        "following_count": 0,
        "tweets_count": 0,
        "createdAt": "8/15/2004",
        "verified": false,
        "profile_image_url": "https://i.pinimg.com/236x/46/d9/ca/46d9cad2612db0ee8d61cf4678231b77.jpg",
        "language": "English",
        "profession": "Entrepreneur"
    },
    {
        "username": "Stiverst",
        "display_name": "striver_79",
        "email": "striver_79@gmail.com",
        password: bcrypt.hashSync("12345", 10),

        "bio": "Engineer @ Google | Founder - tUF| Youtuber (300K+ Subs) | Angular, Java | Cricket Enthusiast | http://Ex-Media.net, Amazon",
        "location": "India",
        "profile_banners": "https://pbs.twimg.com/profile_banners/1440785614673113093/1691059305/600x200",
        "website": "linktr.ee/striver_79",
        "followers_count": 0,
        "following_count": 0,
        "tweets_count": 0,
        "createdAt": "8/15/2010",
        "verified": false,
        "profile_image_url": "https://i.pinimg.com/236x/36/d5/5d/36d55d4351eaa9be39de78c2ed522e27.jpg",
        "language": "English",
        "profession": "Entrepreneur"
    },
    // gogole africa
    {
        "username": "googleafrica",
        "display_name": "Google in Africa",
        "email": "googleafrica@gmail.com",
        password: bcrypt.hashSync("12345", 10),

        "bio": "Building the tools for Africa's digital transformation.",
        "location": "Sub Saharan Africa",
        "profile_banners": "https://pbs.twimg.com/profile_banners/1440785614673113093/1691059305/600x200",
        "website": "google-africa.blogspot.com",
        "followers_count": 0,
        "following_count": 0,
        "tweets_count": 0,
        "createdAt": "8/15/2009",
        "verified": false,
        "profile_image_url": "https://i.pinimg.com/236x/36/d5/5d/36d55d4351eaa9be39de78c2ed522e27.jpg",
        "language": "English",
        "profession": "Science & Technology"
    },
    // daily mail
    {
        "username": "DailyMailUK",
        "email": "DailyMailUK@gmail.com",
        password: bcrypt.hashSync("12345", 10),

        "display_name": "Daily Mail U.K",
        "bio": "For the latest updates on breaking news visit our website: http://dailymail.co.uk 🇬🇧",
        "location": "London, UK",
        "profile_banners": "https://pbs.twimg.com/profile_banners/111556423/1663943035/600x200",
        "website": "google-africa.blogspot.com",
        "followers_count": 0,
        "following_count": 0,
        "tweets_count": 0,
        "createdAt": "8/15/2002",
        "verified": false,
        "profile_image_url": "https://pbs.twimg.com/profile_banners/111556423/1663943035/600x200",
        "language": "English",
        "profession": ""
    },
]


export default userdata