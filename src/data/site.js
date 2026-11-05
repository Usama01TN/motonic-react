// Content used by the repeated sections. Edit here instead of in the JSX.

const lorem = "There are many variations of passages of Lorem Ipsum available, but the majority have";

export const services = [
    { icon: "flaticon-turbo", iconClass: "service-icon", title: "Engine Repair", text: lorem, price: 25 },
    { icon: "flaticon-tyre", iconClass: "service-icon-2", title: "Tires Replacement", text: lorem, price: 35 },
    { icon: "flaticon-car-1", iconClass: "service-icon-3", title: "Transmission", text: lorem, price: 45 },
    { icon: "flaticon-car-repair", iconClass: "service-icon-4", title: "Diagnostic", text: lorem, price: 65 },
    { icon: "flaticon-battery", iconClass: "service-icon-5", title: "Batteries", text: lorem, price: 50 },
    { icon: "flaticon-electricity", iconClass: "service-icon-6", title: "Breaks", pricingTitle: "Breaks repair", text: lorem, price: 25 },
];

export const team = [
    { name: "Riccardo Cavallo", img: "/assets/images/team/img-1.jpg" },
    { name: "Calvy Jenefar", img: "/assets/images/team/img-2.jpg" },
    { name: "Alexsandar Nick", img: "/assets/images/team/img-3.jpg" },
    { name: "David Simon", img: "/assets/images/team/img-4.jpg" },
].map((m) => ({
    ...m,
    socials: [
        { icon: "fa-facebook", href: "#" },
        { icon: "fa-twitter", href: "#" },
        { icon: "fa-google-plus", href: "#" },
    ],
}));

const testimonialText =
    "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum.";

export const testimonials = [1, 2, 3].map(() => ({
    text: testimonialText,
    img: "/assets/images/testimonial/2.jpg",
    name: "Jimmy Alex",
    role: "SEO of Northy",
}));

const post = (n, title = "Importent tips for your faviorate car.") => ({
    img: `/assets/images/blog/img-${n}.jpg`,
    title,
    excerpt: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
    author: "Lily Anne",
    authorImg: "/assets/images/blog/author.jpg",
    date: "Octobor 12,2018",
    to: "/blog-details",
});

export const latestPosts = [post(1), post(2), post(3)];
export const gridPosts = [post(1, "Important tips for your favirite car"), post(2), post(3), post(4), post(5), post(6)];

export const clients = ["3", "2", "3", "4", "5"].map((n) => `/assets/images/gift/${n}.png`);
