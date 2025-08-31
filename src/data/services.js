import facialBleach from '../assets/services/facial-bleach.png';
import hairColour from '../assets/services/hair-colour.png';
import hairSpa from '../assets/services/hair-spa.png';
import manicure from '../assets/services/manicure.png';
import pedicure from '../assets/services/pedicure.png';
import threading from '../assets/services/threading.png';
import waxing from '../assets/services/waxing.png';

export const servicesData = [
    {
        id: 1,
        name: 'Facial & Bleach',
        description: 'Rejuvenate your skin with our specialized facial and bleach treatments, tailored to your skin type for a clear and radiant complexion.',
        image: facialBleach,
        price: '₹400 onwards',
        category: 'Skin Care',
        tags: ['Skin Care', 'Facial', 'Bleach'],
        seo: {
            structuredData: {
                "@type": "Service",
                "name": "Facial & Bleach",
                "description": "Rejuvenate your skin with our specialized facial and bleach treatments."
            }
        }
    },
    {
        id: 2,
        name: 'Hair Colouring',
        description: 'Transform your look with our professional hair colouring services, from global colors to trendy highlights.',
        image: hairColour,
        price: '₹1000 onwards',
        category: 'Hair Care',
        tags: ['Hair Care', 'Colouring'],
        seo: {
            structuredData: {
                "@type": "Service",
                "name": "Hair Colouring",
                "description": "Professional hair colouring services, from global colors to trendy highlights."
            }
        }
    },
    {
        id: 3,
        name: 'Hair Spa',
        description: 'Nourish and revitalize your hair with our relaxing hair spa treatments, designed to combat damage and improve hair health.',
        image: hairSpa,
        price: '₹800 onwards',
        category: 'Hair Care',
        tags: ['Hair Care', 'Hair Spa', 'Treatment'],
        seo: {
            structuredData: {
                "@type": "Service",
                "name": "Hair Spa",
                "description": "Nourish and revitalize your hair with our relaxing hair spa treatments."
            }
        }
    },
    {
        id: 4,
        name: 'Manicure',
        description: 'Pamper your hands with our classic and deluxe manicure services for beautiful and healthy nails.',
        image: manicure,
        price: '₹300 onwards',
        category: 'Hand & Foot Care',
        tags: ['Hand & Foot Care', 'Manicure', 'Nails'],
        seo: {
            structuredData: {
                "@type": "Service",
                "name": "Manicure",
                "description": "Classic and deluxe manicure services for beautiful and healthy nails."
            }
        }
    },
    {
        id: 5,
        name: 'Pedicure',
        description: 'Relax and refresh your feet with our soothing pedicure treatments, leaving them soft and beautiful.',
        image: pedicure,
        price: '₹400 onwards',
        category: 'Hand & Foot Care',
        tags: ['Hand & Foot Care', 'Pedicure', 'Feet'],
        seo: {
            structuredData: {
                "@type": "Service",
                "name": "Pedicure",
                "description": "Soothing pedicure treatments for soft and beautiful feet."
            }
        }
    },
    {
        id: 6,
        name: 'Threading',
        description: 'Achieve perfectly shaped eyebrows and a clean look with our precise and gentle threading services.',
        image: threading,
        price: '₹50 onwards',
        category: 'Grooming',
        tags: ['Grooming', 'Threading', 'Eyebrows'],
        seo: {
            structuredData: {
                "@type": "Service",
                "name": "Threading",
                "description": "Precise and gentle threading services for eyebrows and face."
            }
        }
    },
    {
        id: 7,
        name: 'Waxing',
        description: 'Experience smooth, hair-free skin with our hygienic and effective waxing services for all body areas.',
        image: waxing,
        price: '₹150 onwards',
        category: 'Grooming',
        tags: ['Grooming', 'Waxing', 'Hair Removal'],
        seo: {
            structuredData: {
                "@type": "Service",
                "name": "Waxing",
                "description": "Hygienic and effective waxing services for smooth, hair-free skin."
            }
        }
    }
];
