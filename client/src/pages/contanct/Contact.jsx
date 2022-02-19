import './contact.css'
import Header from '../../components/header/Header'
export default function Contact() {
  return (
    <>
        <Header/>
        <div>
            <p className='title'>Contact Experts</p>
        </div>
        <div className='chat'>
            <iframe className='chatbot' width="50%" height="400px;" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/2f32fb2c-ab83-4340-a04c-269de669cbea"></iframe>
        </div>
    </>
  )
}
