import { IoIosArrowDown } from "react-icons/io";
import product1 from "../images/product1.png"
import product2 from "../images/product2.png"
import product3 from "../images/product3.png"
import product4 from "../images/product4.png"
import product5 from "../images/product5.png"
import product6 from "../images/product6.png"
import product7 from "../images/product7.png"
import product8 from "../images/product8.png"
import product9 from "../images/product9.png"
import product10 from "../images/product10.png"
import product11 from "../images/product11.png"
import product12 from "../images/product12.png"
import rating from "../images/Star.png"
import offer1 from "../images/offer1.png"
import offer2 from "../images/offer2.png"
import offer3 from "../images/offer3.png"
import offer4 from "../images/offer4.png"
import organic1 from "../images/organic1.png"
import organic2 from "../images/organic2.png"
import organic3 from "../images/organic3.png"
import weekly1 from "../images/weekly1.png"
import weekly2 from "../images/weekly2.png"
import weekly3 from "../images/weekly3.png"
import weekly4 from "../images/weekly4.png"
import weekly5 from "../images/weekly5.png"
import weekly6 from "../images/weekly6.png"
import { FaUser } from "react-icons/fa";
import choose2 from "../images/choose2.png"
import choose3 from "../images/choose3.png"
import choose4 from "../images/choose4.png"
import choose5 from "../images/choose5.png"
import team1 from "../images/team1.png"
import team2 from "../images/team2.png"
import team3 from "../images/team4.png"
import team4 from "../images/team3.png"
import team5 from "../images/team5.png"
import team6 from "../images/team6.png"
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import m_offer1 from "../images/main_offer1.png"
import m_offer2 from "../images/main_offer2.png"
import m_offer3 from "../images/main_offer3.png"
import m_offer4 from "../images/main_offer4.png"
import Portfolio1 from "../images/portfolio1.png";
import Portfolio2 from "../images/portfolio2.png";
import Portfolio3 from "../images/portfolio3.png";
import Portfolio4 from "../images/portfolio4.png";
import Portfolio5 from "../images/portfolio5.png";
import Portfolio6 from "../images/portfolio6.png";


export const navbar=[
      {
            name:"Home",
            url:"/home"
      },
      {
            name:"About",
            url:"/about"
      },
      {
            name:"Pages",
            icon:<IoIosArrowDown/>,
            submenu:[
                  {
                        subname:"Service",
                        url:"/service"
                  },
                  {
                        subname:"Service Single",
                        url:"/servicesingle"
                  },
                  {
                        subname:"Team",
                        url:"/team"
                  },
                  {
                        subname:"Blog",
                        url:"/blog"
                  },
            ]
      },
      {
            name:"Shop",
            url:"/shop"
      },
      {
            name:"Portfolio",
            url:"/portfolio"
      },
      {
            name:"Contact",
            url:"/contact"
      },
      
];

export const product=[
      {
            name:"Calabrese Broccoli",
            title:"Vegetable",
            image:product1,
            oldprice:"$20.00",
            newprice:"$13.00",
            rating:rating
      },
      {
            name:"Fresh Banana Fruites",
            title:"Fresh",
            image:product2,
            oldprice:"$20.00",
            newprice:"$14.00",
            rating:rating
      },
      {
            name:"White Nuts",
            title:"Millets",
            image:product3,
            oldprice:"$20.00",
            newprice:"$15.00",
            rating:rating
      },
      {
            name:"Vegan Red Tomato",
            title:"Vegetable",
            image:product4,
            oldprice:"$20.00",
            newprice:"$17.00",
            rating:rating
      },
      {
            name:"Mung Bean",
            title:"Health",
            image:product5,
            oldprice:"$20.00",
            newprice:"$11.00",
            rating:rating
      },
      {
            name:"Brown Hazelnut",
            title:"Nuts",
            image:product6,
            oldprice:"$20.00",
            newprice:"$12.00",
            rating:rating
      },
      {
            name:"Eggs",
            title:"Fresh",
            image:product7,
            oldprice:"$20.00",
            newprice:"$17.00",
            rating:rating
      },
      {
            name:"Zelco Suji Elaichi Rusk",
            title:"Fresh",
            image:product8,
            oldprice:"$20.00",
            newprice:"$15.00",
            rating:rating
      },
]

