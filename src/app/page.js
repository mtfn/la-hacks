// import Image from "next/image";
// import {Navbar}  from "./navbar"
// import { Nabla } from "next/font/google";

// export default function Home() {
//   return (
//     <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
//       {/* <header style={{ width: '100%', padding: '2rem 0', textAlign: 'center' }}>
//         <h1 style={{ margin: '0', lineHeight: '1.15', fontSize: '4rem' }}>
//           Welcome to <a href="https://nextjs.org" style={{ color: '#0070f3', textDecoration: 'none' }}>Next.js</a>!
//         </h1>
//       </header> */}
//       <Navbar />



//       <main style={{ padding: '5rem 0', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
//         <h1 style={{ margin: '0', lineHeight: '1.15', fontSize: '4rem' }}>
//           Welcome to <a href="https://nextjs.org" style={{ color: '#0070f3', textDecoration: 'none' }}>Next.js</a>!
//         </h1>

//         <p style={{ lineHeight: '1.5', fontSize: '1.5rem' }}>
//           Get started by editing <code style={{ color: '#0070f3', textDecoration: 'none', backgroundColor: '#f0f0f0', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>pages/index.js</code>
//         </p>

//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
//           <a href="#" style={{ margin: '1rem', padding: '1.5rem', textAlign: 'left', color: 'inherit', textDecoration: 'none', border: '1px solid #eaeaea', borderRadius: '10px', transition: 'color 0.15s ease, border-color 0.15s ease' }}>
//             <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.5rem' }}>Documentation &rarr;</h3>
//             <p style={{ margin: '0', fontSize: '1.25rem' }}>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="#" style={{ margin: '1rem', padding: '1.5rem', textAlign: 'left', color: 'inherit', textDecoration: 'none', border: '1px solid #eaeaea', borderRadius: '10px', transition: 'color 0.15s ease, border-color 0.15s ease' }}>
//             <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.5rem' }}>Learn &rarr;</h3>
//             <p style={{ margin: '0', fontSize: '1.25rem' }}>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a href="#" style={{ margin: '1rem', padding: '1.5rem', textAlign: 'left', color: 'inherit', textDecoration: 'none', border: '1px solid #eaeaea', borderRadius: '10px', transition: 'color 0.15s ease, border-color 0.15s ease' }}>
//             <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.5rem' }}>Examples &rarr;</h3>
//             <p style={{ margin: '0', fontSize: '1.25rem' }}>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a href="#" style={{ margin: '1rem', padding: '1.5rem', textAlign: 'left', color: 'inherit', textDecoration: 'none', border: '1px solid #eaeaea', borderRadius: '10px', transition: 'color 0.15s ease, border-color 0.15s ease' }}>
//             <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.5rem' }}>Deploy &rarr;</h3>
//             <p style={{ margin: '0', fontSize: '1.25rem' }}>Instantly deploy your Next.js site to a public URL with Vercel.</p>
//           </a>
//         </div>
//       </main>

//       <footer style={{ width: '100%', height: '100px', borderTop: '1px solid #eaeaea', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//           style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
//         >
//           Powered by{' '}
//           <img src="/vercel.svg" alt="Vercel Logo" style={{ marginLeft: '0.5rem', height: '1em' }} />
//         </a>
//       </footer>
//     </div>
//   )
// }
// // export default function Home() {
// //   return (
// //     <main className="flex min-h-screen flex-col items-center justify-between p-24">
// //       <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
// //         <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
// //           Get started by editing&nbsp;
// //           <code className="font-mono font-bold">src/app/page.js</code>
// //         </p>
// //         <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
// //           <a
// //             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
// //             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             By{" "}
// //             <Image
// //               src="/vercel.svg"
// //               alt="Vercel Logo"
// //               className="dark:invert"
// //               width={100}
// //               height={24}
// //               priority
// //             />
// //           </a>
// //         </div>
// //       </div>

// //       <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
// //         <Image
// //           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
// //           src="/next.svg"
// //           alt="Next.js Logo"
// //           width={180}
// //           height={37}
// //           priority
// //         />
// //       </div>

// //       <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
// //         <a
// //           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
// //           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           <h2 className={`mb-3 text-2xl font-semibold`}>
// //             Docs{" "}
// //             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
// //               -&gt;
// //             </span>
// //           </h2>
// //           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
// //             Find in-depth information about Next.js features and API.
// //           </p>
// //         </a>

// //         <a
// //           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           <h2 className={`mb-3 text-2xl font-semibold`}>
// //             Learn{" "}
// //             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
// //               -&gt;
// //             </span>
// //           </h2>
// //           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
// //             Learn about Next.js in an interactive course with&nbsp;quizzes!
// //           </p>
// //         </a>

// //         <a
// //           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
// //           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           <h2 className={`mb-3 text-2xl font-semibold`}>
// //             Templates{" "}
// //             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
// //               -&gt;
// //             </span>
// //           </h2>
// //           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
// //             Explore starter templates for Next.js.
// //           </p>
// //         </a>

// //         <a
// //           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
// //           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           <h2 className={`mb-3 text-2xl font-semibold`}>
// //             Deploy{" "}
// //             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
// //               -&gt;
// //             </span>
// //           </h2>
// //           <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
// //             Instantly deploy your Next.js site to a shareable URL with Vercel.
// //           </p>
// //         </a>
// //       </div>
// //     </main>
// //   );
// // }

import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem, Button, Link} from "@nextui-org/react";
import Image from "next/image";
// import {Navbar}  from "../../components/navbar"
import { Nabla } from "next/font/google";
// import Link from "next/link"
// import Button from "next/button"

export default function Home() {
  return (
    <>
    <Navbar style={{backgroundColor:"white"}}>
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    {/* <div style={{display:"block",width: "100vw", backgroundColor: "white", height: "90vh"}}>
        <h1 style={{paddingTop:"20vh",textAlign:"center",color:"black",fontSize:"4rem"}}>Un-GateKeep</h1>
        <h2 style={{textAlign:"center",color:"black",fontSize:"3rem"}}>Never Get Bitched Again</h2>  
    </div> */}
    <div style={{width:"100%"}}>
      <h1>Hi!</h1>
    </div>
    </> 
  )
}