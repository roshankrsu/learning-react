import React from 'react';

function Card({username = " user ", post = "not assigned yet", image="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}) {
    // console.log(props);
    return (
        <>
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src={image} alt="" width="384" height="512"/>
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, maxime?
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div>
        {username}
      </div>
      <div>
        {post}
      </div>
    </figcaption>
  </div>
</figure>
        </>
    )
}

export default Card