// Next imports
import Link from "next/link"
import { Button } from "@/components/ui/button"

const socialLinks = [
    { href: "#", Icon: FacebookIcon },
    { href: "#", Icon: InstagramIcon }
  ];
  
const quickLinks = [
    { href: "#", label: "About Us" },
    { href: "#", label: "Contact" },
    { href: "#", label: "Terms and Conditions" },
    { href: "#", label: "Privacy Policy" }
    ];

const footer = () => {
  return (
    <div className="bg-gray-900 text-white py-8 rounded-3xl">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold mb-4">English 0 Cent</h3>
            <p className="text-gray-400 mb-4">Learn English for work, for free</p>
            <div className="flex space-x-4">
              {socialLinks.map(({ href, Icon }, index) => (
                <Link key={index} className="text-gray-400 hover:text-white" href={href}>
                  <Icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link className="text-gray-400 hover:text-white" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-bold mb-4">Join Our Community</h4>
            <p className="text-gray-400 mb-4">Sign up or enroll in our courses to start learning English for free.</p>
            <Button className="w-full md:w-auto" variant="outline">
              Get Started
            </Button>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">© 2024 English 0 Cent. All rights reserved.</div>
    </div>
  )
}


function FacebookIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    )
  }
  
function InstagramIcon(props) {
return (
    <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
)
}


export default footer