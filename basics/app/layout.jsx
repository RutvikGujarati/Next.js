import React, { Children } from 'react'
import "@styles/globals.css"
import Nav from "../components/nav"
import Provider from "../components/provider"

export const metadata ={
    title : "promptAI",
    description : "PromptAI is a platform to help you build a better world",
    keywords : "AI, Machine Learning, NLP, Natural Language Processing"
}

const RootLayout = ({Children}) => {
  return (
    <div>
      <html lang='en'>
       <body>
        <div className='main'>
            <div className='gradient'/>
        </div>
        <main className='app'>
          <Nav />
            {Children}
        </main>
       </body>
      </html>
    </div>
  )
}

export default RootLayout
