import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <Head>
        <title>Webspace - Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='bg-[#043873] h-[500px] text-white'>
        <div className="flex items-center justify-around px-[20px] flex-col md:flex-row py-[30px]">

        <div className="flex flex-col md:w-[600px]">
          <h1 className='text-5xl font-bold mb-[20px] leading-[60px]'>Get More Done with webSpace</h1>
          <p>Project Management tool that enable your team to collaborate,plan,analyze and manage everyday tasks</p>
            <div><button className='w-[200px] p-2 bg-[#FFE492] mt-[50px] text-black'>GET STARTED</button></div>
        </div>

        <div>
          <Image src="/collabo.svg" alt="coworker" width="500px" height="500px"></Image>
        </div>

        </div>
       
      </header>


      <div className='OurTool md:mt-[80px] mt-[190px]'>
        <div className='OurToolContainer flex items-center justify-center px-[30px] flex-col md:flex-row'>
          <div className="flex flex-col md:w-[600px]">
            <h1 className="text-5xl font-bold ">Project <br/>Management</h1>
            <span><Image src='/Element.png' width="300px" height="20px" alt="element"></Image></span>
            <div className='mt-[20px]'>
            <p>Project Management tool that enable your team to collaborate,plan,analyze and manage everyday tasks</p>
            <div><button className='w-[150px] p-2 bg-[#4F9CF9] mt-[50px] text-white shadow' style={{borderRadius:'10px'}}>GET STARTED</button></div>
            </div>
          </div>
          <div>
          <Image src="/coworker.svg" alt="coworker" width="500px" height="500px"></Image>
          </div>
        </div>
      </div>


      <div className="mt-[70px] mb-[160px]">

      <div className='OurToolContainer flex items-center justify-between px-[30px] gap-[30px]  flex-col-reverse md:flex-row'>

      <div>
          <Image src="/toget.png" alt="coworker" width="500px" height="500px"></Image>
          </div>
          <div className="flex flex-col md:w-[600px]">
            <h1 className="text-5xl font-bold ">Work Together</h1>
            <span><Image src='/Elements.png' width="300px" height="20px" alt="element"></Image></span>
            <div className='mt-[20px]'>
            <p>Project Management tool that enable your team to collaborate,plan,analyze and manage everyday tasks</p>
            <div><button className='w-[150px] p-2 bg-[#4F9CF9] mt-[50px] text-white shadow' style={{borderRadius:'10px'}}>Try it Now</button></div>
            </div>
          </div>
         
        </div>

      </div>


 
      <div className='OurTool mt-[80px] bg-[#043873] text-white py-4'>
        <div className='OurToolContainer flex items-center justify-center px-[30px] flex-col-reverse md:flex-row'>
          <div className="flex flex-col md:w-[600px]">
            <h1 className="text-5xl font-bold ">Connect with <br/> other workers</h1>
            <span><Image src='/Element.png' width="300px" height="20px" alt="element"></Image></span>
            <div className='mt-[20px]'>
            <p>Project Management tool that enable your team to collaborate,plan,analyze and manage everyday tasks</p>
            <div><button className='w-[150px] p-2 bg-[#C7B054] mt-[50px] text-white shadow' style={{borderRadius:'10px'}}>GET STARTED</button></div>
            </div>
          </div>
          <div className='-mt-[130px]'>
          <Image src="/worker.png" alt="coworker" width="400px" height="500px"></Image>
          </div>
        </div>
      </div>



      <div className="mt-[70px]">

<div className='OurToolContainer flex items-center justify-between px-[30px] gap-[30px] flex-col md:flex-row'>

<div>
    <Image src="/anal.svg" alt="coworker" width="500px" height="500px"></Image>
    </div>
    <div className="flex flex-col md:w-[600px]">
      <h1 className="md:text-5xl font-bold text-4xl">Easy <br/>Communication</h1>
      <span><Image src='/Elements.png' width="300px" height="20px" alt="element"></Image></span>
      <div className='mt-[20px]'>
      <p>Project Management tool that enable your team to collaborate,plan,analyze and manage everyday tasks
      Project Management tool that enable your team to collaborate,plan,analyze and manage everyday tasks
      </p>
      <div><button className='w-[150px] p-2 bg-[#4F9CF9] mt-[50px] text-white shadow' style={{borderRadius:'10px'}}>Try it Now</button></div>
      </div>
    </div>
   
  </div>

</div>


<div className="h-[350px] bg-[#043873] text-white relative flex items-center justify-center mt-[150px]">
<div className='flex flex-col items-center justify-center z-10 px-2'>
  <h1 className="font-bold md:text-4xl mb-[15px] text-4xl">
    Your work, everywhere you are
  </h1>
  <span className="-mt-[20px] ml-[250px]"><Image src='/tirbe.png' width="170px" height="10px" alt="element"></Image></span>
  <p className="md:w-[700px] text-center text-sm mt-[20px]">Access your projects from your computer,phone or tablet anywhere you go.This app allows you to work with other workers on same projects,giving updates and notifications on latest tasks to be done</p>
  <div><button className='w-[150px] p-2 bg-[#4F9CF9] mt-[50px] text-white shadow' style={{borderRadius:'10px'}}>Try webspace</button></div>
</div>
<div className='absolute -top-[80px] right-0 z-1 px-3'>
  <Image src="/man.png" alt="man" width="400px" height="400px"></Image>
</div>
<div className='absolute -top-[50px] left-0 z-1 px-3'>
  <Image src="/BACKGROUND.png" alt="man" width="400px" height="450px"></Image>
