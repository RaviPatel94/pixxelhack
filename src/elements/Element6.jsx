import { Marquee } from '@/components/magicui/marquee'
import React from 'react'

function Element6() {
const reviews = [
 {
   name: "Sarah Chen",
   username: "@sarahc",
   body: "This place is pure magic! Spent 2 hours here and didn't want to leave. The cats are so friendly and the coffee is surprisingly excellent. Luna the tabby stole my heart!",
   img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=150&h=150&fit=crop&crop=face",
 },
 {
   name: "Mike Rodriguez",
   username: "@mikerod",
   body: "Never thought I was a cat person until I visited here. The atmosphere is so relaxing and therapeutic. Whiskers kept me company while I worked on my laptop. Best productivity session ever!",
   img: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=150&h=150&fit=crop&crop=face",
 },
 {
   name: "Emily Watson",
   username: "@emwatson",
   body: "Perfect date spot! My boyfriend and I had the most adorable afternoon here. The cats are well-cared for and the staff is knowledgeable. The lavender latte was divine too!",
   img: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=150&h=150&fit=crop&crop=face",
 },
 {
   name: "David Park",
   username: "@dpark",
   body: "As someone with anxiety, this place is my sanctuary. The gentle purring and soft fur instantly calms me down. Plus, they have amazing pastries that pair perfectly with their specialty drinks.",
   img: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=150&h=150&fit=crop&crop=face",
 },
 {
   name: "Lisa Thompson",
   username: "@lisaT",
   body: "Brought my daughter here for her birthday and she absolutely loved it! The cats are so gentle with kids. We adopted Mittens that same day - couldn't resist those green eyes!",
   img: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=150&h=150&fit=crop&crop=face",
 },
 {
   name: "Alex Kumar",
   username: "@alexk",
   body: "Work meetings here are the best! Nothing beats discussing quarterly reports while a fluffy orange cat naps on your notes. The wifi is strong and the ambiance is unbeatable.",
   img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
 },
];

  return (
    <div className='bg-[#FDF6E3] py-20'>
      <h1 className='text-4xl ml-5 font-mono font-semibold mb-4'> What our customer's said!</h1>
      <Marquee pauseOnHover className=" rounded-md">
        {reviews.map((review, i) => (
          <div
            key={i}
            className="flex flex-col w-44 xl:w-96  hover:scale-105 gap-4 border bg-white border-gray-300 rounded-lg px-4 py-4 shadow-md min-w-[300px]"
          >
            <div className='flex '>
              <img
              src={review.img}
              alt={review.name}
              className="w-12 h-12 mr-3 rounded-full object-cover"
            />
            <p className="font-semibold flex flex-col item-start justify-start">{review.name} <span className="">{review.username}</span></p>
            </div>
            <div>
              <p className="text-sm text-gray-700">{review.body}</p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default Element6;
