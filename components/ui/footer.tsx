import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Link href="/" className="inline-block" aria-label="Cruip">
                <svg className="fill-current text-purple-1000" xmlns="http://www.w3.org/2000/svg">
                  <g transform="translate(0.500000,100.000000) scale(0.030000,-0.03000)" fill="#FFFFFF" stroke="none">
                    <path d="M200 1727 c-65 -18 -116 -52 -131 -88 -17 -41 -13 -139 11 -312 11 -78 20 -190 20 -250 0 -70 5 -119 14 -142 33 -78 140 -90 325 -36 89 26 124 32 163 28 66 -8 126 -43 163 -95 27 -39 30 -51 30 -117 0 -59 -4 -79 -21 -102 -33 -44 -78 -66 -137 -65 -70 0 -137 27 -243 98 -71 46 -97 58 -130 59 -79 0 -167 -87 -227 -228 -41 -97 -44 -200 -8 -265 57 -99 270 -177 516 -189 351 -17 633 156 742 455 30 81 40 219 24 307 -39 207 -202 356 -449 407 -84 17 -118 19 -263 13 -148 -5 -168 -4 -183 11 -41 40 4 87 99 105 73 14 333 4 420 -15 33 -8 85 -20 115 -27 71 -16 104 -7 151 40 46 45 63 103 57 191 -7 86 -44 160 -100 197 l-42 28 -435 2 c-322 1 -448 -1 -481 -10z"/>
                    <path d="M1630 1724 c-40 -10 -65 -25 -92 -54 -36 -38 -38 -42 -38 -108 0 -38 9 -136 20 -216 11 -81 22 -206 25 -278 3 -72 10 -139 16 -149 30 -57 160 -68 295 -24 43 14 108 28 144 31 58 5 71 3 120 -23 77 -39 113 -93 118 -176 6 -114 -51 -177 -162 -177 -71 0 -130 24 -246 100 -42 27 -90 52 -107 56 -93 18 -226 -135 -270 -310 -32 -130 14 -222 142 -285 141 -68 412 -107 572 -81 269 43 493 227 569 467 22 70 29 220 14 295 -25 128 -99 235 -214 309 -132 86 -263 114 -492 105 -149 -6 -163 -5 -185 12 -21 18 -22 23 -11 46 7 16 28 34 50 43 82 35 398 25 552 -18 88 -24 111 -24 160 1 29 15 45 33 65 75 25 50 27 64 23 135 -6 94 -34 157 -91 204 l-39 31 -441 2 c-360 2 -452 -1 -497 -13z"/>
                    <path d="M3346 1729 c-66 -16 -154 -69 -220 -135 -102 -101 -180 -274 -222 -490 -23 -119 -23 -365 0 -491 72 -399 268 -603 582 -603 261 0 494 143 603 370 35 74 36 77 36 200 0 121 -1 127 -33 192 -45 91 -122 167 -218 215 -75 36 -82 38 -179 38 -93 0 -105 -2 -165 -32 -36 -18 -87 -51 -115 -74 l-50 -41 -3 82 c-5 142 39 309 91 345 27 19 80 19 117 0 16 -8 55 -52 88 -98 34 -49 72 -90 93 -101 33 -18 37 -18 93 -2 49 14 71 29 122 80 53 53 63 70 74 119 17 73 5 114 -54 195 -78 106 -216 193 -359 227 -68 16 -220 18 -281 4z m311 -1019 c68 -41 65 -150 -6 -221 -45 -45 -80 -56 -133 -40 -32 10 -43 20 -59 54 -34 76 -19 162 36 205 37 29 117 30 162 2z"/>
                  </g>
                </svg>
                </Link>
              </div>
              <div className="text-gray-400">Project 5-56; We're the R&D organization to resolve the real issues to make the decentralized finance real.</div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">

              {/* 2nd block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Products</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="https://github.com/users/zkitty-norika/projects/2?pane=info" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">TBD</Link>
                  </li>
                </ul>
              </div>

              {/* 3rd block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Resources</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="https://github.com/users/zkitty-norika/projects/2?pane=info" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Status of Github Project</Link>
                  </li>
                </ul>
              </div>

              {/* 4th block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Company</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="https://0xcerberus.io/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Cerberus Research, Inc.</Link>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">

            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              {/* Twitter Logo */}
              {/* <li>
                <Link href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Twitter">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                  </svg>
                </Link>
              </li> */}
              <li className="ml-4">
                <Link href="https://github.com/zkitty-norika" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Github">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </Link>
              </li>
              {/* <li className="ml-4">
                <Link href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Facebook">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                </Link>
              </li> */}
              {/* <li className="ml-4">
                <Link href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Instagram">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </Link>
              </li> */}
              {/* 
              <li className="ml-4">
                <Link href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Linkedin">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                  </svg>
                </Link>
              </li>
               */}
            </ul>

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">&copy; Project 5-56. All rights reserved.</div>

          </div>

        </div>
      </div>
    </footer>
  )
}
