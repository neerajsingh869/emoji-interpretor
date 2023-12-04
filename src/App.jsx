import { useState } from 'react'
import './App.css'

const symbolEmojisDictionary = {
	"💌": "Love Letter",
	"💞": "Revolving Hearts",
	"💥": "Collision",
	"💢": "Anger Symbol",
	"💦": "Sweat Droplets",
	"🤍": "White Heart",
	"💔": "Broken Heart",
	"💝": "Heart with Ribbon",
	"☢️": "Radioactive",
	"🛜": "Wireless",
	"🕉️": "Om",
	"⚕️": "Medical Symbol"
}

const symbolEmojisAsList = Object.keys(symbolEmojisDictionary);

function Header() {
  return (
    <header>
      <h1>know symbols emojis!</h1>
    </header>
  )
}

function Footer() {
  return (
    <footer>
      { symbolEmojisAsList.map(emojiItem => {
        return (
          <span
            key={ emojiItem }
          >
            { emojiItem }
          </span>
        )
      }) }
    </footer>
  )
}

function App() {

  return (
    <>
      <div>
				<Header />
        <Footer />
			</div>
    </>
  )
}

export default App
