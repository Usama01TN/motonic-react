// Main navigation. Items with `children` render as dropdowns.
const menu = [
    {
        label: "Home",
        children: [
            { label: "Home style 1", to: "/" },
            { label: "Home style 2", to: "/home-2" },
            { label: "Home style 3", to: "/home-3" },
            {
                label: "Third level",
                href: "#Level3",
                children: [
                    { label: "Level3", href: "#" },
                    { label: "Level3", href: "#" },
                    { label: "Level3", href: "#" },
                ],
            },
        ],
    },
    { label: "about", to: "/about" },
    {
        label: "Services",
        children: [
            { label: "Services", to: "/services" },
            { label: "Service single", to: "/service-details" },
        ],
    },
    {
        label: "Pages",
        children: [
            { label: "Pricing", to: "/pricing" },
            { label: "Team", to: "/team" },
            { label: "Testimonials", to: "/testimonials" },
            { label: "404", to: "/404" },
        ],
    },
    {
        label: "Blog",
        children: [
            { label: "Blog", to: "/blog" },
            { label: "Blog Grid", to: "/blog-grid" },
            { label: "Blog single", to: "/blog-details" },
        ],
    },
    { label: "Contact", to: "/contact" },
];

export default menu;
