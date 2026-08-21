const topics = [
  "Technology",
  "Design Thinking",
  "Crypto",
  "NFT",
  "Personal Growth",
  "Reading",
];



const TopTopicList = () => {
  return (
    <section className="shadow-lg p-4 rounded">
      <h1 className="font-serif text-xl font-bold">Topic for you</h1>
        <div className="flex flex-wrap mt-4 space-x-2">
          {
            topics.map((t)=> 
              (<span className="bg-gray-500 ml-2 px-2 py-1 cursor-pointer rounded-full mb-2 hover:bg-gray-400 transition-colors">{t}</span>))
          }
        </div>
    </section>
  )
}

export default TopTopicList