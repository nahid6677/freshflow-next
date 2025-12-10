import { Accordion, BlogHomeTow, PricingItem } from "@/types/home-tow";
import pricContent1 from "../../../public/assets/images/shapes/pricing-two-shape-1.png";

import blogimg1 from "../../../public/assets/images/blog/blog-2-1.jpg"
import blogimg2 from "../../../public/assets/images/blog/blog-2-2.jpg"
import blogimg3 from "../../../public/assets/images/blog/blog-2-3.jpg"
import blogimg4 from "../../../public/assets/images/blog/blog-2-4.jpg"

export const pricingContent: PricingItem[] = [
    {
        image: pricContent1,
        badge: "Recommended",
        packName: "Standard",
        price: "220.00",
        validity: "/Monthly",
        pricingText1: "Achieve a Pristine Office",
        pricingText2: "Environment in Just 4 Hours!",
        text1: "Eco-Friendly Cleaning Products",
        text2: "Flexible Scheduling",
        text3: "Highly Trained Professionals",
        text4: "Customized Cleaning Plans",
        text5: "Flexible Scheduling",
    },
    {
        image: pricContent1,
        badge: "Recommended",
        packName: "PREMIUM",
        price: "240.00",
        validity: "/Yearly",
        pricingText1: "Transform Your Home Into a Fresh",
        pricingText2: "Haven in Just 2 Hours!",
        text1: "Affordable Service Packages",
        text2: "Affordable Service Packages",
        text3: "Satisfaction Guaranteed Results",
        text4: "Quick Response Team",
        text5: "Trusted Local Professionals",
    },
    {
        image: pricContent1,
        badge: "Recommended",
        packName: "BUSINESS",
        price: "350.00",
        validity: "/Weekly",
        pricingText1: "Get Spotless Interiors and a Perfect",
        pricingText2: "Shine in Only 3 Hours!",
        text1: "Non-Toxic Cleaning Supplies",
        text2: "Experienced Cleaning Experts",
        text3: "Experienced Cleaning Experts",
        text4: "24/7 Customer Support",
        text5: "Flexible Scheduling",
    },
];

export const pricingContentTow: PricingItem[] = [
    {
        image: pricContent1,
        badge: "Recommended",
        packName: "PREMIUM",
        price: "240.00",
        validity: "/Yearly",
        pricingText1: "Transform Your Home Into a Fresh",
        pricingText2: "Haven in Just 2 Hours!",
        text1: "Affordable Service Packages",
        text2: "Affordable Service Packages",
        text3: "Satisfaction Guaranteed Results",
        text4: "Quick Response Team",
        text5: "Trusted Local Professionals",
    },
    {
        image: pricContent1,
        badge: "Recommended",
        packName: "BUSINESS",
        price: "350.00",
        validity: "/Weekly",
        pricingText1: "Get Spotless Interiors and a Perfect",
        pricingText2: "Shine in Only 3 Hours!",
        text1: "Non-Toxic Cleaning Supplies",
        text2: "Experienced Cleaning Experts",
        text3: "Experienced Cleaning Experts",
        text4: "24/7 Customer Support",
        text5: "Flexible Scheduling",
    },
    {
        image: pricContent1,
        badge: "Recommended",
        packName: "BUSINESS",
        price: "550.00",
        validity: "/Weekly",
        pricingText1: "Get Spotless Interiors and a Perfect",
        pricingText2: "Shine in Only 3 Hours!",
        text1: "Non-Toxic Cleaning Supplies",
        text2: "Experienced Cleaning Experts",
        text3: "Experienced Cleaning Experts",
        text4: "24/7 Customer Support",
        text5: "Flexible Scheduling",
    },
];


