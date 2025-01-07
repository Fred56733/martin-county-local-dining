import React from "react";
import Card from "./Card";

const CardList = () => {
    const restaurants = [
        {
            image: "",
            name: "Palm & Ivy",
            cuisine: "American",
            price: "$50-100",
            description: "Palm & Ivy Kitchen and Cocktails offers a fresh take on American cuisine. Our chef-inspired dishes, crafted from the freshest locally-sourced ingredients, celebrate both innovation and tradition, catering to adventurous palates and lovers of classic comfort food.",
            link: "https://palmandivyrestaurant.com/"
        },
        {
            image: "",
            name: "Fredgie's World Famous Hot Dogs",
            cuisine: "American, Fast Food",
            price: "$5-25",
            description: "The best Sabrett Hot Dogs, Hamburgers and Italian Sausage with peppers and onions in town, check out the Philly Cheese Steak, Chicken Sandwiches, Onion Rings and Chili Cheese Fries also. Best view of the Indian River, under shade trees. Great food, great crew and the best and most loyal customers.",
            link: "https://www.fredgiesworldfamoushotdogs.com/"
        },
        {
            image: "",
            name: "Noodle World",
            cuisine: "Thai, Sushi",
            price: "$15-30",
            description: "",
            link: "https://noodleworldatstuart.com/"
        },
        {
            image: "",
            name: "Shrimpers",
            cuisine: "American, Bar, Seafood",
            price: "$20-40",
            description: "",
            link: "https://shrimpersgrill.com/"
        },
        {
            image: "",
            name: "Dolphin Bar",
            cuisine: "American, Seafood",
            price: "$20-40",
            description: "",
            link: "https://dolphinbar.com/reservations/"
        },
        {
            image: "",
            name: "Waterfront",
            cuisine: "New American",
            price: "$30-60",
            description: "",
            link: "https://thewaterfrontstuart.com/"
        },
        {
            image: "",
            name: "District",
            cuisine: "New American",
            price: "$30-50",
            description: "",
            link: "https://www.districttableandbar.com/"
        },
        {
            image: "",
            name: "Two Georges",
            cuisine: "American, Seafood",
            price: "$20-40",
            description: "",
            link: "https://www.twogeorgesrestaurant.com/port-salerno"
        },
        {
            image: "",
            name: "Berry Fresh",
            cuisine: "Cafe",
            price: "$15-30",
            description: "",
            link: "https://www.berryfresh.cafe/?utm_source=google&utm_medium=local&utm_campaign=gmb"
        },
        {
            image: "",
            name: "Black Marlin",
            cuisine: "American, Seafood",
            price: "$30-50",
            description: "",
            link: "https://theblackmarlin.net/"
        },
        {
            image: "",
            name: "Sailors Return",
            cuisine: "Seafood",
            price: "$40-60",
            description: "",
            link: "https://thesailorsreturn.com/"
        },
        {
            image: "",
            name: "Spritz",
            cuisine: "Americans, Bar",
            price: "20-50",
            description: "",
            link: "https://www.spritzcitybistro.com/"
        },
    ];
    
    return (
        <div className="card-list">
            {restaurants.map((restaurant, index) => (
                <Card 
                    key={index}
                    image={restaurant.image}
                    name={restaurant.name}
                    cuisine={restaurant.cuisine}
                    description={restaurant.description}
                    link={restaurant.link}
                />
            ))}
        </div>
    );
};

export default CardList;