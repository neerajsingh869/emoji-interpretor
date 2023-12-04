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

function Main({ states, eventHandlers }) {

  return (
    <main>
      <input 
        type="text" 
        placeholder="Search symbols emoji"
        onChange={ eventHandlers.emojiInputHandler }
      />
      <div>
        <div style={{ marginBottom: "1rem", fontSize: "1.4rem" }}>
          { states.emojiInputState }
        </div>
        <div>
          { states.emojiMeaningState }
        </div>
      </div>
    </main>
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
  const [ emojiInput, setEmojiInput ] = useState("");
	const [ emojiMeaning, setEmojiMeaning ] = useState("emoji info will shown here...");

  const handlerEmojiInputChange = (e) => {
		const emojiInput = e.target.value;
		setEmojiInput(emojiInput);

		if (emojiInput === undefined) {
			setEmojiMeaning("Emoji not found in database.");
		} else if (emojiInput in symbolEmojisDictionary) {
			setEmojiMeaning(symbolEmojisDictionary[emojiInput]);
		} else {
			setEmojiMeaning("Failure to recognize emoji");
		}
	}

  return (
    <>
      <div>
				<Header />
        <Main 
          states={{ emojiInputState: emojiInput, emojiMeaningState: emojiMeaning }}
          eventHandlers={{ emojiInputHandler: handlerEmojiInputChange }}   
        />
        <Footer />
			</div>
    </>
  )
}

export default App
