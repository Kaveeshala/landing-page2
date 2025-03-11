import Link from "next/link"

export default function Navbar() {
    const firstnavLinks = [
      {
        name: 'HOME',
        link: '/'
      }, 
      {
        name: 'ABOUT',
        link: '/'
      }, 
      {
        name: 'SERVICES',
        link: '/'
      },   
    ]

    const secondnavLinks = [
        {
            name: 'TESTIMONIALS',
            link: '/'
          }, 
          {
            name: 'TEAM',
            link: '/'
          }, 
          {
            name: 'CONTACT US',
            link: '/'
          },   
        
    ]


  return (
    <div className="max-w-7xl mx-auto flex items-center justify-between py-4">
        <div className="flex gap-2">
        {firstnavLinks.map((link, index) => (
            <Link href={link.link} key={index} className='hover:underline border border-black rounded-full px-6 py-1'>{link.name}</Link>

        ))}
        </div>
        

        <h1 className="text-3xl">SUNOVA</h1>

        <div className="flex gap-4">
        {secondnavLinks.map((link, index)=> (
            <Link href={link.link} key={index} className="hover:underline border border-black rounded-full px-6 py-1">{link.name}</Link>
        ))}
        </div>

        

    </div>

  )

}
