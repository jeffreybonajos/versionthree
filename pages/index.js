import React from "react";
import Link from "next/link";

const Index = () => (
    <div>
        <h1>Welcome to Next.js! </h1>
        <p>Go to<Link href="/auth"><a>Auth</a></Link></p>
    </div>
);
    
  
  
  export default Index