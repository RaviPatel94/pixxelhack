import { Marquee } from '@/components/magicui/marquee'
import React from 'react'

function Element6() {
  const reviews = [
    {
      name: "Jack",
      username: "@jack",
      body: "I've never seen anything like this before. It's amazing. I love it.",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Jill",
      username: "@jill",
      body: "I don't know what to say. I'm speechless. This is amazing.",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "John",
      username: "@john",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/john",
    },
  ];

  return (
    <div>
      <h1 className='text-2xl mb-4'>Element 6</h1>
      <Marquee pauseOnHover className="bg-gray-100 rounded-md">
        {reviews.map((review, i) => (
          <div
            key={i}
            className="flex items-center gap-4 border border-gray-300 rounded-lg px-4 py-2 bg-white shadow-md min-w-[300px]"
          >
            <img
              src={review.img}
              alt={review.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">{review.name} <span className="text-gray-500">{review.username}</span></p>
              <p className="text-sm text-gray-700">{review.body}</p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default Element6;
