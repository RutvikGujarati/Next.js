import React, { Children } from 'react'
import "@styles/globals.css"

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
            {Children}
        </main>
       </body>
      </html>
    </div>
  )
}

export default RootLayout
