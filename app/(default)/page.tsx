export const metadata = {
  title: 'Home - Open PRO',
  description: 'Page description',
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM1o4IuvwDAqm0qx99OkaMoya9ntzLkqo",
  authDomain: "project-683396271271147248.firebaseapp.com",
  projectId: "project-683396271271147248",
  storageBucket: "project-683396271271147248.appspot.com",
  messagingSenderId: "447580566267",
  appId: "1:447580566267:web:3194859133f5b08820365e",
  measurementId: "G-Y1QBEKXZKL"
};

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Substack from '@/components/substack'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  return (
    <>
      <Hero />
      <Features />
      {/* <Zigzag /> */}
      {/* <Testimonials /> */}
      <Substack />
    </>
  )
}