</div>
</div>


<div className='OurTool mt-[80px]'>
        <div className='OurToolContainer flex items-center justify-center px-[30px] flex-col md:flex-row'>
          <div className="flex flex-col md:w-[600px]">
            <h1 className="text-5xl font-bold ">100% your data</h1>
            <span><Image src='/Element.png' width="300px" height="20px" alt="element"></Image></span>
            <div className='mt-[20px]'>
            <p>Project Management tool that enable your team to collaborate,plan,analyze and manage everyday tasks</p>
            <div><button className='w-[150px] p-2 bg-[#4F9CF9] mt-[50px] text-white shadow' style={{borderRadius:'10px'}}>GET STARTED</button></div>
            </div>
          </div>
          <div>
          <Image src="/space.png" alt="coworker" width="500px" height="350px"></Image>
          </div>
        </div>
      </div>


  <div className="mt-[80px] mb-[80px] ">
<div className="flex flex-col items-center justify-center text-center w-[50%] mx-auto">
<h1 className="md:text-5xl font-bold text-3xl ">Our Sponsors</h1>
            <span><Image src='/Element.png' width="150px" height="20px" alt="element"></Image></span>
</div>
    <div className="w-[80%] mx-auto grid grid-cols-2 md:grid-cols-4 items-center justify-between mt-[30px] gap-[30px]">
    <Image src="/apple.png" alt="coworker" width="50px" height="50px"></Image>
    <Image src="/Google.png" alt="coworker" width="50px" height="50px"></Image>
    <Image src="/Microsoft.png" alt="coworker" width="50px" height="50px"></Image>
    <Image src="/Slack.png" alt="coworker" width="50px" height="50px"></Image>

    </div>


  


  </div>



  <div className='OurToolContainer flex items-center justify-around px-[30px] gap-[30px] bg-[#043873] p-6 text-white flex-col md:flex-row'>

<div>
    <Image src="/Apps.png" alt="coworker" width="300px" height="300px"></Image>
    </div>
    <div className="flex flex-col md:w-[600px]">
      <h1 className="text-5xl font-bold ">Work with your favourite Apps using Webspace</h1>
      <span><Image src='/Elements.png' width="300px" height="20px" alt="element"></Image></span>
      <div className='mt-[20px]'>
      <p>Webspace team up with your favourite software integrate over 20+ software needed for your project</p>
      <div><button className='w-[150px] p-2 bg-[#4F9CF9] mt-[50px] text-white shadow' style={{borderRadius:'10px'}}>Try it Now</button></div>
      </div>
    </div>
   
  </div>


  <div className='mt-[80px] Testimonials mb-[120px]'>
    <div className='text-center mb-[50px] relative p-3'>
      <h1 className='text-center md:text-4xl font-bold z-10 text-3xl'>What Our Clients Says</h1>
      <span className="ml-[100px] -mt-[5px] z-1 absolute "><Image src='/Element.png' width="100px" height="20px" alt="element"></Image></span>
    </div>

    <div className='flex items-center justify-center gap-[40px] TestimonialsContainer flex-col md:flex-row'>
      <div className='client h-[300px] w-[300px] shadow flex flex-col p-3 py-[15px]' style={{boxShadow:'-1px 100px 100px rgba(0,0,0,0.1)',borderRadius:'15px'}}>
        <div>
        <Image src='/Quotes.png' width="50px" height="30px" alt="element"></Image>
        <section className="text-sm mt-[25px]">Webspace is designed as collaboration tool for businesses that is a full project management solution</section>
        </div>
        <div className='flex items-center justify-between mt-[80px]'>
        <Image src='/Avateraa.png' width="50px" height="50px" alt="element"></Image>
        <div>
          <h3 className="font-bold text-[#2E70BE]">Shaw Vivian</h3>
          <p>Head of Talent Acquisition</p>
        </div>
        </div>

      </div>

      <div className='client h-[300px] w-[300px] shadow bg-[#4F9CF9] text-white p-3 py-[15px]' style={{boxShadow:'-1px 100px 100px rgba(0,0,0,0.1)',borderRadius:'15px'}}>
        <div>
        <Image src='/t.png' width="50px" height="30px" alt="element"></Image>
        <section  className="text-sm mt-[25px]">Webspace is designed as collaboration tool for businesses that is a full project management solution</section>
        </div>
        <div className='flex items-center justify-between mt-[80px]'>
        <Image src='/Avatera.png' width="50px" height="50px" alt="element"></Image>
        <div>
          <h3 className="font-bold text-[#2E70BE]">Shaw Vivian</h3>
          <p>Head of Talent Acquisition</p>
        </div>
        </div>

      </div>
      <div className='client h-[300px] w-[300px] shadow bg-[#4F9CF9] text-white p-3 py-[15px]'style={{boxShadow:'-1px 100px 100px rgba(0,0,0,0.1)',borderRadius:'15px'}}>
        <div>
        <Image src='/t.png' width="50px" height="30px" alt="element"></Image>
        <section className="text-sm mt-[25px]">Webspace is designed as collaboration tool for businesses that is a full project management solution</section>
        </div>
        <div className='flex items-center justify-between mt-[80px]'>
        <Image src='/Avater.png' width="50px" height="50px" alt="element"></Image>
        <div>
          <h3 className="font-bold text-[#2E70BE]">Shaw Vivian</h3>
          <p>Head of Talent Acquisition</p>
        </div>
        </div>

      </div>
    </div>
  </div>

    
    </>
  )
}
