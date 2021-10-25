import React from "react";


const UserInfo =[
    {
      userName :"Max",
      img:"https://t3.ftcdn.net/jpg/04/07/00/70/240_F_407007083_EsLiJQHwAU8i1ryyWT40iGGzv2CM5ldA.jpg",
      Tweets :[
        "Be a game-change. The world is already full of players"
      ]
    },
    {
      userName :"ماجد",
      img:"https://t4.ftcdn.net/jpg/02/44/67/79/240_F_244677922_jpOXWgc4e5DM0w1dAaOiAR5XLmxyJqss.jpg",
      Tweets :[
        "l have not failed. l've just found 10,000 ways that won't work - Thomas A.Edison"
      ]
    },
    {
  
      userName :"joudy",
      img:"https://t4.ftcdn.net/jpg/04/39/60/65/240_F_439606530_lZUzuDuRYw4GwWRkgxdH7cj0bheUHX8s.jpg",
      Tweets :[
        "if you look at what you have in life , you'll always have more. if you look at what you don't have in life , you'll never have enough-Oprah winfrey", 
        "you will face many defeats in life , but never let yourself be defeated -Maya Angelou"
      ]
    },
    {
  
      userName :"Turki",
      img:"https://t3.ftcdn.net/jpg/02/62/58/52/240_F_262585211_93dls76UvPAzTD2vM8SuJX7DrgGmBWrA.jpg",
      Tweets :[
        "if you look at what you have in life , you'll always have more. if you look at what you don't have in life , you'll never have enough-Oprah winfrey", 
        "you will face many defeats in life , but never let yourself be defeated -Maya Angelou",
        "you will face many defeats in life , but never let yourself be defeated -Maya Angelou"
      ]
    }
]
  

function Content() {
    return (
        <div className="content">
            {UserInfo.map((user) => (
                <div>
                    <h2>{user.userName}</h2>
                    <img src={user.img} alt="" />
                    <div className="tweets">
                        {user.Tweets.map((tweet) => (
                            <li>{tweet}</li>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Content