export const customer=[
      {
            count:"100%",
            categary:"Organic"
      },
      {
            count:"285",
            categary:"Active Product"
      },
      {
            count:"350+",
            categary:"Organic Orchads"
      },
      {
            count:"25+",
            categary:"Years of Farming"
      },
]

export const offer=[
      {
            name:"Mung Bean",
            title:"Vegetable",
            image:offer1,
            oldprice:"$20.00",
            newprice:"$11.00",
            rating:rating
      },
      {
            name:"Brown Hazelnut",
            title:"Vegetable",
            image:offer2,
            oldprice:"$20.00",
            newprice:"$12.00",
            rating:rating
      },
      {
            name:"Onion",
            title:"Vegetable",
            image:offer3,
            oldprice:"$20.00",
            newprice:"$17.00",
            rating:rating
      },
      {
            name:"Cabbage",
            title:"Vegetable",
            image:offer4,
            oldprice:"$20.00",
            newprice:"$17.00",
            rating:rating
      },
]

export const organic=[
      {
            image:organic1,
            name:"Organic Juice"
      },
      {
            image:organic2,
            name:"Organic Food"
      },
      {
            image:organic3,
            name:"Nuts Cookis"
      },
]

export const weekly=[
      {
            image:weekly1,
            user:<FaUser/>,
            name:"By Rachi Card",
            data:"The Benefits of Vitamin D & How to Get It",
            text:"Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      },
      {
            image:weekly2,
            user:<FaUser/>,
            name:"By Rachi Card",
            data:"Our Favourite Summertime Tommeto",
            text:"Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      },
]

export const choose=[
      {
            icon:choose2,
            name:"Return Policy",
            text:"Simply dummy text of the printintypesetting industry.",
      },
      {
            icon:choose3,
            name:"100% Fresh",
            text:"Simply dummy text of the printintypesetting industry.",
      },
      {
            icon:choose4,
            name:"Support 24/7",
            text:"Simply dummy text of the printintypesetting industry.",
      },
      {
            icon:choose5,
            name:"Secured Payment",
            text:"Simply dummy text of the printintypesetting industry.",
      },
]

export const team=[
      {
            image:team1,
            name:"Giovani Bacardo",
            text:"Farmer",
            icon2:<FaFacebook/>,
            icon3:<FaTwitter />
      },
      {
            image:team2,
            name:"Giovani Bacardo",
            text:"Farmer",
            icon1:<FaInstagram />,
            icon2:<FaFacebook/>,
            icon3:<FaTwitter />
      },
      {
            image:team3,
            name:"Giovani Bacardo",
            text:"Farmer",
            icon1:<FaInstagram />,
            icon2:<FaFacebook/>,
            icon3:<FaTwitter />
      },
]

export const mainoffer=[
      {
            image:m_offer1,
            name:"Spicy",
      },
      {
            image:m_offer2,
            name:"Nuts & Feesd",
      },
      {
            image:m_offer3,
            name:"Fruits",
      },
      {
            image:m_offer4,
            name:"Vegetable",
      }
]

export const products=[
      {
            name:"Calabrese Broccoli",
            title:"Vegetable",
            image:product1,
            oldprice:"$20.00",
            newprice:"$13.00",
            rating:rating
      },
      {
            name:"Fresh Banana Fruites",
            title:"Fresh",
            image:product2,
            oldprice:"$20.00",
            newprice:"$14.00",
            rating:rating
      },
      {
            name:"White Nuts",
            title:"Millets",
            image:product3,
            oldprice:"$20.00",
            newprice:"$15.00",
            rating:rating
      },
      {
            name:"Vegan Red Tomato",
            title:"Vegetable",
            image:product4,
            oldprice:"$20.00",
            newprice:"$17.00",
            rating:rating
      },
      {
            name:"Mung Bean",
            title:"Health",
            image:product5,
            oldprice:"$20.00",
            newprice:"$11.00",
            rating:rating
      },
      {
            name:"Brown Hazelnut",
            title:"Nuts",
            image:product6,
            oldprice:"$20.00",
            newprice:"$12.00",
            rating:rating
      },
      {
            name:"Eggs",
            title:"Fresh",
            image:product7,
            oldprice:"$20.00",
            newprice:"$17.00",
            rating:rating
      },
      {
            name:"Zelco Suji Elaichi Rusk",
            title:"Fresh",
            image:product8,
            oldprice:"$20.00",
            newprice:"$15.00",
            rating:rating
      },
      {
            name:"Mung Bean",
            title:"Health",
            image:product9,
            oldprice:"$20.00",
            newprice:"$11.00",
            rating:rating
      },
      {
            name:"White Hazelnut",
            title:"Nuts",
            image:product10,
            oldprice:"$20.00",
            newprice:"$12.00",
            rating:rating
      },
      {
            name:"Fresh Corn",
            title:"Fresh",
            image:product11,
            oldprice:"$20.00",
            newprice:"$17.00",
            rating:rating
      },
      {
            name:"Organic Almonds",
            title:"Fresh",
            image:product12,
            oldprice:"$20.00",
            newprice:"$15.00",
            rating:rating
      },
]

export const related=[
      {
            name:"Calabrese Broccoli",
            title:"Vegetable",
            image:product1,
            oldprice:"$20.00",
            newprice:"$13.00",
            rating:rating
      },
      {
            name:"Fresh Banana Fruites",
            title:"Fresh",
            image:product2,
            oldprice:"$20.00",
            newprice:"$14.00",
            rating:rating
      },
      {
            name:"White Nuts",
            title:"Millets",
            image:product3,
            oldprice:"$20.00",
            newprice:"$15.00",
            rating:rating
      },
      {
            name:"Vegan Red Tomato",
            title:"Vegetable",
            image:product4,
            oldprice:"$20.00",
            newprice:"$17.00",
            rating:rating
      },
]

export const portfolio=[
      {
            image:Portfolio1,
            name:"Green & Tasty Lemon",
            text:"Fruits",
      },
      {
            image:Portfolio2,
            name:"Organic Carrot",
            text:"Farmer",
      },
      {
            image:Portfolio3,
            name:"Organic Betel Leaf",
            text:"Leaf",
      },
      {
            image:Portfolio4,
            name:"Natural Tommato",
            text:"Fruits",
      },
      {
            image:Portfolio5,
            name:"Black Raspberry",
            text:"Farmer",
      },
      {
            image:Portfolio6,
            name:"Honey Orange",
            text:"Farmer",
      },
]

export const ourteam=[
      {
            image:team1,
            name:"Giovani Bacardo",
            text:"Farmer",
            icon2:<FaFacebook/>,
            icon3:<FaTwitter />
      },
      {
            image:team2,
            name:"Giovani Bacardo",
            text:"Farmer",
            icon1:<FaInstagram />,
            icon2:<FaFacebook/>,
            icon3:<FaTwitter />
      },
      {
            image:team3,
            name:"Giovani Bacardo",
            text:"Farmer",
            icon1:<FaInstagram />,
            icon2:<FaFacebook/>,
            icon3:<FaTwitter />
      },
      {
            image:team4,
            name:"Keira Knightley",
            text:"Farmer",
            icon2:<FaFacebook/>,
            icon3:<FaTwitter />
      },
      {
            image:team5,
            name:"Scott Lawrence",
            text:"Farmer",
            icon1:<FaInstagram />,
            icon2:<FaFacebook/>,
            icon3:<FaTwitter />
      },
      {
            image:team6,
            name:"Karen Allen",
            text:"Farmer",
            icon1:<FaInstagram />,
            icon2:<FaFacebook/>,
            icon3:<FaTwitter />
      },
]

export const recent=[
      {
            image:weekly1,
            user:<FaUser/>,
            name:"By Rachi Card",
            data:"The Benefits of Vitamin D & How to Get It",
            text:"Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      },
      {
            image:weekly2,
            user:<FaUser/>,
            name:"By Rachi Card",
            data:"Our Favourite Summertime Tommeto",
            text:"Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      },
      {
            image:weekly3,
            user:<FaUser/>,
            name:"By Rachi Card",
            data:"Benefits of Vitamin D & How to Get It",
            text:"Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      },
      {
            image:weekly4,
            user:<FaUser/>,
            name:"By Rachi Card",
            data:"Research More Organic Foods",
            text:"Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      },
      {
            image:weekly5,
            user:<FaUser/>,
            name:"By Rachi Card",
            data:"Everyday Fresh Fruites",
            text:"Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      },
      {
            image:weekly6,
            user:<FaUser/>,
            name:"By Rachi Card",
            data:"Don't Use Plastic Product! it's Kill Nature",
            text:"Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      },
]