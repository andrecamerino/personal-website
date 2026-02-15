export interface Testimonial {
    name: string,
    role: string,
    rating: 0 | 1 | 2 | 3 | 4 | 5,
    text: string,
    imgSrc: string,
}