"use client"
import {useEffect, useState} from 'react'
import Image from 'next/image'
import { ArrowRight, Code, CodeIcon, EyeIcon, ImageIcon, LayoutDashboard, MenuIcon, MessageSquare, MusicIcon, Settings, VideoIcon } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import {useRouter} from 'next/navigation'





const routes = [

 
    {
      label: "Ellumen® Chatbot",
      icon: MessageSquare,
      href: "/chatbot",
      color: "text-blue-b00",
      bgColor: 'text-blue-600'
      },
  
            {
              label: "Settings",
              icon: Settings,
              href: "/settings",
              
              }
            
          

]

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

  




const DashboardPage = ()=>{

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)

 

  const router = useRouter()

  
  return (

    
    <div>
       <div className='mb-8 space-y-4'>
        <h2 className='text-2xl md:text-4xl font-bold text-center'>
        ZEITIOS® Dashboard
        </h2>

        <p className='text-muted-foreground font-light text-sm md:text-lg text-center'>
        ZEITIOS® - Leading Machine Learning Products
        </p>
       </div>

       <div className='px-2 md:px-32 py-4'>
       {
        routes.map((tool, index)=>
          <Card 
          onClick={()=>router.push(tool.href)}
          key={index}
          className='p-3 border-black/5 flex items-center justify-between 
          hover:shadow-md gap-2
          transition cursor-pointer'
          >

            <div className='flex items-center gap-x-4'>

             <div className={cn(`w-p-2 w-fit rounded-md`, tool.bgColor)}>
              <tool.icon className={cn('w-8 h-8', tool.color)} />
             </div>

             <div className='font-semibold'>
              {tool.label}
             </div>

            </div>
            <ArrowRight className='w-5 h-5' />
          </Card>
        )
       }
       </div>

    </div>
 
      
  )
}

export default DashboardPage
