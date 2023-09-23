import horn from "../assets/images/clown-horn.jpg";
import nose from "../assets/images/clown-nose.jpg";
import shoes from "../assets/images/clown-shoes.jpg";
import wig from "../assets/images/clown-wig.jpg";
import review1 from "../assets/images/review-1.jpg";
import review2 from "../assets/images/review-2.jpg";
import review3 from "../assets/images/review-3.jpg";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#products", label: "Products" },
    { href: "#offer", label: "Special Offer" },
    { href: "#reviews", label: "Customer Reviews" },
    { href: "#sign-up", label: "Sign Up" }
];

export const products = [
    {
        imgURL: horn,
        name: "Clown Horn",
        price: "$2.00"
    },
    {
        imgURL: nose,
        name: "Clown Nose",
        price: "$0.75"
    },
    {
        imgURL: shoes,
        name: "Clown Shoes",
        price: "$45.00"
    },
    {
        imgURL: wig,
        name: "Clown Wig",
        price: "$5.50"
    }
];

export const reviews = [
    {
        imgURL: review1,
        customerName: "Clowny",
        rating: 4.5,
        feedback: "A great place to clown around!"
    },
    {
        imgURL: review2,
        customerName: "Honks",
        rating: 4.0,
        feedback: "I love to buy clown and clown accessories from here!"
    },
    {
        imgURL: review3,
        customerName: "Punch Line",
        rating: 5.0,
        feedback: "Clown class taught me everything!"
    }
];