export const accordionItems1: Accordion[] = [
    {
        title: `What types of cleaning services do you offer?`,
        description: `Yes, we use eco-friendly and non-toxic cleaning products to ensure safety
            for your family, pets, and the environment. You can schedule a cleaning
            by calling us, booking online, or using our mobile app for flexible and
            convenient scheduling.`,
        id: 1
    },
    {
        title: `Are your cleaning products eco-friendly?`,
        description: `Yes, we use eco-friendly and non-toxic cleaning products to ensure safety
            for your family, pets, and the environment. You can schedule a cleaning
            by calling us, booking online, or using our mobile app for flexible and
            convenient scheduling.`,
        id: 2
    },
    {
        title: `Do I need to be home during the cleaning service?`,
        description: `Yes, we use eco-friendly and non-toxic cleaning products to ensure safety
            for your family, pets, and the environment. You can schedule a cleaning
            by calling us, booking online, or using our mobile app for flexible and
            convenient scheduling`,
        id: 3
    },
    {
        title: `What if I’m not satisfied with the cleaning service?`,
        description: `Yes, we use eco-friendly and non-toxic cleaning products to ensure safety
            for your family, pets, and the environment. You can schedule a cleaning
            by calling us, booking online, or using our mobile app for flexible and
            convenient scheduling.`,
        id: 4
    },
]
export const accordionItems2: Accordion[] = [
    {
        title: `What types of cleaning services do you offer?`,
        description: `Yes, we use eco-friendly and non-toxic cleaning products to ensure safety
            for your family, pets, and the environment. You can schedule a cleaning
            by calling us, booking online, or using our mobile app for flexible and
            convenient scheduling.`,
        id: 5
    },
    {
        title: `Are your cleaning products eco-friendly?`,
        description: `Yes, we use eco-friendly and non-toxic cleaning products to ensure safety
            for your family, pets, and the environment. You can schedule a cleaning
            by calling us, booking online, or using our mobile app for flexible and
            convenient scheduling.`,
        id: 6
    },
    {
        title: `Do I need to be home during the cleaning service?`,
        description: `Yes, we use eco-friendly and non-toxic cleaning products to ensure safety
            for your family, pets, and the environment. You can schedule a cleaning
            by calling us, booking online, or using our mobile app for flexible and
            convenient scheduling`,
        id: 7
    },
    {
        title: `What if I’m not satisfied with the cleaning service?`,
        description: `Yes, we use eco-friendly and non-toxic cleaning products to ensure safety
            for your family, pets, and the environment. You can schedule a cleaning
            by calling us, booking online, or using our mobile app for flexible and
            convenient scheduling.`,
        id: 8
    },
]


export const blogsHomeTow: BlogHomeTow[] = [
    {
        id: 1,
        blogLink: [
            {
                lin: "/blog-details",
                text: "#EcoClean"
            },
            {
                lin: "/blog-details",
                text: "#DeepClean"
            },
        ],
        image: blogimg1,
        titleLink: "/blog-details",
        title: "10 Tips to Keep Your Home Sparkling & Cleanings",
        date: "March 23, 2024",
        comment: "12",
        username: "Michael B",
        subtitle: "Financial Analyst"
    },
    {
        id: 2,
        blogLink: [
            {
                lin: "/blog-details",
                text: "#Sanitize"
            },
            {
                lin: "/blog-details",
                text: "#DeepClean"
            },
        ],
        image: blogimg2,
        titleLink: "/blog-details",
        title: "How to Get Your Deposit Back Easily",
        date: "March 23, 2024",
        comment: "12",
        username: "Michael B",
        subtitle: "Financial Analyst"
    },
    {
        id: 3,
        blogLink: [
            {
                lin: "/blog-details",
                text: "#Sparkle"
            },
            {
                lin: "/blog-details",
                text: "#Sparkle"
            },
        ],
        image: blogimg3,
        titleLink: "/blog-details",
        title: "Why Eco-Friendly Cleaning Products Are Better.",
        date: "March 23, 2024",
        comment: "12",
        username: "Michael B",
        subtitle: "Financial Analyst"
    },
    {
        id: 4,
        blogLink: [
            {
                lin: "/blog-details",
                text: "#Sanitize"
            },
            {
                lin: "/blog-details",
                text: "#EcoClean"
            },
        ],
        image: blogimg4,
        titleLink: "/blog-details",
        title: "The Ultimate Guide to Deep Cleaning Your Home",
        date: "March 23, 2024",
        comment: "12",
        username: "Michael B",
        subtitle: "Financial Analyst"
    },
]
