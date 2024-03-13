import React from 'react';

function Box() {
    return (
        <div
            className="container m-0 min-h-dvh w-11/12 
        rounded-xl border-2 border-fuchsia-400 border-solid 
        mx-auto bg-transparent shadow-3xl shadow-purple-900 
        cursor-pointer p-2.5"
        >
            {/* Add Tailwind CSS classes for styling */}
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                magnam, nostrum repellat repudiandae, molestias natus
                perferendis fugiat odio amet, labore velit et impedit commodi a
                neque? Suscipit quas distinctio eos!
            </p>
        </div>
    );
}

export default Box;
