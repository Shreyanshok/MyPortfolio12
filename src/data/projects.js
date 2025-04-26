// data/projects.js
export const projects = [
    {
      id: 'ecommerce-app',
      type : "video",
      title: 'E-commerce Application',
      shortDescription: 'A full-featured e-commerce platform with product listings, real-time chat between customer and vendor ,cart functionality, and secure checkout.',
      fullDescription: `
        This e-commerce application provides a complete online shopping experience. 
        It features a responsive design, product search and filtering, user authentication, 
        shopping cart functionality, and secure payment processing.
        
        Key features include:
        - User authentication and profile management
        - Product catalog with categories and filters
        - Shopping cart and wishlist
        - Checkout process with multiple payment options
        - Order tracking and history
        - Admin dashboard for product and order management
        
        The application is built using Java for Frontend ,  Retrofit Library for API. 
        Data is stored in Firebase real time database , real time storage.
      `,
      technologies: ['Java', 'XML', 'Firebase', 'Retrofit'],
      image: '/projects/ecommproject.png',
      githubLink: 'https://github.com/Rachit3784',
      liveLink: '',
      video : "/projects/EcommProj.mp4"
    },
    {
      id: 'facebook-ui',
      type : "image",
      title: 'Facebook UI Clone',
      shortDescription: 'A pixel-perfect recreation of the Facebook user interface with NextJs.',
      fullDescription: `
        This project is a detailed clone of the Facebook user interface, recreating the look and feel 
        of the social media platform. It includes various components such as the news feed, sidebar, 
        stories, and post creation.
        
        Features include:
        - Responsive design that works on all devices
        - Dark mode support
        - News feed with post interactions (like, comment, share)
        - Story carousel
        - Friend suggestions
        - Chat sidebar
        
        The clone is built using NextJs , React hooks for state management. Styling is done with Tailwind CSS 
        to achieve a pixel-perfect recreation of the Facebook interface. The project demonstrates 
        advanced CSS skills and component architecture.
      `,
      technologies: ['NextJs', 'ReactJs' ,'Tailwind CSS', 'JavaScript'],
      image: '/projects/facebook.png',
      githubLink: 'https://github.com/Rachit3784/face-book-ui',
      liveLink: 'https://face-book-ui-rachit384-np4cixu4d.vercel.app/',
      video : ""
    },
  ];