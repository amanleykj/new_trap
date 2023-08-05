import '@styles/globals.css';
import Nav from '@components/Nav'
import Provider from '@components/Provider'
import Link from 'next/link'

export const metadata = {
    title : "TraPWangZ",
    description : "Best wings in the 206/253."
}

const RootLayout = ({children}) => {
  return (
    <html lang = "en">
        <body>
          <Provider>
          
            <div className='main'>
                <div className='gradient'/>
            </div>
            
            <main className='app'>
              <Nav/>
                {children}
            
            </main>
            
          </Provider>

        </body>
    </html>
  )
}

export default RootLayout;