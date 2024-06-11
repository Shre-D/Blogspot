interface Props {
    text:string
}

function PromptCard({text}:Props) {
  return (
    <button className=" mt-10 bg-green-600 p-4 text-white border-2 rounded-2xl">
        <p className="text-center">
        {text}
        </p>    
    </button>
  )
}

export default PromptCard