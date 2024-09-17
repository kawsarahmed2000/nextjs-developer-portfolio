import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'KhoiYum-Your Buying Agent',
        description: "Khoiyum is a multi-vendor app I developed using Flutter to deliver a seamless experience on both iOS and Android platforms. By utilizing Provider for state management, I optimized performance and ensured scalability across the app. The project includes separate apps for designers, workers, and delivery personnel, each with features tailored to their roles. To guarantee user security, I integrated encrypted payment gateways, providing robust data protection and a secure environment for all transactions.",
        tools: ['Flutter', 'Provider', 'Firebase', 'REST APIs', 'Stripe', 'PayPal', 'Google Maps', 'SSL Encryption'],
        role: 'App Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Barak Bazaar – Multi-vendor E-commerce',
        description: 'Barak Bazaar is a multi-vendor app developed using Flutter, offering a seamless shopping experience on both iOS and Android. The app features vendor management, secure payments, and real-time tracking, optimized with Provider for scalability and performance.',
        tools: ['Flutter', 'Provider', 'Firebase', 'PhonePe PG'],
        role: 'App developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Question Bank (20k+ download).',
        description: 'Developed an Android app for Class 10 and 12 students, providing previous question papers for exam preparation. The app garnered over 20,000 downloads due to its intuitive interface and user-friendly design, built with Kotlin. Integrated secure payment gateways and implemented Agile methodologies to deliver eight major updates within six months, enhancing user experience and engagement.',
        tools: ['Android', 'Kotlin', 'Jetpack compose','MVVM','Retrofit','Modern UI/UX', 'Cloud Integration', 'Real-Time Analytics'],
        code: '',
        role: 'Android Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Teacher Work diary',
        description: "Developed Teacher Work Diary for Android and Web as a final year project, currently used by over 72 teachers in college to manage classes, to-dos, and student attendance. Features real-time class viewing and an admin panel for student management, with proficiency in REST APIs using Retrofit, Agile methodology, and modern tools like MVVM architecture, Coroutines, and Dagger.",
        tools: ['Android','XML', 'Php', 'REST APIs', 'Retrofit', 'SDLC: Waterfall', 'MVVM', 'Coroutines', 'Dagger'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Android and Full-sack developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },